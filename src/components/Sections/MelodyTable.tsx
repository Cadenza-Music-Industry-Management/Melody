import "./MelodyTable.css"
import {
    DropdownOption,
    MelodyTableColumn,
    MelodyTableColumnDisabledSettings,
    MelodyTableHeader,
    NavBarItemProps,
    TableProps
} from "@/components/Melody/src/components/types";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    Getter,
    PaginationState,
    Row,
    useReactTable
} from "@tanstack/react-table";
import { IApparel, IApparelOrder, IArtist, IBlogPost, IEventHistory, IPromoter, IRelease } from "@/constants/types";
import React, { Fragment, useEffect, useMemo, useState } from "react";
import { convertUTCDateToLocalDate } from "@/utils/functions";
import { Label } from "../Layouts/Label";
import { Spinner } from "@/components/Melody/src/components/Layouts/Spinner";
import { Button } from "@/components/Melody/src/components/Inputs/Button";
import { Image } from "@/components/Melody/src/components/Layouts/Image";
import SocialMediaComponent from "@/components/SocialMediaComponent";
import ArtistTableFooter from "@/components/hooks/usePageableTable/footers/ArtistTableFooter";
import { Checkbox } from "@/components/Melody/src/components/Inputs/Checkbox";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";
import { useDashboardState } from "@/zustand/stores";
import { ButtonMenu } from "@/components/Melody/src/components/Inputs/ButtonMenu";
import { useQuery } from "react-query";
import { Dropdown } from "@/components/Melody/src/components/Inputs/Dropdown";
import { useMelodySearch } from "@/components/Melody/src/components/Sections/MelodySearch";

type AcceptableCastTypes = IEventHistory | IRelease | IArtist | IApparel | IApparelOrder | IBlogPost | IPromoter

