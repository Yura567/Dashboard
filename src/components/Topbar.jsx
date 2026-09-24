import { IconButton, Button } from '@mui/material'
import { Eyebrow, PageTitle, TopActions, Topbar as TopbarRoot } from '../styled/Topbar.styles.js'

export default function Topbar({ title, onNewReport, isActive }) {
  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'short' }).format(new Date())

  return (
    <TopbarRoot component="header">
      <div><Eyebrow>{today}</Eyebrow><PageTitle>{title}</PageTitle></div>
      <TopActions>
        <IconButton aria-label="Search">⌕</IconButton>
        <IconButton aria-label="Notifications">🔔</IconButton>
        <Button variant="contained" onClick={onNewReport} color={isActive ? 'primary' : 'inherit'}>+ New report</Button>
      </TopActions>
    </TopbarRoot>
  )
}
