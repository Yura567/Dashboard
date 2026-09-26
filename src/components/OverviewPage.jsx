import { useState } from 'react'
import { flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import Grid from '@mui/material/Grid'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import StatCards from './StatCards.jsx'
import RevenuePanel from './RevenuePanel.jsx'
import { ActivityCopy, ActivityDot, ActivityItem, ActivityList, ActivityTime, CustomerAvatar, CustomerCell, OverviewGrid, PanelCard, PanelContent, PanelEyebrow, PanelHeader, PanelTitle, PaymentStatus, SortButton, SortIndicator, TaskCopy, TaskList, TaskMarker, TaskRow, TaskTime, TaskTitle, TransactionCell, TransactionHeaderCell, TransactionTable, TransactionTableContainer, ViewAllButton } from '../styled/OverviewPage.js'

const initialTasks = [
  { title: 'Design review', time: '09:30 AM', color: 'primary' },
  { title: 'Marketing sync', time: '11:00 AM', color: 'secondary' },
  { title: 'Campaign launch', time: '02:00 PM', color: 'success' },
]
const allTasks = [
  ...initialTasks,
  { title: 'Quarterly overview', time: 'Today', color: 'secondary' },
  { title: 'Customer retention', time: 'Yesterday', color: 'success' },
  { title: 'Regional sales', time: '2 days ago', color: 'primary' },
  { title: 'Campaign analytics', time: '3 days ago', color: 'secondary' },
]
const transactions = [
  { customer: 'Mark Johnson', plan: 'Pro', amount: 1240, status: 'Paid', avatarTone: 'amber' },
  { customer: 'Alicia Smith', plan: 'Basic', amount: 480, status: 'Pending', avatarTone: 'blue' },
  { customer: 'David Lee', plan: 'Enterprise', amount: 3980, status: 'Paid', avatarTone: 'pink' },
]
const transactionColumns = [
  {
    accessorKey: 'customer',
    header: 'Customer',
    cell: ({ row }) => (
      <CustomerCell>
        <CustomerAvatar $tone={row.original.avatarTone}>{row.original.customer[0]}</CustomerAvatar>
        {row.original.customer}
      </CustomerCell>
    ),
  },
  { accessorKey: 'plan', header: 'Plan' },
  { accessorKey: 'amount', header: 'Amount', cell: ({ getValue }) => `$${getValue().toLocaleString('en-US')}` },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ getValue }) => <PaymentStatus label={getValue()} $paid={getValue() === 'Paid'} size="small" />,
  },
]
const activity = [
  { title: 'New signup', time: '12 minutes ago', color: 'primary' },
  { title: 'Payment received', time: '1 hour ago', color: 'secondary' },
  { title: 'Campaign report', time: 'Yesterday', color: 'success' },
]

export default function OverviewPage() {
  const [showAllTasks, setShowAllTasks] = useState(false)
  const [sorting, setSorting] = useState([])
  const table = useReactTable({
    data: transactions,
    columns: transactionColumns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })
  const tasks = showAllTasks ? allTasks : initialTasks

  return (
    <OverviewGrid container spacing={2}>
      <Grid size={12}><StatCards /></Grid>
      <Grid size={{ xs: 12, lg: 8 }}><RevenuePanel /></Grid>
      <Grid size={{ xs: 12, lg: 4 }}>
        <PanelCard>
          <PanelContent>
            <PanelHeader>
              <div><PanelEyebrow>Today</PanelEyebrow><PanelTitle>Tasks</PanelTitle></div>
              <ViewAllButton onClick={() => setShowAllTasks((visible) => !visible)}>{showAllTasks ? 'Collapse' : 'View all'}</ViewAllButton>
            </PanelHeader>
            <TaskList disablePadding>
              {tasks.map((task) => (
                <TaskRow key={task.title} disableGutters>
                  <TaskMarker $tone={task.color} />
                  <TaskCopy><TaskTitle>{task.title}</TaskTitle><TaskTime>{task.time}</TaskTime></TaskCopy>
                </TaskRow>
              ))}
            </TaskList>
          </PanelContent>
        </PanelCard>
      </Grid>
      <Grid size={{ xs: 12, lg: 7 }}>
        <PanelCard>
          <PanelContent>
            <PanelHeader><div><PanelEyebrow>Leads</PanelEyebrow><PanelTitle>Recent transactions</PanelTitle></div></PanelHeader>
            <TransactionTableContainer>
              <TransactionTable size="small" aria-label="Recent transactions">
                <TableHead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header) => {
                        const sortState = header.column.getIsSorted()
                        return (
                          <TransactionHeaderCell
                            key={header.id}
                            aria-sort={sortState === 'asc' ? 'ascending' : sortState === 'desc' ? 'descending' : undefined}
                          >
                            <SortButton onClick={header.column.getToggleSortingHandler()}>
                              {flexRender(header.column.columnDef.header, header.getContext())}
                              <SortIndicator aria-hidden="true">{sortState === 'asc' ? '↑' : sortState === 'desc' ? '↓' : '↕'}</SortIndicator>
                            </SortButton>
                          </TransactionHeaderCell>
                        )
                      })}
                    </TableRow>
                  ))}
                </TableHead>
                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TransactionCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TransactionCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </TransactionTable>
            </TransactionTableContainer>
          </PanelContent>
        </PanelCard>
      </Grid>
      <Grid size={{ xs: 12, lg: 5 }}>
        <PanelCard>
          <PanelContent>
            <PanelHeader><div><PanelEyebrow>Summary</PanelEyebrow><PanelTitle>Activity</PanelTitle></div></PanelHeader>
            <ActivityList>
              {activity.map((item) => (
                <ActivityItem key={item.title}>
                  <ActivityDot $tone={item.color} />
                  <ActivityCopy>{item.title}<ActivityTime>{item.time}</ActivityTime></ActivityCopy>
                </ActivityItem>
              ))}
            </ActivityList>
          </PanelContent>
        </PanelCard>
      </Grid>
    </OverviewGrid>
  )
}