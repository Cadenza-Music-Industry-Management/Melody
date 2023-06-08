import { TableProps } from "@/components/Melody/src/components/types";
import { ColumnDef, flexRender, getCoreRowModel, getExpandedRowModel, Row, useReactTable } from "@tanstack/react-table";
import { IEventHistory, IRelease } from "@/constants/types";
import { Fragment } from "react";

export function MelodyTable(
    {
        tableName,
        data,
        rowsCanExpand = false,
        columnsToDisplay,

    }: TableProps<IEventHistory | IRelease>) {

    const table = useReactTable<IEventHistory | IRelease>({
        data: data ?? [],
        columns: getColumnsToDisplay(),
        getRowCanExpand: () => rowsCanExpand,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
    })

    const renderSubComponent = ({ row }: { row: Row<IEventHistory | IRelease> }) => {
        return (
            <pre style={{ fontSize: 10 }}>
                <code>{JSON.stringify(row.original, null, 2)}</code>
            </pre>
        )
    }

    function getColumnsToDisplay(): ColumnDef<IEventHistory | IRelease>[] {

        let columns: ColumnDef<IEventHistory | IRelease>[] = []

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
                            }}
                        >
                            {row.getIsExpanded() ? '👇' : '👉'}
                        </button>
                    ) : null
                }
            })
        }

        columns.push.apply(columns, columnsToDisplay.map(column => ({
            accessorKey: column.accessorKey,
            header: () => <span>{column.header.title}</span>,
            cell: ({ row, getValue }) => (
                <div style={{

                }}>
                    {getValue<string>()}
                </div>
            ),
        })))

        return columns
    }

    return (
        <div className="melody-p-1 melody-w-full melody-block melody-overflow-x-auto">
            <div className="melody-h-2" />
            <table className={"melody-rounded-lg melody-border-separate melody-border-spacing-0 melody-w-full"}>
                <thead>
                {table.getHeaderGroups().map((headerGroup, index) => (
                    <tr key={headerGroup.id}
                        className={`melody-bg-gray-200 melody-border melody-border-gray-300 ${index === 0 ? 'melody-rounded-t-lg' : ''}`}>

                        {headerGroup.headers.map((header, columnIndex) => {
                            return (
                                <th key={header.id}
                                    colSpan={header.colSpan}
                                    className={`melody-p-1 melody-font-bold melody-text-gray-700 
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
                                    {/* first row is a normal row */}
                                    {row.getVisibleCells().map((cell, cellIndex) => {
                                        return (
                                            <td key={cell.id}
                                                className={`melody-p-1 melody-border melody-border-gray-300 
                                                ${(cellIndex === 0 && rowIndex === table.getRowModel().rows.length - 1)  ? 'melody-rounded-bl-lg' : ''} ${(cellIndex === row.getVisibleCells().length - 1 && rowIndex === table.getRowModel().rows.length - 1) ? 'melody-rounded-br-lg' : ''}`}>
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

            <div className="melody-h-2" />
            <div>{table.getRowModel().rows.length} Rows</div>
        </div>
    )
}