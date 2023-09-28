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
    getSortedRowModel,
    Getter,
    PaginationState,
    Row,
    SortingState,
    useReactTable,
    Header
} from "@tanstack/react-table";
import {
    AccountingSource,
    ApparelSearch,
    ArtistSearch,
    BlogSearch,
    Expense,
    IApparel,
    IApparelOrder,
    IArtist,
    IBlogPost,
    IEventHistory,
    Income,
    IPromoter,
    IRelease,
    LinkDto,
    PromotionPageDto,
    ReleasePromotion,
    ReleaseSearch,
    StorageFile,
    TaskOnBoard
} from "@/constants/types";
import { Fragment, ReactNode, useEffect, useMemo, useState } from "react";
import { convertUTCDateToLocalDate, getBadgeStatusColor } from "@/utils/functions";
import { Label } from "../Layouts/Label";
import { Spinner } from "@/components/Melody/src/components/Layouts/Spinner";
import { Button } from "@/components/Melody/src/components/Inputs/Button";
import Image from "next/image";
import SocialMediaComponent from "@/components/SocialMediaComponent";
import { Checkbox } from "@/components/Melody/src/components/Inputs/Checkbox";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";
import { useDashboardState } from "@/zustand/stores";
import { ButtonMenu } from "@/components/Melody/src/components/Inputs/ButtonMenu";
import { useQuery } from "react-query";
import { Dropdown } from "@/components/Melody/src/components/Inputs/Dropdown";
import { useMelodySearch } from "@/components/Melody/src/components/Sections/MelodySearch";
import {motion} from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/Melody/src/components/Layouts/Badge";
import { getBlurDataURLForNextImage } from "@/components/Melody/src/utils/functions";
import { useMediaQuery } from "react-responsive";
import { TextInput } from "@/components/Melody/src/components/Inputs/TextInput";

type AcceptableCastTypes = IEventHistory | IRelease | IArtist | IApparel | IApparelOrder | IBlogPost | IPromoter | AccountingSource | Income | Expense | StorageFile | ArtistSearch | BlogSearch | ReleaseSearch | ApparelSearch | ReleasePromotion | PromotionPageDto | TaskOnBoard

