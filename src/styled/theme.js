import { createTheme } from '@mui/material/styles'

export const colors = {
  background: '#f3f4f6',
  panel: '#ffffff',
  sidebar: '#111827',
  text: '#111827',
  muted: '#6b7280',
  line: '#e5e7eb',
  blue: '#2563eb',
  purple: '#7c3aed',
  green: '#16a34a',
  amber: '#f59e0b',
  pink: '#ec4899',
  danger: '#b42318',
}

export const dashboardTheme = createTheme({
  palette: {
    background: { default: colors.background, paper: colors.panel },
    text: { primary: colors.text, secondary: colors.muted },
    primary: { main: colors.blue },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 14 },
})
