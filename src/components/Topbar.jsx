import { useState } from 'react'
import { ErrorMessage, Field, Form as FormikForm, Formik } from 'formik'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import { Actions, DialogHeading, FormError, Header, HeaderDate, HeaderIconButton, NewReportButton, PageTitle, SearchActions, SearchForm } from '../styled/Topbar.js'

export default function Topbar({ title, onNewReport, isActive }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [notificationAnchor, setNotificationAnchor] = useState(null)
  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'short' }).format(new Date())
  const notifications = ['New payment received', 'Campaign report is ready', 'Workspace backup completed']
  const closeSearch = () => setIsSearchOpen(false)

  return (
    <>
      <Header component="header">
        <div>
          <HeaderDate>{today}</HeaderDate>
          <PageTitle>{title}</PageTitle>
        </div>
        <Actions direction="row">
          <HeaderIconButton aria-label="Search" onClick={() => setIsSearchOpen(true)}><SearchIcon /></HeaderIconButton>
          <HeaderIconButton aria-label="Notifications" aria-haspopup="menu" onClick={(event) => setNotificationAnchor(event.currentTarget)}>
            <NotificationsNoneIcon />
          </HeaderIconButton>
          <Menu anchorEl={notificationAnchor} open={Boolean(notificationAnchor)} onClose={() => setNotificationAnchor(null)}>
            {notifications.map((notification) => (
              <MenuItem key={notification} onClick={() => setNotificationAnchor(null)}>{notification}</MenuItem>
            ))}
          </Menu>
          <NewReportButton variant="contained" startIcon={<AddIcon />} onClick={onNewReport} data-active={isActive}>
            New report
          </NewReportButton>
        </Actions>
      </Header>

      <Dialog open={isSearchOpen} onClose={closeSearch} fullWidth maxWidth="xs">
        <Formik
          initialValues={{ searchTerm: '' }}
          validate={({ searchTerm }) => searchTerm.trim() ? {} : { searchTerm: 'Enter a search term.' }}
          onSubmit={closeSearch}
        >
          {({ dirty, errors, isSubmitting, isValid, touched }) => (
            <FormikForm as={SearchForm} noValidate>
              <DialogHeading id="search-title">Search workspace</DialogHeading>
              <Field name="searchTerm">
                {({ field }) => (
                  <TextField
                    {...field}
                    id="workspace-search"
                    autoFocus
                    fullWidth
                    size="small"
                    label="Search"
                    error={Boolean(errors.searchTerm && touched.searchTerm)}
                    aria-describedby="workspace-search-error"
                  />
                )}
              </Field>
              <ErrorMessage id="workspace-search-error" name="searchTerm" component={FormError} />
              <SearchActions direction="row">
                <Button type="button" startIcon={<CloseIcon />} onClick={closeSearch}>Close</Button>
                <Button type="submit" variant="contained" disabled={!dirty || !isValid || isSubmitting}>Search</Button>
              </SearchActions>
            </FormikForm>
          )}
        </Formik>
      </Dialog>
    </>
  )
}
