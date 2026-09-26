import { useState } from 'react'
import './App.css'
import RevenuePanel from './components/RevenuePanel.jsx'
import Topbar from './components/Topbar.jsx'
import WorkspacePage from './components/WorkspacePage.jsx'

const navItems = ['Overview', 'Analytics', 'Revenue', 'Orders', 'Messages', 'Settings']
const stats = [
  { label: 'Sales', value: '$48.2K', delta: '+1.9K', trend: '+18.2%', tone: 'blue' },
  { label: 'Conversion', value: '6.84%', delta: '+0.8%', trend: '+12.4%', tone: 'purple' },
  { label: 'Visitors', value: '14.8K', delta: '-420', trend: '-3.1%', tone: 'green' },
]
const defaultTasks = [
  { title: 'Design review', time: '09:30 AM', color: 'blue' },
  { title: 'Marketing sync', time: '11:00 AM', color: 'purple' },
  { title: 'Campaign launch', time: '02:00 PM', color: 'green' },
]
const rows = [
  ['Mark Johnson', 'Pro', '$1,240', 'Paid'],
  ['Alicia Smith', 'Basic', '$480', 'Pending'],
  ['David Lee', 'Enterprise', '$3,980', 'Paid'],
]
const activity = ['New signup', 'Payment received', 'Campaign report']
function App() {
  const [activePage, setActivePage] = useState('Overview')
  const [activeAction, setActiveAction] = useState('report')
  const [tasks, setTasks] = useState(defaultTasks)
  const [showAllReports, setShowAllReports] = useState(false)
  const [isCreatingReport, setIsCreatingReport] = useState(false)
  const [reportName, setReportName] = useState('')
  const allReports = [
    ...defaultTasks,
    { title: 'Quarterly overview', time: 'Today', color: 'purple' },
    { title: 'Customer retention', time: 'Yesterday', color: 'green' },
    { title: 'Regional sales', time: '2 days ago', color: 'blue' },
    { title: 'Campaign analytics', time: '3 days ago', color: 'purple' },
  ]

  const visibleTasks = showAllReports ? allReports : tasks

  const handleAddReport = () => {
    setActiveAction('report')
    setShowAllReports(false)
    setIsCreatingReport(true)
  }

  const handleSubmitReport = (event) => {
    event.preventDefault()
    const trimmed = reportName.trim()
    if (!trimmed) return

    setTasks((prev) => [{ title: trimmed, time: 'Just now', color: 'blue' }, ...prev])
    setReportName('')
    setIsCreatingReport(false)
    setActiveAction('report')
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">D</div>
          <div>
            <p className="eyebrow">Workspace</p>
            <h1>Dashboard</h1>
          </div>
        </div>

        <nav className="nav">
          {navItems.map((item, i) => (
            <button
              type="button"
              key={item}
              className={`nav-item ${activePage === item ? 'active' : ''}`}
              onClick={() => setActivePage(item)}
            >
              <span className="icon">{['◫','◎','▣','◌','◴','⚙'][i]}</span>
              {item}
            </button>
          ))}
        </nav>

        <div className="profile-card">
          <div className="avatar">AD</div>
          <div><strong>Admin</strong><small>Workspace</small></div>
        </div>
      </aside>

      <main className="main-panel">
        <Topbar title={activePage} onNewReport={handleAddReport} isActive={activeAction === 'report'} />

        {isCreatingReport && (
          <form className="report-form" onSubmit={handleSubmitReport}>
            <input
              type="text"
              value={reportName}
              onChange={(event) => setReportName(event.target.value)}
              placeholder="Enter report title"
              autoFocus
            />
            <button type="submit">Add</button>
            <button type="button" className="cancel-btn" onClick={() => setIsCreatingReport(false)}>
              Cancel
            </button>
          </form>
        )}

        {activePage === 'Overview' ? <>
        <section className="stats-grid">
          {stats.map((card) => (
            <article key={card.label} className={`stat-card accent-${card.tone}`}>
              <div className="stat-header">
                <span className="mini-label">{card.label}</span>
                <span className={`trend ${card.delta.startsWith('+') ? 'up' : 'down'}`}>{card.trend}</span>
              </div>
              <div className="value-row">
                <h3>{card.value}</h3>
                <span className={`delta ${card.delta.startsWith('+') ? 'positive' : 'negative'}`}>
                  {card.delta.startsWith('+') ? '▲' : '▼'} {card.delta.replace(/^[+-]/, '')}
                </span>
              </div>
              <div className={`spark spark-${card.tone}`}><span /><span /><span /><span /><span /><span /></div>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <RevenuePanel />

          <article className="panel">
            <div className="panel-header compact">
              <div>
                <p className="eyebrow muted">Today</p>
                <h3>Tasks</h3>
              </div>
              <button
                type="button"
                className="link-btn"
                onClick={() => setShowAllReports((prev) => !prev)}
              >
                {showAllReports ? 'Collapse' : 'View all'}
              </button>
            </div>
            <ul className="task-list">
              {visibleTasks.map((task, i) => (
                <li key={`${task.title}-${i}`}>
                  <span className={`task-pill ${task.color}`} />
                  <div>
                    <strong>{task.title}</strong>
                    <small>{task.time}</small>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="bottom-grid">
          <article className="panel">
            <div className="panel-header compact">
              <div>
                <p className="eyebrow muted">Leads</p>
                <h3>Recent transactions</h3>
              </div>
            </div>
            <table>
              <thead><tr><th>Customer</th><th>Plan</th><th>Amount</th><th>Status</th></tr></thead>
              <tbody>
                {rows.map(([name, plan, amount, status], i) => (
                  <tr key={name}>
                    <td><div className="user-cell"><span className={`avatar tiny ${['amber','blue','pink'][i]}`}>{name[0]}</span><span>{name}</span></div></td>
                    <td>{plan}</td>
                    <td>{amount}</td>
                    <td><span className={`status ${status === 'Paid' ? 'success' : 'pending'}`}>{status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>

          <article className="panel">
            <div className="panel-header compact">
              <div>
                <p className="eyebrow muted">Summary</p>
                <h3>Activity</h3>
              </div>
            </div>
            <div className="activity-list">
              {activity.map((item, i) => (
                <div key={item} className="activity-item">
                  <span className={`dot ${['blue','purple','green'][i]}`} />
                  <div><strong>{item}</strong><small>{['12 minutes ago', '1 hour ago', 'Yesterday'][i]}</small></div>
                </div>
              ))}
            </div>
          </article>
        </section>
        </> : <WorkspacePage key={activePage} pageKey={activePage.toLowerCase()} />}
      </main>
    </div>
  )
}

export default App
