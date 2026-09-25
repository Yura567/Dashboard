import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Menu, MenuItem, TextField } from '@mui/material'
import { Eyebrow, PageTitle, TopActions, Topbar as TopbarRoot } from '../styled/Topbar.styles.js'

export default function Topbar({ title, onNewReport, isActive }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [notificationAnchor, setNotificationAnchor] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'short' }).format(new Date())
  const notifications = ['New payment received', 'Campaign report is ready', 'Workspace backup completed']
  const closeSearch = () => { setIsSearchOpen(false); setSearchTerm('') }

  return (
    <TopbarRoot component="header">
      <div><Eyebrow>{today}</Eyebrow><PageTitle>{title}</PageTitle></div>
      <TopActions>
        <IconButton aria-label="Search" onClick={() => setIsSearchOpen(true)}>⌕</IconButton>
        <IconButton aria-label="Notifications" onClick={(event) => setNotificationAnchor(event.currentTarget)}>🔔</IconButton>
        <Menu anchorEl={notificationAnchor} open={Boolean(notificationAnchor)} onClose={() => setNotificationAnchor(null)}>
          {notifications.map((notification) => <MenuItem key={notification} onClick={() => setNotificationAnchor(null)}>{notification}</MenuItem>)}
        </Menu>
        <Button variant="contained" onClick={onNewReport} color={isActive ? 'primary' : 'inherit'}>+ New report</Button>
      </TopActions>
      <Dialog open={isSearchOpen} onClose={closeSearch} fullWidth maxWidth="xs">
        <DialogTitle>Search workspace</DialogTitle>
        <DialogContent><TextField autoFocus fullWidth label="Search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} /></DialogContent>
        <DialogActions><Button onClick={closeSearch}>Close</Button><Button variant="contained" onClick={closeSearch} disabled={!searchTerm.trim()}>Search</Button></DialogActions>
      </Dialog>
    </TopbarRoot>
  )
}
