import type { PropsWithChildren, ReactElement } from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { App, OverviewPage, RevenuePanel, StatCards, Topbar, WorkspacePage } from './'

import { store } from '../store'
import { theme } from '../styled/theme'

const ThemeProviders = ({ children }: PropsWithChildren) => (
	<StyledThemeProvider theme={theme}>
		<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
	</StyledThemeProvider>
)

const AppProviders = ({ children }: PropsWithChildren) => (
	<Provider store={store}>
		<MemoryRouter>
			<ThemeProviders>{children}</ThemeProviders>
		</MemoryRouter>
	</Provider>
)

const renderThemed = (ui: ReactElement) => render(ui, { wrapper: ThemeProviders })

function setSnapshotDate() {
	vi.useFakeTimers()
	vi.setSystemTime(new Date('2026-09-28T12:00:00.000Z'))
}

describe('App', () => {
	it('matches its snapshot', () => {
		setSnapshotDate()
		const { asFragment } = render(<App />, { wrapper: AppProviders })
		expect(asFragment()).toMatchSnapshot()
	})

	it('navigates to a workspace from the sidebar', async () => {
		const user = userEvent.setup()
		render(<App />, { wrapper: AppProviders })

		await user.click(screen.getByRole('link', { name: 'Analytics' }))

		expect(screen.getByRole('heading', { name: 'Analytics workspace' })).toBeInTheDocument()
	})
})

describe('OverviewPage', () => {
	it('matches its snapshot', () => {
		const { asFragment } = renderThemed(<OverviewPage />)
		expect(asFragment()).toMatchSnapshot()
	})

	it('shows all tasks when requested', async () => {
		const user = userEvent.setup()
		renderThemed(<OverviewPage />)

		await user.click(screen.getByRole('button', { name: 'View all' }))

		expect(screen.getByText('Campaign analytics')).toBeInTheDocument()
	})
})

describe('RevenuePanel', () => {
	it('matches its snapshot', () => {
		const { asFragment } = renderThemed(<RevenuePanel />)
		expect(asFragment()).toMatchSnapshot()
	})

	it('updates the chart period', async () => {
		const user = userEvent.setup()
		renderThemed(<RevenuePanel />)

		await user.click(screen.getByRole('button', { name: 'Quarter' }))

		expect(screen.getByLabelText('Quarter revenue chart')).toBeInTheDocument()
	})
})

describe('StatCards', () => {
	it('matches its snapshot and renders each metric', () => {
		const { asFragment } = renderThemed(<StatCards />)
		expect(asFragment()).toMatchSnapshot()
		expect(screen.getByText('Sales')).toBeInTheDocument()
		expect(screen.getByText('Conversion')).toBeInTheDocument()
		expect(screen.getByText('Visitors')).toBeInTheDocument()
	})
})

describe('Topbar', () => {
	it('matches its snapshot', () => {
		setSnapshotDate()
		const { asFragment } = renderThemed(
			<Topbar title="Overview" onNewReport={vi.fn()} isActive />,
		)
		expect(asFragment()).toMatchSnapshot()
	})

	it('opens and submits workspace search', async () => {
		const user = userEvent.setup()
		renderThemed(<Topbar title="Overview" onNewReport={vi.fn()} isActive />)

		await user.click(screen.getByRole('button', { name: 'Search' }))
		await user.type(screen.getByRole('textbox', { name: 'Search' }), 'revenue')
		await user.click(within(screen.getByRole('dialog')).getByRole('button', { name: 'Search' }))

		await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument())
	})

	it('calls the new report callback', () => {
		const onNewReport = vi.fn()
		renderThemed(<Topbar title="Overview" onNewReport={onNewReport} isActive />)

		fireEvent.click(screen.getByRole('button', { name: 'New report' }))

		expect(onNewReport).toHaveBeenCalledOnce()
	})
})

describe('WorkspacePage', () => {
	it('matches its snapshot', () => {
		const { asFragment } = renderThemed(<WorkspacePage pageKey="analytics" />)
		expect(asFragment()).toMatchSnapshot()
	})

	it('creates and opens a workspace item', async () => {
		const user = userEvent.setup()
		renderThemed(<WorkspacePage pageKey="analytics" />)

		await user.click(screen.getByRole('button', { name: 'Create new' }))
		expect(screen.getByText('New insights item')).toBeInTheDocument()

		await user.click(screen.getByRole('button', { name: /Sessions/ }))
		expect(screen.getByText('Opened')).toBeInTheDocument()
	})
})