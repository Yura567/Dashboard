import { Button, CardContent } from '@mui/material'
import { ChartArea, ChartFooter, Bars, GridLines } from '../styled/RevenuePanel.styles.js'
import { Panel, PanelHeader, SectionLabel, SectionTitle } from '../styled/OverviewPage.styles.js'

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const bars = [28, 42, 35, 56, 65, 52, 76, 68, 88, 74, 92, 82]

export default function RevenuePanel() {
  return (
    <Panel>
      <CardContent>
        <PanelHeader><div><SectionLabel>Performance</SectionLabel><SectionTitle>Revenue overview</SectionTitle></div><Button size="small">Month</Button></PanelHeader>
        <ChartArea><GridLines /><Bars>{bars.map((height, index) => <span key={months[index]} style={{ '--h': `${height}%` }} />)}</Bars></ChartArea>
        <ChartFooter>{months.map((month) => <span key={month}>{month}</span>)}</ChartFooter>
      </CardContent>
    </Panel>
  )
}
