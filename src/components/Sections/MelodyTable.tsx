import { MelodyTableColumn, MelodyTableHeader, TableProps } from "@/components/Melody/src/components/types";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    Getter, Header,
    Row, RowData,
    useReactTable
} from "@tanstack/react-table";
import { IEventHistory, IRelease } from "@/constants/types";
import React, { Fragment } from "react";
import { convertUTCDateToLocalDate } from "@/utils/functions";
import { Label } from "../Layouts/Label";
import { Spinner } from "@/components/Melody/src/components/Layouts/Spinner";

type AcceptableCastTypes = IEventHistory | IRelease

export function MelodyTable(
    {
        tableName,
        data,
        rowsCanExpand = false,
        columnsToDisplay,
        showRowCount = true,
        showPagination = true

    }: TableProps<AcceptableCastTypes>) {

    const table = useReactTable<AcceptableCastTypes>({
        data: data ?? [],
        columns: getColumnsToDisplay(),
        getRowCanExpand: () => rowsCanExpand,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
    })

    const renderSubComponent = ({ row }: { row: Row<AcceptableCastTypes> }) => {
        return (
            <pre style={{ fontSize: 10 }}>
                <code>{JSON.stringify(row.original, null, 2)}</code>
            </pre>
        )
    }

    function getCellHeaderFormatting(header: MelodyTableHeader<AcceptableCastTypes>) {

        //TODO rest of implementation from interface

        return (
            <div style={{

            }}>
                {header.title}
            </div>
        )
    }

    function getCellValueFormatting(column: MelodyTableColumn<AcceptableCastTypes>, row: Row<AcceptableCastTypes>, getValue: Getter<any>) {

        let valueToDisplay;

        if (column.formatType) {

            switch (column.formatType) {
                case "date":
                    valueToDisplay = convertUTCDateToLocalDate(new Date(getValue<string>())).toDateString()
                    break
                case "datetime":
                    valueToDisplay = convertUTCDateToLocalDate(new Date(getValue<string>())).toLocaleString()
                    break
                case "text":
                    valueToDisplay = getValue<string>()
                    break
            }

        } else { //"Text" default
            valueToDisplay = getValue<string>()
        }


        return <div style={{

        }}>
            {valueToDisplay}
        </div>
    }

    function getColumnsToDisplay(): ColumnDef<AcceptableCastTypes>[] {

        let columns: ColumnDef<AcceptableCastTypes>[] = []

        if (rowsCanExpand) {
            columns.push({
                id: 'expander',
                header: () => null,
                cell: ({ row }: any) => {
                    return row.getCanExpand() ? (
                        <button
                            {...{
                                onClick: row.getToggleExpandedHandler(),
                                style: { cursor: 'pointer' },
                            }}>
                            {row.getIsExpanded() ? '👇' : '👉'}
                        </button>
                    ) : null
                }
            })
        }

        columns.push.apply(columns, columnsToDisplay.map(column => ({
            accessorKey: column.accessorKey,
            header: () => getCellHeaderFormatting(column.header),
            cell: ({ row, getValue }) => getCellValueFormatting(column, row, getValue)
        })))

        return columns
    }

    return (
        <div className="melody-p-1 melody-w-full melody-block">
            {data && data.length > 0 &&
              <table className={"melody-rounded-lg melody-border-separate melody-border-spacing-0 melody-w-full"}>
                <thead>
                {table.getHeaderGroups().map((headerGroup, index) => (
                    <tr key={headerGroup.id}
                        className={`melody-bg-primary-100 melody-border melody-border-gray-300 ${index === 0 ? 'melody-rounded-t-lg' : ''}`}>

                        {headerGroup.headers.map((header, columnIndex) => {

                            const melodyColumnHeader = columnsToDisplay[columnIndex].header

                            return (
                                <th key={header.id}
                                    colSpan={header.colSpan}
                                    style={{
                                        width: melodyColumnHeader.width,
                                    }}
                                    className={`melody-p-0.5 melody-font-bold melody-text-white 
                                        ${columnIndex === 0 ? 'melody-rounded-tl-lg' : ''} ${columnIndex === headerGroup.headers.length - 1 ? 'melody-rounded-tr-lg' : ''}`}>
                                    {header.isPlaceholder ? null : (
                                        <div>
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        </div>
                                    )}
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
                            <tr className={`${rowIndex === table.getRowModel().rows.length - 1 ? 'melody-rounded-b-lg' : ''}`}>
                                {row.getVisibleCells().map((cell, cellIndex) => {
                                    return (
                                        <td key={cell.id}
                                            className={`melody-p-1 melody-border-b melody-border-gray-300 ${cellIndex === 0 ? 'melody-border-l' : ''}  ${cellIndex === row.getVisibleCells().length - 1 ? 'melody-border-r' : ''}
                                                ${(cellIndex === 0 && rowIndex === table.getRowModel().rows.length - 1) ? 'melody-rounded-bl-lg' : ''} ${(cellIndex === row.getVisibleCells().length - 1 && rowIndex === table.getRowModel().rows.length - 1) ? 'melody-rounded-br-lg' : ''}`}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>

                            {row.getIsExpanded() && (
                                <tr>
                                    {/* 2nd row is a custom 1 cell row */}
                                    <td colSpan={row.getVisibleCells().length}>
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

            {data && data.length == 0 &&
              <Label label={'No Actions Found'} bold={true} size={'medium'} />
            }

            {!data &&
              <div className={"melody-text-center"}>
                <h4>{tableName} Loading...</h4>
                <Spinner />
              </div>
            }

            {showRowCount &&
              <div className={"melody-py-1"}>{table.getRowModel().rows.length} Rows</div>
            }
        </div>
    )
}