import { useState } from 'react'

export default function Topbar({ title, onNewReport, isActive }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [areNotificationsOpen, setAreNotificationsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long', day: 'numeric', month: 'short' }).format(new Date())
  const notifications = ['New payment received', 'Campaign report is ready', 'Workspace backup completed']
  const closeSearch = () => { setIsSearchOpen(false); setSearchTerm('') }

  return (
    <>
      <header className="topbar">
        <div>
          <p className="eyebrow muted">{today}</p>
          <h2>{title}</h2>
        </div>
        <div className="top-actions">
          <button type="button" className="icon-button" aria-label="Search" onClick={() => setIsSearchOpen(true)}>⌕</button>
          <div className="notification-wrap">
            <button
              type="button"
              className="icon-button"
              aria-label="Notifications"
              aria-expanded={areNotificationsOpen}
              onClick={() => setAreNotificationsOpen((open) => !open)}
            >
              🔔
            </button>
            {areNotificationsOpen && (
              <div className="notifications-menu" role="menu" aria-label="Notifications">
                {notifications.map((notification) => (
                  <button type="button" role="menuitem" key={notification} onClick={() => setAreNotificationsOpen(false)}>
                    {notification}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            type="button"
            className={`primary-btn ${isActive ? 'is-active' : ''}`}
            onClick={onNewReport}
          >
            + New report
          </button>
        </div>
      </header>
      {isSearchOpen && (
        <div className="dialog-backdrop" onMouseDown={(event) => event.target === event.currentTarget && closeSearch()}>
          <section className="search-dialog" role="dialog" aria-modal="true" aria-labelledby="search-title">
            <form onSubmit={(event) => { event.preventDefault(); if (searchTerm.trim()) closeSearch() }}>
              <h3 id="search-title">Search workspace</h3>
              <label htmlFor="workspace-search">Search</label>
              <input
                id="workspace-search"
                autoFocus
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <div className="search-dialog-actions">
                <button type="button" className="cancel-btn" onClick={closeSearch}>Close</button>
                <button type="submit" className="primary-btn" disabled={!searchTerm.trim()}>Search</button>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  )
}
