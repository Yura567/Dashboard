import { useState } from 'react'

const pageContent = {
  analytics: ['Insights', 'Analytics workspace', 'Track audience behavior and conversion performance across your workspace.', ['Sessions', 'Bounce rate', 'Avg. session']],
  revenue: ['Finance', 'Revenue center', 'Review recurring revenue, invoices, and the latest payment performance.', ['Monthly recurring revenue', 'Invoices', 'Payout schedule']],
  orders: ['Commerce', 'Orders workspace', 'Manage recent orders and keep fulfilment moving across every channel.', ['Order queue', 'Fulfilment status', 'Returns and exchanges']],
  messages: ['Communication', 'Messages inbox', 'Keep customer conversations, team updates, and follow-ups in one place.', ['Customer conversations', 'Team mentions', 'Saved replies']],
  settings: ['Workspace', 'Settings', 'Configure your workspace preferences, team access, and notification rules.', ['Workspace profile', 'Team permissions', 'Notifications']],
}

export default function WorkspacePage({ pageKey }) {
  const [eyebrow, title, description, items] = pageContent[pageKey] ?? pageContent.analytics
  const [workspaceItems, setWorkspaceItems] = useState(items)
  const [selectedItem, setSelectedItem] = useState('')
  const createItem = () => setWorkspaceItems((currentItems) => [...currentItems, `New ${eyebrow.toLowerCase()} item`])

  return (
    <section className="workspace-root">
      <div className="workspace-intro">
        <p className="eyebrow muted">{eyebrow}</p>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <article className="panel workspace-card">
        <div className="panel-header">
          <div>
            <p className="eyebrow muted">Workspace tools</p>
            <h3>Manage {eyebrow.toLowerCase()}</h3>
          </div>
          <button type="button" className="primary-btn" onClick={createItem}>Create new</button>
        </div>
        <div className="workspace-items">
          {workspaceItems.map((item, index) => (
            <button
              type="button"
              className="workspace-link"
              key={`${item}-${index}`}
              onClick={() => setSelectedItem(item)}
            >
              <span className="workspace-number">{String(index + 1).padStart(2, '0')}</span>
              <span>{item}{selectedItem === item && <small>Opened</small>}</span>
              <span className="workspace-arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </article>
    </section>
  )
}
