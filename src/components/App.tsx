import { useState } from 'react'
import { Field, Formik, type FieldProps } from 'formik'
import AddIcon from '@mui/icons-material/Add'
import DashboardIcon from '@mui/icons-material/DashboardOutlined'
import InsightsIcon from '@mui/icons-material/InsightsOutlined'
import MessageIcon from '@mui/icons-material/ChatBubbleOutline'
import ReceiptIcon from '@mui/icons-material/ReceiptLongOutlined'
import SettingsIcon from '@mui/icons-material/SettingsOutlined'
import WalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import type { SvgIconComponent } from '@mui/icons-material'

import OverviewPage from './OverviewPage'
import Topbar from './Topbar'
import WorkspacePage from './WorkspacePage'

import { clearReportError, createReportRequested } from '../store/ducks/reports'
import { type AppDispatch, type RootState } from '../store'
import { AppShell, Brand, BrandCopy, BrandEyebrow, BrandMark, BrandTitle, MainColumn, NavIcon, NavItem, Profile, ProfileAvatar, ProfileCopy, ReportError, ReportField, ReportForm, ReportFormButton, SidebarColumn, SidebarNav } from '../styled/App'

const navItems: { label: string; path: string; Icon: SvgIconComponent }[] = [
	{ label: 'Overview', path: '/', Icon: DashboardIcon },
	{ label: 'Analytics', path: '/analytics', Icon: InsightsIcon },
	{ label: 'Revenue', path: '/revenue', Icon: WalletIcon },
	{ label: 'Orders', path: '/orders', Icon: ReceiptIcon },
	{ label: 'Messages', path: '/messages', Icon: MessageIcon },
	{ label: 'Settings', path: '/settings', Icon: SettingsIcon },
]

export default function App() {
	const { pathname } = useLocation()
	const activePage = navItems.find((item) => item.path === pathname)?.label ?? 'Overview'
	const dispatch = useDispatch<AppDispatch>()
	const { status: reportStatus, error: reportError } = useSelector((state: RootState) => state.reports)
	const [activeAction, setActiveAction] = useState('report')
	const [isCreatingReport, setIsCreatingReport] = useState(false)

	const handleNewReport = () => {
		setActiveAction('report')
		dispatch(clearReportError())
		setIsCreatingReport(true)
	}

	return (
		<AppShell container columns={{ xs: 4, lg: 12 }} spacing={0}>
			<SidebarColumn component="aside" size={{ xs: 4, lg: 2 }}>
				<Brand>
					<BrandMark>D</BrandMark>
					<BrandCopy><BrandEyebrow>Workspace</BrandEyebrow><BrandTitle>Dashboard</BrandTitle></BrandCopy>
				</Brand>

				<SidebarNav aria-label="Main navigation">
					{navItems.map(({ label, path, Icon }) => (
						<NavItem key={path} to={path} $active={activePage === label} aria-current={activePage === label ? 'page' : undefined}>
							<NavIcon><Icon fontSize="small" /></NavIcon>{label}
						</NavItem>
					))}
				</SidebarNav>

				<Profile>
					<ProfileAvatar>AD</ProfileAvatar>
					<ProfileCopy><strong>Admin</strong><small>Workspace</small></ProfileCopy>
				</Profile>
			</SidebarColumn>

			<MainColumn component="main" size={{ xs: 4, lg: 10 }}>
				<Topbar title={activePage} onNewReport={handleNewReport} isActive={activeAction === 'report'} />

				{isCreatingReport && reportStatus !== 'succeeded' && (
					<Formik
						initialValues={{ title: '' }}
						validate={({ title }) => {
							const trimmedTitle = title.trim()
							if (!trimmedTitle) return { title: 'Enter a report title.' }
							if (trimmedTitle.length > 80) return { title: 'Use 80 characters or fewer.' }
							return {}
						}}
						onSubmit={({ title }) => {
							dispatch(createReportRequested({ title: title.trim() }))
							setActiveAction('report')
						}}
					>
						{({ dirty, isValid, handleSubmit }) => (
							<ReportForm onSubmit={handleSubmit} noValidate>
								<Field name="title">
									{({ field, meta }: FieldProps<string, { title: string }>) => (
										<ReportField
											{...field}
											autoFocus
											fullWidth
											size="small"
											label="Report title"
											placeholder="Enter report title"
											error={meta.touched && Boolean(meta.error)}
											helperText={meta.touched && meta.error ? meta.error : ' '}
											disabled={reportStatus === 'loading'}
										/>
									)}
								</Field>
								<ReportFormButton
									type="submit"
									variant="contained"
									startIcon={<AddIcon />}
									disabled={!dirty || !isValid || reportStatus === 'loading'}
								>
									{reportStatus === 'loading' ? 'Sending...' : 'Add report'}
								</ReportFormButton>
								<Button type="button" disabled={reportStatus === 'loading'} onClick={() => setIsCreatingReport(false)}>
									Cancel
								</Button>
							</ReportForm>
						)}
					</Formik>
				)}
				{reportError && <ReportError role="alert">Report was not saved: {reportError}</ReportError>}

				<Routes>
					<Route path="/" element={<OverviewPage />} />
					<Route path="/analytics" element={<WorkspacePage pageKey="analytics" />} />
					<Route path="/revenue" element={<WorkspacePage pageKey="revenue" />} />
					<Route path="/orders" element={<WorkspacePage pageKey="orders" />} />
					<Route path="/messages" element={<WorkspacePage pageKey="messages" />} />
					<Route path="/settings" element={<WorkspacePage pageKey="settings" />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</MainColumn>
		</AppShell>
	)
}