import { Grid } from '@mui/material'
import StatCards from './StatCards.jsx'
import RevenuePanel from './RevenuePanel.jsx'
import TasksPanel from './TasksPanel.jsx'
import TransactionsTable from './TransactionsTable.jsx'
import ActivityPanel from './ActivityPanel.jsx'
import { DataStatus, OverviewGrid } from '../styled/OverviewPage.styles.js'

export default function OverviewPage({ stats, tasks, showAll, onToggleTasks, rows, activity, loading, error }) {
  return <>
    {(loading || error) && <DataStatus error={Boolean(error)}>{error ? `Could not load dashboard data: ${error}` : 'Loading dashboard data...'}</DataStatus>}
    <StatCards stats={stats} />
    <OverviewGrid container spacing={2}><Grid size={{ xs: 12, md: 8 }}><RevenuePanel /></Grid><Grid size={{ xs: 12, md: 4 }}><TasksPanel tasks={tasks} showAll={showAll} onToggle={onToggleTasks} /></Grid></OverviewGrid>
    <Grid container spacing={2}><Grid size={{ xs: 12, md: 8 }}><TransactionsTable rows={rows} /></Grid><Grid size={{ xs: 12, md: 4 }}><ActivityPanel activity={activity} /></Grid></Grid>
  </>
}