export function MelodyTable(
    {
        tableName,
        rowsCanExpand = false,
        columnsToDisplay,
        showRowCount = true,
        showPagination = true,
        columnResizing = false,
        fetchData,
        defaultPageSize = 10,
        filterItems
    }: TableProps<AcceptableCastTypes>) {

    //NOTE use this for items such as siteEnabled and userPermissions, but if used outside of dashboard, will show up as null hopefully
    //TODO issue with this probably as zustand is local to iQ, not to melody library
    const currentOrg = useDashboardState((state) => state.group)

    const [processingRequest, setProcessingRequest] = useState(false)
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>(
        { pageIndex: 0, pageSize: defaultPageSize }
    )

    //TODO need to check for url for dashboard so not to check this if outside of org
    function getQueryIsEnabled() {
        return currentOrg !== null
    }


    const {
        filters,
        searchUI
    } = useMelodySearch({
        onSearch: () => dataQuery.refetch(),
        items: filterItems ?? [],
        processingRequest
    });

    const fetchDataOptions = useMemo(() => {
        return {
            pageIndex,
            pageSize,
            filters
        };
    }, [pageIndex, pageSize, filters]);

    const dataQuery = useQuery(
        ["data", fetchDataOptions],
        () => fetchData(fetchDataOptions),
        { keepPreviousData: true, enabled: getQueryIsEnabled() }
    )

    useEffect(() => {
        dataQuery.refetch()
    }, [filters])

    useEffect(() => {
        setProcessingRequest(dataQuery.isLoading)
    }, [dataQuery.isLoading])

    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,

        }),
        [pageIndex, pageSize]
    )

    const table = useReactTable<AcceptableCastTypes>({
        data: dataQuery.data?.rows ?? [],
        columns: getColumnsToDisplay(),
        getRowCanExpand: () => rowsCanExpand,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        columnResizeMode: columnResizing ? "onChange" : undefined,
        //Pagination
        pageCount: dataQuery.data?.pageCount ?? -1,
        state: {
            pagination,
        },
        onPaginationChange: setPagination,
        manualPagination: true
    })

    const renderSubComponent = ({ row }: { row: Row<AcceptableCastTypes> }) => {
        return (
            <div>
                {tableName === "Artists" &&
                    <ArtistTableFooter object={(row.original as IArtist)} />
                }
            </div>
        )
    }

    function calculateDisabledAndMessageFromSettings(
        row: Row<AcceptableCastTypes>,
        column: MelodyTableColumn<AcceptableCastTypes>,
        disabledSettings?: MelodyTableColumnDisabledSettings[],
        disabled?: boolean,
    ) {
        let disabledResultFound = false
        let errorMessage = "No error found"

        if (disabled === true) {
            errorMessage = "This field is disabled"
            disabledResultFound = true
        }

        if (!disabledResultFound) {
            disabledSettings?.forEach(disabledSetting => {
                //Skip disabled setting if reason to display already found
                if (!disabledResultFound) {
                    if (disabledSetting.disabledField === "siteEnabled") {
                        if (currentOrg?.site?.enabled === false) {
                            errorMessage = disabledSetting.disabledMessage
                            disabledResultFound = true
                        }
                    } else {
                        //Date comparison for certain fields passed in
                        if (["postingDate", "releaseDate", "sellTime"].includes(disabledSetting.disabledField)) {
                            if (new Date() < new Date((row.original as any)[disabledSetting.disabledField])) {
                                errorMessage = disabledSetting.disabledMessage
                                disabledResultFound = true
                            }
                        } else {
                            if (row.original) {
                                if ((disabledSetting.userPermission && currentOrg?.requestUserPermissions)) {
                                    if ((currentOrg?.requestUserPermissions as any)[disabledSetting.disabledField] === false) {
                                        errorMessage = disabledSetting.disabledMessage
                                        disabledResultFound = true
                                    }
                                } else if (disabledSetting.disabledField === "viewable" && (row.original as any)[disabledSetting.disabledField] === false) {
                                    errorMessage = disabledSetting.disabledMessage
                                    disabledResultFound = true
                                } else if (!(row.original as any)[disabledSetting.disabledField]) {
                                    errorMessage = disabledSetting.disabledMessage
                                    disabledResultFound = true
                                }
                            }
                        }
                    }
                }
            })
        }

        return {
            disabledResultFound,
            errorMessage
        }
    }

    function getTableDropdownValues(column: MelodyTableColumn<AcceptableCastTypes>, row: Row<AcceptableCastTypes>): NavBarItemProps[] | undefined {

        return column.dropdownOptions?.map(option => {
            const functionArguments: any[] = [];
            option.dropdownParams.forEach(param => {
                if (param.stringValue === "ALL_ROW") {
                    functionArguments.push(row.original)
                } else {
                    functionArguments.push(param.propertyValue ? (row.original as any)[param.stringValue] : param.stringValue)
                }
            })

            const { disabledResultFound, errorMessage } = calculateDisabledAndMessageFromSettings(
                row,
                column,
                option.disabledSettings,
                option.disabled
            )

            return {
                name: option.title,
                onClick: () => option.dropdownFunction.apply(null, functionArguments),
                disabled: disabledResultFound,
                //TODO need disabled hover message
                icon: option.icon
            }
        })
    }

    function getCellHeaderFormatting(header: MelodyTableHeader<AcceptableCastTypes>) {

        //TODO rest of implementation from interface

        let valueToDisplay;
        if (header.formatType) {
            switch (header.formatType) {
                case "text":
                    valueToDisplay = header.title
                    break
                case "image":
                    if (header.image) {
                        valueToDisplay = <Icon icon={header.image} />
                    }
                    break
            }
        } else {
            valueToDisplay = header.title
        }

        return (
            <div style={{

            }}>
                {valueToDisplay}
            </div>
        )
    }

    function getCellValueFormatting(column: MelodyTableColumn<AcceptableCastTypes>, row: Row<AcceptableCastTypes>, getValue: Getter<any>) {

        let valueToDisplay;
        if (column.formatType) {
            switch (column.formatType) {
                case "date":
                    valueToDisplay = <div className={"melody-pl-1"}>
                        {convertUTCDateToLocalDate(new Date(getValue<string>())).toDateString()}
                    </div>
                    break
                case "datetime":
                    valueToDisplay = <div className={"melody-pl-1"}>
                        {convertUTCDateToLocalDate(new Date(getValue<string>())).toLocaleString()}
                    </div>
                    break
                case "text":
                    valueToDisplay = <div className={"melody-pl-1"}>
                        {getValue<string>()}
                    </div>
                    break
                case "image":
                    //TODO need large image modal
                    valueToDisplay = <div className={"melody-flex melody-justify-center"}>
                        <Image additionalClasses="melody-rounded"
                                            src={getValue<string>()}
                                            width={30} //TODO why is width/height required here but no where else on the site???
                                            height={30}
                                            //TODO how to generate alt for image
                                            alt="" />
                    </div>
                    break
                case "social_media":
                    if (row.original) {
                        if (tableName === "Artists") {
                            const artist = (row.original as IArtist)
                            valueToDisplay = <SocialMediaComponent facebook={artist.facebook}
                                                                   twitter={artist.twitter}
                                                                   audius={artist.audius}
                                                                   soundcloud={artist.soundcloud}
                                                                   instagram={artist.instagram}
                                                                   website={artist.website}
                                                                   youtube={artist.youtube}
                                                                   spotify={artist.spotify}
                                                                   tiktok={artist.tiktok} />
                        }
                    }
                    break
                case "checkbox":
                    if (row.original) {
                        valueToDisplay = <div className={"melody-flex melody-justify-center"}>
                            <Checkbox value={(row.original as any)[column.accessorKey]}
                                      additionalParentStyles={{justifyContent: "start"}}
                                      onChange={(checked: boolean) => {
                                          if (column.function?.linkedFunctions && column.function?.linkedFunctions.length > 0 && !column.disabled) {
                                              column.function?.linkedFunctions[0](column.function?.linkedFunctionIdParam === true ? row.original.id : row.original, checked)
                                          }
                                      }}
                                      disabled={column.disabled} />
                        </div>
                    }
                    break
                case "dropdown":
                    valueToDisplay = <div className={"melody-flex melody-justify-center"}>
                        <ButtonMenu label={'Actions'}
                                    size={"small"}
                                    items={getTableDropdownValues(column, row) ?? []} />
                    </div>
                    break
            }

        } else { //"Text" default
            valueToDisplay = <div className={"melody-pl-1"}>
                {getValue<string>()}
            </div>
        }


        return valueToDisplay
    }

    function getColumnsToDisplay(): ColumnDef<AcceptableCastTypes>[] {

        let columns: ColumnDef<AcceptableCastTypes>[] = []

        if (rowsCanExpand) {
            columns.push({
                id: 'expander',
                header: () => null,
                cell: ({ row }: { row: Row<AcceptableCastTypes> }) => {
                    return row.getCanExpand() ? (
                            <div className={"melody-flex melody-justify-center"}>
                                <Button icon={{ icon: row.getIsExpanded() ? "caretDown" : "caretRight", additionalClasses: "melody-text-black-0" }}
                                        color={'white'}
                                        {...{onClick: row.getToggleExpandedHandler()}} />
                            </div>
                    ) : null
                },
                minSize: 10,
                size: 30,
                maxSize: 40
            })
        }

        columns.push.apply(columns, columnsToDisplay.map(column => ({
            accessorKey: column.accessorKey ?? "",
            header: () => getCellHeaderFormatting(column.header),
            cell: ({ row, getValue }) => getCellValueFormatting(column, row, getValue),
            size: column.size,
            minSize: column.minSize,
            maxSize: column.maxSize
        })))

        return columns
    }

    function getPaginationComponentSection() {
        return (
            <div className="melody-flex melody-items-center melody-gap-2 melody-flex-wrap melody-ml-auto">

                {dataQuery.isFetching ? 'Loading...' : null}

                <div className="melody-flex melody-items-center melody-gap-1">
                    <Label label={`Page ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`} size={"small"} bold={true} />
                </div>

                {/*<span className="melody-flex melody-items-center melody-gap-1">*/}
                {/*    <Label label={"| Go To Page:"} size={"small"} />*/}
                {/*    <div className={"melody-max-w-[150px]"}>*/}
                {/*         <TextInput type={"number"}*/}
                {/*                    defaultValue={table.getState().pagination.pageIndex + 1}*/}
                {/*                    size={"small"}*/}
                {/*                    min={1}*/}
                {/*                    disabled={!table.getCanNextPage() && !table.getCanPreviousPage()}*/}
                {/*                    onChange={(newValue) => {*/}
                {/*                        const page = newValue ? Number(newValue) - 1 : 0*/}
                {/*                        table.setPageIndex(page)*/}
                {/*                    }} />*/}
                {/*    </div>*/}
                {/*</span>*/}

                <div className={"melody-max-w-[150px]"}>
                    <Dropdown onChange={(selection) => table.setPageSize(Number((selection as DropdownOption).value)) }
                              size={"small"}
                              defaultValue={{ label: `Show ${pageSize}`, value: pageSize }}
                              options={[10, 20, 30, 40, 50].map(pageSizeListVal => ({ label: `Show ${pageSizeListVal}`, value: pageSizeListVal }))} />
                </div>

                <Button icon={{ icon: "paginationLeft" }}
                        color={'white'}
                        size={"small"}
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.setPageIndex(0)} />

                <Button icon={{ icon: "caretLeft" }}
                        color={'white'}
                        size={"small"}
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.previousPage()} />

                <Button icon={{ icon: "caretRight" }}
                        color={'white'}
                        size={"small"}
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.nextPage()} />

                <Button icon={{ icon: "paginationRight" }}
                        color={'white'}
                        size={"small"}
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)} />

            </div>
        )
    }

    return (
        <div className="melody-p-1 melody-w-full melody-block">

            {searchUI}

            {dataQuery.data && dataQuery.data?.rows.length > 0 &&
              <table className={"melody-rounded-lg melody-border-separate melody-border-spacing-0 melody-w-full"}>
                <thead>
                {table.getHeaderGroups().map((headerGroup, index) => (
                    <tr key={headerGroup.id}
                        className={`melody-bg-primary-100 melody-border melody-border-gray-300 ${index === 0 ? 'melody-rounded-t-lg' : ''}`}>

                        {headerGroup.headers.map((header, columnIndex) => {

                            let melodyColumn = columnsToDisplay[rowsCanExpand ? columnIndex - 1 : columnIndex]
                            let melodyColumnHeader: MelodyTableHeader<AcceptableCastTypes> | undefined;
                            if (melodyColumn) {
                                melodyColumnHeader = melodyColumn.header
                            } else if (header.id === "expander") {
                                melodyColumnHeader = {
                                    formatType: "image",
                                    image: "arrowTurnDown",
                                }
                            }

                            //Note: header.id is the accessor key value from column
                            return (
                                <th key={header.id}
                                    colSpan={header.colSpan}
                                    style={{
                                        width: header.getSize(),
                                        ...melodyColumnHeader?.additionalCSS
                                    }}
                                    className={`melody-p-0.5 melody-font-bold melody-text-white melody-border-l melody-border-r
                                        ${columnIndex === 0 ? 'melody-rounded-tl-lg' : ''} ${columnIndex === headerGroup.headers.length - 1 ? 'melody-rounded-tr-lg' : ''}`}>
                                    {header.isPlaceholder ? null : (
                                        <>
                                            {header.id === "expander" && melodyColumnHeader?.image ?
                                                <Icon icon={melodyColumnHeader.image} />
                                                :
                                                flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )
                                            }
                                        </>
                                    )}
                                    {columnResizing &&
                                      <div
                                          {...{
                                              onMouseDown: header.getResizeHandler(),
                                              onTouchStart: header.getResizeHandler(),
                                              className: `resizer ${
                                                  header.column.getIsResizing() ? 'isResizing' : ''
                                              }`,
                                              style: {
                                                  transform: header.column.getIsResizing()
                                                      ? `translateX(${
                                                          table.getState().columnSizingInfo.deltaOffset
                                                      }px)` : ''
                                              },
                                          }}
                                      />
                                    }
                                </th>
                            )
                        })}

                    </tr>
                ))}
                </thead>

                <tbody>
                {table.getRowModel().rows.map((row, rowIndex) => {
                    return (
                        <Fragment key={row.id}>
                            <tr className={`melody-bg-white ${rowIndex === table.getRowModel().rows.length - 1 ? 'melody-rounded-b-lg' : ''}`}>
                                {row.getVisibleCells().map((cell, cellIndex) => {
                                    {/*${cellIndex === 0 ? 'melody-border-l' : ''}  ${cellIndex === row.getVisibleCells().length - 1 ? 'melody-border-r' : ''}*/}
                                    return (
                                        <td key={cell.id}
                                            className={`melody-p-1 melody-border-b melody-border-gray-300 melody-border-l melody-border-r
                                                ${(!row.getIsExpanded() && cellIndex === 0 && rowIndex === table.getRowModel().rows.length - 1) ? 'melody-rounded-bl-lg' : ''} ${(!row.getIsExpanded() && cellIndex === row.getVisibleCells().length - 1 && rowIndex === table.getRowModel().rows.length - 1) ? 'melody-rounded-br-lg' : ''}`}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>

                            {/*TODO add framer motion effect to this so small effect for expanded row showing up?*/}
                            {row.getIsExpanded() && (
                                <tr className={`melody-bg-white `}>
                                    {/* 2nd row is a custom 1 cell row */}
                                    <td colSpan={row.getVisibleCells().length}
                                        className={`melody-p-1 melody-border-b melody-border-gray-300 melody-border-l melody-border-r
                                        ${(row.getIsExpanded() && rowIndex === table.getRowModel().rows.length - 1) ? 'melody-rounded-bl-lg' : ''} ${(row.getIsExpanded() && rowIndex === table.getRowModel().rows.length - 1) ? 'melody-rounded-br-lg' : ''}`}>
                                        {renderSubComponent({ row })}
                                    </td>
                                </tr>
                            )}
                        </Fragment>
                    )
                })}
                </tbody>
              </table>
            }

            {dataQuery.data?.rows && dataQuery.data?.rows.length == 0 &&
              <div className={"melody-text-center"}>
                <Label label={`No ${tableName} Found`} bold={true} size={'medium'} />
              </div>
            }

            {!dataQuery.data &&
              <div className={"melody-text-center"}>
                <h4>{tableName} Loading...</h4>
                <Spinner />
              </div>
            }

            {dataQuery.data?.rows && dataQuery.data?.rows.length > 0 && (showRowCount || showPagination) &&
              <div className={"melody-py-1 melody-flex melody-items-center"}>

                  {showRowCount &&
                    <p className={"melody-text-left melody-font-bold melody-text-sm melody-pl-2"}>
                        {table.getRowModel().rows.length} Rows
                    </p>
                  }

                  {showPagination && getPaginationComponentSection()}
              </div>
            }
        </div>
    )
}