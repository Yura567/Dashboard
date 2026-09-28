import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { ItemArrow, ItemCopy, ItemNumber, WorkspaceCard, WorkspaceCardContent, WorkspaceDescription, WorkspaceEyebrow, WorkspaceHeader, WorkspaceIntro, WorkspaceItem, WorkspaceItems, WorkspaceRoot, WorkspaceTitle, CreateButton } from '../styled/WorkspacePage'

export type WorkspacePageKey = 'analytics' | 'revenue' | 'orders' | 'messages' | 'settings'

const pageContent: Record<WorkspacePageKey, [eyebrow: string, title: string, description: string, items: string[]]> = {
  analytics: ['Insights', 'Analytics workspace', 'Track audience behavior and conversion performance across your workspace.', ['Sessions', 'Bounce rate', 'Avg. session']],
  revenue: ['Finance', 'Revenue center', 'Review recurring revenue, invoices, and the latest payment performance.', ['Monthly recurring revenue', 'Invoices', 'Payout schedule']],
  orders: ['Commerce', 'Orders workspace', 'Manage recent orders and keep fulfilment moving across every channel.', ['Order queue', 'Fulfilment status', 'Returns and exchanges']],
  messages: ['Communication', 'Messages inbox', 'Keep customer conversations, team updates, and follow-ups in one place.', ['Customer conversations', 'Team mentions', 'Saved replies']],
  settings: ['Workspace', 'Settings', 'Configure your workspace preferences, team access, and notification rules.', ['Workspace profile', 'Team permissions', 'Notifications']],
}

export default function WorkspacePage({ pageKey }: { pageKey: WorkspacePageKey }) {
  const [eyebrow, title, description, initialItems] = pageContent[pageKey] ?? pageContent.analytics
  const [items, setItems] = useState(initialItems)
  const [selectedItem, setSelectedItem] = useState('')
  const createItem = () => setItems((currentItems) => [...currentItems, `New ${eyebrow.toLowerCase()} item`])

  return (
    <WorkspaceRoot>
      <WorkspaceIntro>
        <WorkspaceEyebrow>{eyebrow}</WorkspaceEyebrow>
        <WorkspaceTitle>{title}</WorkspaceTitle>
        <WorkspaceDescription>{description}</WorkspaceDescription>
      </WorkspaceIntro>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 9 }}>
          <WorkspaceCard>
            <WorkspaceCardContent>
              <WorkspaceHeader>
                <div>
                  <WorkspaceEyebrow>Workspace tools</WorkspaceEyebrow>
                  <Typography variant="h6">Manage {eyebrow.toLowerCase()}</Typography>
                </div>
                <CreateButton variant="contained" startIcon={<AddIcon />} onClick={createItem}>Create new</CreateButton>
              </WorkspaceHeader>
              <WorkspaceItems>
                {items.map((item, index) => (
                  <WorkspaceItem type="button" key={`${item}-${index}`} onClick={() => setSelectedItem(item)}>
                    <ItemNumber>{String(index + 1).padStart(2, '0')}</ItemNumber>
                    <ItemCopy>{item}{selectedItem === item && <small>Opened</small>}</ItemCopy>
                    <ItemArrow><ArrowForwardIcon fontSize="small" /></ItemArrow>
                  </WorkspaceItem>
                ))}
              </WorkspaceItems>
            </WorkspaceCardContent>
          </WorkspaceCard>
        </Grid>
      </Grid>
    </WorkspaceRoot>
  )
}