export function MelodyTable(
    {
        tableName,
        rowsCanExpand = false,
        columnsToDisplay,
        showRowCount = true,
        showPagination = true,
        showPaginationDropdown = true,
        columnResizing = false,
        fetchData,
        defaultPageSize = 10,
        filterItems,
        dropdown,
        queryId
    }: TableProps<any>) { //TODO AcceptableCastTypes not working with next build anymore?

    //NOTE use this for items such as siteEnabled and userPermissions, but if used outside of dashboard, will show up as null hopefully
    //TODO issue with this is zustand is local to Cadenza, not to melody library so will need to install to storybook, hopefully not store though?
    const currentOrg = useDashboardState((state) => state.group)
    const slideOverOpenName = useDashboardState((state) => state.slideOverOpenName)
    const setLargeImageModalDetails = useDashboardState((state) => state.setLargeImageModalDetails)

    const [sorting, setSorting] = useState<SortingState>([])
    const [processingRequest, setProcessingRequest] = useState(false)
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>(
        { pageIndex: 0, pageSize: defaultPageSize ?? 10 }
    )
    const [selectedColumnIDs, setSelectedColumnIDs] = useState<string[]>([])

    //TODO need to check for url for dashboard so not to check this if outside of org when using table outside of dashboard
    function getQueryIsEnabled() {
        return currentOrg !== null
    }

    const {
        filters,
        searchUI
    } = useMelodySearch({
        items: filterItems ?? [],
        onRefreshClicked: () => setSelectedColumnIDs([]),
        processingRequest
    })

    const fetchDataOptions = useMemo(() => {
        return {
            pageIndex,
            pageSize,
            filters
        };
    }, [pageIndex, pageSize, filters]);

    const dataQuery = useQuery(
        [queryId, fetchDataOptions],
        () => fetchData(fetchDataOptions),
        { enabled: getQueryIsEnabled() }
    )

    useEffect(() => {
        if (currentOrg) dataQuery.refetch()
    }, [filters, slideOverOpenName, currentOrg])

    useEffect(() => {
        const dataIds = dataQuery.data?.rows.map(row => row.id)
        if (dataIds) {
            setSelectedColumnIDs(selectedColumnIDs.filter((id) => dataIds.includes(id)))
        }
    }, [dataQuery.data])

    useEffect(() => {
        setProcessingRequest(dataQuery.isLoading)
    }, [dataQuery.isLoading])

    const pagination = useMemo(() => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    )

    const isLargeScreenWidth = useMediaQuery({
        query: '(min-width: 1250px)'
    })
    const isSmallScreenWidth = useMediaQuery({
        query: '(min-width: 850px)'
    })

    //TODO potential issues if two columns have same accessor key like link and image on file storage tool
    useEffect(() => {
        toggleColumnVisibility("hideOnSmallWidth", isLargeScreenWidth)
    }, [isLargeScreenWidth])

    useEffect(() => {
        toggleColumnVisibility("hideOnPhoneWidth", isSmallScreenWidth)
    }, [isSmallScreenWidth])

    function toggleColumnVisibility(fieldToCheck: string, screenSizeValue: boolean) {
        table.getAllColumns().forEach(column => {
            const columnToRender = columnsToDisplay.find(colToDisplay => colToDisplay.accessorKey === column.id && colToDisplay[fieldToCheck] === true)
            if (columnToRender) {
                column.toggleVisibility(screenSizeValue)
            }
        })
    }

    const renderedColumns = useMemo(() => {
        return getColumnsToDisplay()
    }, [columnsToDisplay, selectedColumnIDs])

    const table = useReactTable<AcceptableCastTypes>({
        data: dataQuery.data?.rows ?? [],
        columns: renderedColumns,
        getRowCanExpand: () => rowsCanExpand,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        columnResizeMode: columnResizing ? "onChange" : undefined,
        //Pagination
        state: {
            pagination,
            sorting
        },
        pageCount: dataQuery.data?.pageCount ?? -1,
        onPaginationChange: setPagination,
        manualPagination: true,
    })

    const renderSubComponent = ({ row }: { row: Row<AcceptableCastTypes> }) => {
        return (
            <div>
                {/*{tableName === "Artists" &&*/}
                {/*    <ArtistTableFooter object={(row.original as IArtist)} />*/}
                {/*}*/}
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

    function getColumnTableDropdownValues(column: MelodyTableColumn<AcceptableCastTypes>, row: Row<AcceptableCastTypes>): NavBarItemProps[] | undefined {

        return column.dropdownOptions?.map(option => {
            const functionArguments: any[] = [];
            option.dropdownParams?.forEach(param => {
                if (param.stringValue === "ALL_ROW") {
                    functionArguments.push(row.original)
                } else {
                    functionArguments.push(param.propertyValue ? (row.original as any)[param.stringValue ?? ""] : param.stringValue)
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

    function getTableDropdownValues(): NavBarItemProps[] | undefined {

        //TODO get correct params to pass in
        const newOptions = dropdown?.options?.filter(option => {
            if (option.visibleCondition) {
                switch (option.visibleCondition) {
                    case "length_check":
                        return selectedColumnIDs.length > 0
                }
            } else return true
        }).map(option => {
            const functionArguments: any[] = [];
            option.dropdownParams?.forEach(param => {
                if (param.stringValue) {
                    let paramValue;
                    if (param.stringValue === "selected_ids") {
                        paramValue = selectedColumnIDs
                    } else if (param.stringValue === "page_index") {
                        paramValue = pageIndex
                    } else if (param.stringValue === "page_size") {
                        paramValue = pageSize
                    } else {
                        paramValue = param.stringValue
                    }
                    functionArguments.push(paramValue)
                } else if (param.booleanValue) {
                    functionArguments.push(param.booleanValue)
                }
            })

            //TODO
            // const { disabledResultFound, errorMessage } = calculateDisabledAndMessageFromSettings(
            //     row,
            //     column,
            //     option.disabledSettings,
            //     option.disabled
            // )

            const disabledResultFound = false

            function getOnClickEvent() {
                if (option.dropdownFunction) {
                    return option.dropdownFunction.apply(null, functionArguments)
                } else if (option.internalDropdownFunctionCall) {
                    switch (option.internalDropdownFunctionCall) {
                        case "clear_list":
                            return setSelectedColumnIDs([])
                    }
                }
            }

            return {
                name: option.title,
                onClick: getOnClickEvent,
                disabled: disabledResultFound,
                //TODO need disabled hover message
                icon: option.icon
            }
        })

        if (!newOptions || newOptions?.length === 0) {
            return [
                { name: "No Actions Available" }
            ]
        }

        return newOptions
    }

    //TODO need type for header parameters coming from React-Table
    function getCellHeaderFormatting(headerToRender: MelodyTableHeader<AcceptableCastTypes>, header: Header<any, any>) {

        //TODO rest of implementation from interface

        let sortingComponent
        if (headerToRender.sorting && header.column.getIsSorted()) {
            const sortedVal = header.column.getIsSorted() !== false ? header.column.getIsSorted() : "asc"
            sortingComponent = <div className={"melody-px-1 melody-flex melody-items-center"}>
                {{
                    asc: <Icon icon={"caretUp"} additionalStyles={{fontSize: 16}} additionalClasses={"melody-text-white melody-cursor-pointer"} />,
                    desc: <Icon icon={"caretDown"} additionalStyles={{fontSize: 16}} additionalClasses={"melody-text-white melody-cursor-pointer"} />
                }[sortedVal as string]}
            </div>
        }

        let formatType = headerToRender.formatType
        if (!formatType) {
            formatType = "text"
        }

        let valueToDisplay;
        switch (formatType) {
            case "text":
                valueToDisplay = <Label label={headerToRender.title ?? ""}
                                        additionalStyles={{cursor: headerToRender.sorting ? "pointer" : null}}
                                        color={"white"} />
                break
            case "image":
                if (headerToRender.image) {
                    valueToDisplay = <Icon icon={headerToRender.image} />
                }
                break
            case "checkbox":
                valueToDisplay = <div className={"melody-flex melody-justify-center"}>
                    <Checkbox value={selectedColumnIDs?.length === dataQuery.data?.rows?.length}
                              onChange={(checked: boolean) => {
                                  setSelectedColumnIDs(checked ? dataQuery.data?.rows.map(row => row.id) ?? [] : [])
                              }} />
                </div>
        }

        return (
            <div onClick={headerToRender.sorting ? header.column.getToggleSortingHandler() : undefined}
                className={"melody-flex melody-justify-center"}>
                {valueToDisplay}
                {sortingComponent}
            </div>
        )
    }

    function getCellValueFormatting(column: MelodyTableColumn<AcceptableCastTypes>, row: Row<AcceptableCastTypes>, getValue: Getter<any>) {

        function getTempIconIfNotFound() {
            switch (tableName) {
                case "Artists":
                case "Supporting Artists":
                    return "melody-artist"
                case "Releases":
                    return "melody-releases"
                case "Promotion Pages":
                    return "melody-promotion-pages"
                case "Promoters":
                    return "melody-promoters"
                case "Staff Members":
                    return "melody-staff-management"
                case "Archived Tasks":
                    return "melody-kanban"
                case "Event History":
                case "Actions": //TODO more specific name for this if anything else ever uses actions?
                    return "melody-history"
                case "Storage Files":
                    return "melody-file-storage"
                case "Accounting Sources":
                    return "melody-sources"
                case "Accounting Income":
                    return "melody-income"
                case "Accounting Expenses":
                    return "melody-expenses"
                case "Apparel Items":
                    return "melody-apparel-items"
                case "Apparel Orders":
                    return "melody-apparel-order"
                case "Blog Posts":
                    return "melody-blog-post"
                default:
                    return "melody-org"
            }
        }

        let objectToUse = row.original
        if (column.innerObject) objectToUse = (objectToUse as any)[column.innerObject]

        const disabled = column.disabled ?? false
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
                case "object_text":
                    valueToDisplay = <div className={"melody-pl-1"}>
                        {objectToUse && (objectToUse as any)[column.innerObjectAccessor as any]}
                    </div>
                    break
                case "custom_text": //TODO rename to text_list
                    valueToDisplay = <div className={"melody-pl-1"}>
                        {column.customTextFields?.map(customField => `${(objectToUse as any)[customField]}`)}
                    </div>
                    break
                case "url":
                    valueToDisplay = <div className={"melody-pl-1"}>
                        {(objectToUse as any)[column.accessorKey] &&
                          <Link href={(objectToUse as any)[column.accessorKey]} rel="noopener noreferrer"
                                target="_blank">
                            <Label label={"Link"} bold={true}
                                   additionalClasses={"melody-underline melody-cursor-pointer"} />
                          </Link>
                        }
                    </div>
                    break
                case "currency":
                    valueToDisplay = <div className={"melody-pl-1"}>
                        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format((objectToUse as any)[column.accessorKey])}
                    </div>
                    break
                case "text_input":
                    valueToDisplay = <TextInput defaultValue={(objectToUse as any)[column.accessorKey]}
                                                onBlur={value => {
                                                  if (column.function?.linkedFunctions && column.function?.linkedFunctions?.length > 0) {
                                                      column.function?.linkedFunctions?.[0](value, row.original.id)
                                                  }
                                                }}
                                                size={"small"} />
                    break
                case "image":
                    const value = objectToUse && (objectToUse as any)[column.accessorKey]
                    const visible = column.visibilityFunction ? column.visibilityFunction(row.original) : true
                    console.log(value)
                    valueToDisplay = <motion.div whileHover={{scale: 0.98}} className={"melody-flex melody-justify-center"}>
                        {value && visible ?
                            <Image className={`melody-rounded ${!disabled ? "melody-cursor-pointer" : ""}`}
                                   onClick={() => !disabled ? setLargeImageModalDetails({ open: true, contentName: value }) : null}
                                   src={value}
                                   width={30}
                                   height={30}
                                   placeholder={"blur"}
                                   blurDataURL={getBlurDataURLForNextImage(30, 30)}
                                    //TODO generate alt text for image
                                   alt="" />
                            :
                            <div className={"melody-h-[30px] melody-w-[30px] melody-rounded melody-bg-gray-200 melody-flex melody-justify-center melody-items-center"}>
                                <Icon icon={getTempIconIfNotFound()} />
                            </div>
                        }
                    </motion.div>
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
                case "selection_checkbox":
                    valueToDisplay = <div className={"melody-flex melody-justify-center"}>
                        <Checkbox value={selectedColumnIDs.includes(row.original.id)}
                                  onChange={_ => {
                                      if (selectedColumnIDs.includes(row.original.id)) {
                                          setSelectedColumnIDs(selectedColumnIDs.filter(id => id !== row.original.id))
                                      } else {
                                          setSelectedColumnIDs([...selectedColumnIDs, row.original.id])
                                      }
                                  }}
                                  disabled={disabled} />
                    </div>
                    break
                case "checkbox":
                    if (row.original) {
                        valueToDisplay = <div className={"melody-flex melody-justify-center"}>
                            <Checkbox value={(objectToUse as any)[column.accessorKey]}
                                      onChange={(checked: boolean) => {
                                          if (!disabled) {
                                              if (column.function?.linkedFunctions && column.function?.linkedFunctions.length > 0) {
                                                  column.function?.linkedFunctions[0](column.function?.linkedFunctionIdParam === true ? row.original.id : row.original, checked)
                                              }
                                          }
                                      }}
                                      disabled={disabled} />
                        </div>
                    }
                    break
                case "dropdown":
                    valueToDisplay = <div className={"melody-flex melody-justify-center"}>
                        <ButtonMenu label={'Actions'}
                                    size={"small"}
                                    disabled={disabled}
                                    items={getColumnTableDropdownValues(column, row) ?? []} />
                    </div>
                    break
                case "button":
                    valueToDisplay = <div className={"melody-flex melody-justify-center"}>
                        <Button icon={{ icon: "plus", additionalClasses: "melody-text-black-0" }} //TODO currently just a plus but add an icon param later on once more uses
                                size={"small"}
                                color={"white"}
                                disabled={disabled}
                                onClick={() => {
                                    if (column.function?.linkedFunctions && column.function?.linkedFunctions.length > 0) {
                                        column.function?.linkedFunctions[0](column.function?.linkedFunctionIdParam === true ? row.original.id : row.original)
                                    }
                                }} />
                    </div>
                    break
                case "artist_list":
                    valueToDisplay = <p className={`melody-break-words ${disabled ? "melody-cursor-not-allowed" : column.linkOnClickSettings ? "melody-cursor-pointer" : "melody-cursor-auto"}`}>
                        {(objectToUse as any).artists && (objectToUse as any).artists.map((artist: LinkDto) => (artist as any)[column.accessorKey]).join(" | ")}
                    </p>
                    break
                case "badge":
                    valueToDisplay = <div className={"melody-flex melody-justify-center"}>
                        <Badge variant={(getBadgeStatusColor((objectToUse as any)[column.accessorKey]) as any)} text={(objectToUse as any)[column.accessorKey]} />
                    </div>
                    break
                case "content_id":
                    valueToDisplay = getEventHistoryContentColumn(row.original)
                    break
            }

        } else { //"Text" default
            valueToDisplay = <div className={"melody-pl-1"}>
                {getValue<string>()}
            </div>
        }

        if (column.linkOnClickSettings) {
            //TODO currently not using this anywhere after wanting to rethink artist_list functionality w/ profile
            if (column.linkOnClickSettings.onClick) {
                return <div onClick={() => {
                    if (column.linkOnClickSettings?.onClick) {
                        //TODO combine this with identical code for creating onClick function with code around line 200~ for dropdowns
                        const functionArguments: any[] = []
                        column.linkOnClickSettings.onClickParams?.forEach(param => {
                            if (param.stringValue === "ALL_ROW") {
                                functionArguments.push(row.original)
                            } else {
                                functionArguments.push(param.propertyValue ? (row.original as any)[param.stringValue ?? ""] : param.stringValue)
                            }
                        })

                        return column.linkOnClickSettings?.onClick.apply(null, functionArguments)
                    }
                }}>
                    {valueToDisplay}
                </div>
            } else { //Link

                let linkProperty = (row.original as any)[column.linkOnClickSettings.linkProperty ?? ""]
                if (column.formatType === "artist_list" && (row.original as any).artists) {
                    //TODO fix any casting bug with artist (NOTE leftover comment from Cadenza v1, still valid?)
                    linkProperty = (row.original as any).artists.map((artist: LinkDto) => (artist as any)[column.linkOnClickSettings?.linkProperty ?? ""])
                }

                return <Link href={(column.linkOnClickSettings.linkProperty ? column.linkOnClickSettings.linkURL?.replace("LINK_PROPERTY", linkProperty) : column.linkOnClickSettings?.linkURL) ?? ""}
                             className={"melody-font-bold melody-underline"}>
                    {valueToDisplay}
                </Link>
            }
        } else {
            return valueToDisplay
        }
    }

    function getEventHistoryContentColumn(contentRow: AcceptableCastTypes): ReactNode {
        let objectToDisplay = "";
        let label = "";
        //TODO reintroduce logic from getContentIdDetailsByType in old UI to be able to click individual content ids and go to correct page
        const eventHistoryRow = contentRow as IEventHistory

        if (eventHistoryRow.release) {
            label = "Music Release:"
            objectToDisplay = eventHistoryRow.release.name
        }

        if (eventHistoryRow.artist) {
            label = "Artist:"
            objectToDisplay = eventHistoryRow.artist.name
        }

        if (eventHistoryRow.apparel) {
            label = "Apparel Item:"
            objectToDisplay = eventHistoryRow.apparel.name
        }

        if (eventHistoryRow.apparelOrder) {
            label = "Apparel Order:"
            objectToDisplay = eventHistoryRow.apparelOrder.name
        }

        if (eventHistoryRow.blogPost) {
            label = "Blog Post:"
            objectToDisplay = eventHistoryRow.blogPost.name
        }

        if (eventHistoryRow.calendarEvent) {
            label = "Calendar Event:"
            objectToDisplay = eventHistoryRow.calendarEvent.name
        }

        if (eventHistoryRow.task) {
            label = "Planning Board Task:"
            objectToDisplay = eventHistoryRow.task.name
        }

        if (eventHistoryRow.promotion) {
            label = "Promotion:"
            objectToDisplay = eventHistoryRow.promotion.name
        }

        if (eventHistoryRow.promoter) {
            label = "Promoter:"
            objectToDisplay = eventHistoryRow.promoter.name
        }

        if (eventHistoryRow.promotionPage) {
            label = "Promotion Page:"
            objectToDisplay = eventHistoryRow.promotionPage.name
        }

        if (eventHistoryRow.file) {
            label = "Storage File:"
            objectToDisplay = eventHistoryRow.file.name
        }

        if (eventHistoryRow.staff) {
            label = "Staff Member:"
            objectToDisplay = eventHistoryRow.staff.name
        }

        if (eventHistoryRow.income) {
            label = "Accounting Income:"
            objectToDisplay = eventHistoryRow.income.name
        }

        if (eventHistoryRow.expense) {
            label = "Accounting Expense:"
            objectToDisplay = eventHistoryRow.expense.name
        }

        if (eventHistoryRow.source) {
            label = "Accounting Source:"
            objectToDisplay = eventHistoryRow.source.name
        }

        return <div className={"melody-pl-1"}>
            <Label label={label} bold={true} size={'small'} />
            <Label label={objectToDisplay} size={'small'} />
        </div>
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

        //TODO need to import getContentIdDetailsByType from usePageableTable on old Cadenza to get correct functionality here to replace column values below

        columns.push.apply(columns, columnsToDisplay.map(column => ({
            accessorKey: column.accessorKey ?? "",
            header: ({ header }) => getCellHeaderFormatting(column.header, header),
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

                {showPaginationDropdown &&
                  <div className={"melody-max-w-[150px]"}>
                    <Dropdown onChange={(selection) => table.setPageSize(Number((selection as DropdownOption).value))}
                              size={"small"}
                              defaultValue={{ label: `Show ${pageSize}`, value: pageSize }}
                              options={[10, 20, 30, 40, 50].map(pageSizeListVal => ({
                                  label: `Show ${pageSizeListVal}`,
                                  value: pageSizeListVal
                              }))} />
                  </div>
                }

                <Button icon={{ icon: "paginationLeft" }}
                        color={'white'}
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.setPageIndex(0)} />

                <Button icon={{ icon: "caretLeft" }}
                        color={'white'}
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.previousPage()} />

                <Button icon={{ icon: "caretRight" }}
                        color={'white'}
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.nextPage()} />

                <Button icon={{ icon: "paginationRight" }}
                        color={'white'}
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)} />
            </div>
        )
    }

    function getDropdown() {

        if (!dropdown) return;

        return <div className={"melody-flex melody-justify-center"}>
            <ButtonMenu label={dropdown.title}
                        menuDirection={"left"}
                        size={"small"}
                        items={getTableDropdownValues() ?? []} />
        </div>
    }

    //TODO maybe boolean to check if pageSize and pageIndex changed only if there is a dropdown and it requires listening to these page changes
    const generatedDropdown = useMemo(() => {
        return getDropdown()
    }, [selectedColumnIDs, pageSize, pageIndex])

    return (
        <div className={`melody-p-1 melody-w-full ${dataQuery.data && dataQuery.data?.rows.length > 0 ? "" : "melody-flex melody-flex-col melody-justify-center"}`}>

            {searchUI}

            {dataQuery.data && dataQuery.data?.rows.length > 0 &&
              <table className={"melody-rounded-lg melody-border-separate melody-border-spacing-0 melody-w-full melody-shadow-main"}>
                <thead>
                {table.getHeaderGroups().slice(0,1).map((headerGroup, index) => (
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
                <Label label={`No ${tableName} Found`} bold={true} />
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

                  <div className={"melody-flex melody-items-center"}>
                      {generatedDropdown}

                      {showRowCount &&
                        <p className={"melody-text-left melody-font-bold melody-text-sm melody-pl-2"}>
                            {table.getRowModel().rows.length} Rows
                        </p>
                      }
                  </div>

                  {showPagination && getPaginationComponentSection()}
              </div>
            }
        </div>
    )
}