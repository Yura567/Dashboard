import { CardContent } from '@mui/material'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { Panel, PanelHeader, SectionLabel, SectionTitle } from '../styled/OverviewPage.styles.js'
import { Avatar, Status, Table, TableWrap, UserCell } from '../styled/TransactionsTable.styles.js'

const columns = [
  { accessorKey: 'customer', header: 'Customer', cell: ({ getValue }) => <UserCell><Avatar>{getValue()[0]}</Avatar><span>{getValue()}</span></UserCell> },
  { accessorKey: 'plan', header: 'Plan' },
  { accessorKey: 'amount', header: 'Amount' },
  { accessorKey: 'status', header: 'Status', cell: ({ getValue }) => <Status pending={getValue() !== 'Paid'}>{getValue()}</Status> },
]

export default function TransactionsTable({ rows }) {
  const table = useReactTable({ data: rows, columns, getCoreRowModel: getCoreRowModel() })

  return (
    <Panel>
      <CardContent><PanelHeader><div><SectionLabel>Leads</SectionLabel><SectionTitle>Recent transactions</SectionTitle></div></PanelHeader>
        <TableWrap><Table><thead>{table.getHeaderGroups().map((group) => <tr key={group.id}>{group.headers.map((header) => <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>)}</tr>)}</thead>
          <tbody>{table.getRowModel().rows.map((row) => <tr key={row.id}>{row.getVisibleCells().map((cell) => <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>)}</tr>)}</tbody>
        </Table></TableWrap>
      </CardContent>
    </Panel>
  )
}
