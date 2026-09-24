import { Button, CardContent } from '@mui/material'
import { Panel, PanelHeader, SectionLabel, SectionTitle } from '../styled/OverviewPage.styles.js'
import { TaskItem, TaskList, Dot } from '../styled/TasksPanel.styles.js'

export default function TasksPanel({ tasks, showAll, onToggle }) {
  return (
    <Panel>
      <CardContent>
        <PanelHeader><div><SectionLabel>Today</SectionLabel><SectionTitle>Tasks</SectionTitle></div><Button size="small" onClick={onToggle}>{showAll ? 'Collapse' : 'View all'}</Button></PanelHeader>
        <TaskList>{tasks.map((task, index) => <TaskItem key={`${task.title}-${index}`}><Dot /><div><strong>{task.title}</strong><br /><small>{task.time}</small></div></TaskItem>)}</TaskList>
      </CardContent>
    </Panel>
  )
}
