import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AppShell, MainPanel } from '../styled/DashboardApp.styles.js'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'
import ReportForm from './ReportForm.jsx'
import OverviewPage from './OverviewPage.jsx'
import WorkspacePage from './WorkspacePage.jsx'
import { requestDashboardData } from '../store/dashboard.js'

const navItems = [
  { label: 'Overview', path: '/' }, { label: 'Analytics', path: '/analytics' }, { label: 'Revenue', path: '/revenue' },
  { label: 'Orders', path: '/orders' }, { label: 'Messages', path: '/messages' }, { label: 'Settings', path: '/settings' },
]
const fallbackStats = [
  { label: 'Sales', value: '$48.2K', delta: '+1.9K', trend: '+18.2%' },
  { label: 'Conversion', value: '6.84%', delta: '+0.8%', trend: '+12.4%' },
  { label: 'Visitors', value: '14.8K', delta: '-420', trend: '-3.1%' },
]
const defaultTasks = [{ title: 'Design review', time: '09:30 AM' }, { title: 'Marketing sync', time: '11:00 AM' }, { title: 'Campaign launch', time: '02:00 PM' }]
const rows = [{ customer: 'Mark Johnson', plan: 'Pro', amount: '$1,240', status: 'Paid' }, { customer: 'Alicia Smith', plan: 'Basic', amount: '$480', status: 'Pending' }, { customer: 'David Lee', plan: 'Enterprise', amount: '$3,980', status: 'Paid' }]
const activity = ['New signup', 'Payment received', 'Campaign report']

export default function DashboardApp() {
  const location = useLocation()
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)
  const [tasks, setTasks] = useState(defaultTasks)
  const [showAllTasks, setShowAllTasks] = useState(false)
  const [isCreatingReport, setIsCreatingReport] = useState(false)
  const allTasks = [...defaultTasks, { title: 'Quarterly overview', time: 'Today' }, { title: 'Customer retention', time: 'Yesterday' }]
  const currentPage = navItems.find((item) => item.path === location.pathname) ?? navItems[0]
  const reportForm = useFormik({
    initialValues: { reportName: '' },
    validate: (values) => (!values.reportName.trim() ? { reportName: 'Report title is required' } : {}),
    onSubmit: ({ reportName }, { resetForm }) => { setTasks((previous) => [{ title: reportName.trim(), time: 'Just now' }, ...previous]); resetForm(); setIsCreatingReport(false) },
  })

  useEffect(() => { dispatch(requestDashboardData()) }, [dispatch])

  const visibleTasks = showAllTasks ? allTasks : tasks
  const handleCancelReport = () => { reportForm.resetForm(); setIsCreatingReport(false) }

  return <AppShell>
    <Sidebar items={navItems} />
    <MainPanel component="main">
      <Topbar title={currentPage.label} onNewReport={() => setIsCreatingReport(true)} isActive={isCreatingReport} />
      {isCreatingReport && <ReportForm formik={reportForm} onCancel={handleCancelReport} />}
      <Routes>
        <Route path="/" element={<OverviewPage stats={data?.stats ?? fallbackStats} tasks={visibleTasks} showAll={showAllTasks} onToggleTasks={() => setShowAllTasks((value) => !value)} rows={rows} activity={activity} loading={loading} error={error} />} />
        <Route path="/analytics" element={<WorkspacePage pageKey="analytics" />} />
        <Route path="/revenue" element={<WorkspacePage pageKey="revenue" />} />
        <Route path="/orders" element={<WorkspacePage pageKey="orders" />} />
        <Route path="/messages" element={<WorkspacePage pageKey="messages" />} />
        <Route path="/settings" element={<WorkspacePage pageKey="settings" />} />
      </Routes>
    </MainPanel>
  </AppShell>
}
