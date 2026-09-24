import { CardContent } from '@mui/material'
import { Panel, PanelHeader, SectionLabel, SectionTitle } from '../styled/OverviewPage.styles.js'
import { ActivityItem, ActivityList, Dot } from '../styled/ActivityPanel.styles.js'

export default function ActivityPanel({ activity }) {
  return <Panel><CardContent><PanelHeader><div><SectionLabel>Summary</SectionLabel><SectionTitle>Activity</SectionTitle></div></PanelHeader><ActivityList>{activity.map((item, index) => <ActivityItem key={item}><Dot /><div><strong>{item}</strong><br /><small>{['12 minutes ago', '1 hour ago', 'Yesterday'][index]}</small></div></ActivityItem>)}</ActivityList></CardContent></Panel>
}
