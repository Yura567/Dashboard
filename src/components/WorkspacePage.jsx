import { Button, CardContent } from '@mui/material'
import { Intro, PageLink, PageLinkArrow, PageLinkNumber, WorkspaceCard, WorkspaceRoot } from '../styled/WorkspacePage.styles.js'
import { PanelHeader, SectionLabel, SectionTitle } from '../styled/OverviewPage.styles.js'

const pageContent = {
  analytics: ['Insights', 'Analytics workspace', 'Track audience behavior and conversion performance across your workspace.', ['Sessions', 'Bounce rate', 'Avg. session']],
  revenue: ['Finance', 'Revenue center', 'Review recurring revenue, invoices, and the latest payment performance.', ['Monthly recurring revenue', 'Invoices', 'Payout schedule']],
  orders: ['Commerce', 'Orders workspace', 'Manage recent orders and keep fulfilment moving across every channel.', ['Order queue', 'Fulfilment status', 'Returns and exchanges']],
  messages: ['Communication', 'Messages inbox', 'Keep customer conversations, team updates, and follow-ups in one place.', ['Customer conversations', 'Team mentions', 'Saved replies']],
  settings: ['Workspace', 'Settings', 'Configure your workspace preferences, team access, and notification rules.', ['Workspace profile', 'Team permissions', 'Notifications']],
}

export default function WorkspacePage({ pageKey }) {
  const [eyebrow, title, description, items] = pageContent[pageKey]
  return <WorkspaceRoot>
    <Intro><SectionLabel>{eyebrow}</SectionLabel><h3>{title}</h3><p>{description}</p></Intro>
    <WorkspaceCard><CardContent><PanelHeader><div><SectionLabel>Workspace tools</SectionLabel><SectionTitle>Manage {eyebrow.toLowerCase()}</SectionTitle></div><Button variant="contained">Create new</Button></PanelHeader>{items.map((item, index) => <PageLink type="button" key={item}><PageLinkNumber>0{index + 1}</PageLinkNumber><span>{item}</span><PageLinkArrow>→</PageLinkArrow></PageLink>)}</CardContent></WorkspaceCard>
  </WorkspaceRoot>
}
