import { createTheme } from '@mui/material/styles'

export const designTokens = {
  sidebar: '#111827',
  sidebarText: '#e5e7eb',
  sidebarMuted: '#94a3b8',
  sidebarBorder: 'rgba(255, 255, 255, 0.08)',
  sidebarSurface: 'rgba(255, 255, 255, 0.05)',
  sidebarActive: 'rgba(255, 255, 255, 0.08)',
  sidebarHover: 'rgba(255, 255, 255, 0.12)',
  profileGradient: 'linear-gradient(135deg, #f9a8d4, #8b5cf6)',
  mutedSurface: '#f9fafb',
  chartSurface: '#f9fafb',
  primaryShadow: 'rgba(37, 99, 235, 0.28)',
  successSoft: 'rgba(22, 163, 74, 0.12)',
  warningSoft: 'rgba(245, 158, 11, 0.12)',
  errorSoft: 'rgba(239, 68, 68, 0.1)',
  brandGradient: 'linear-gradient(135deg, #7c3aed, #2563eb)',
  revenueGradient: 'linear-gradient(180deg, #60a5fa, #2563eb)',
  appBackground: 'linear-gradient(135deg, #edf2ff 0%, #f7f9fc 100%)',
  chartGrid: 'rgba(148, 163, 184, 0.16)',
  activityBackground: 'linear-gradient(180deg, rgba(80, 118, 255, 0.05), rgba(255, 255, 255, 0.8))',
  successText: '#15803d',
  warningText: '#b45309',
  errorText: '#b91c1c',
  avatarGradients: {
    amber: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
    blue: 'linear-gradient(135deg, #60a5fa, #4f7cff)',
    pink: 'linear-gradient(135deg, #f9a8d4, #ec4899)',
  },
}

export const theme = createTheme({
  palette: {
    primary: { main: '#2563eb', dark: '#1d4ed8', light: '#60a5fa' },
    secondary: { main: '#7c3aed' },
    success: { main: '#16a34a' },
    warning: { main: '#f59e0b' },
    error: { main: '#dc2626' },
    background: { default: '#f3f4f6', paper: '#ffffff' },
    text: { primary: '#111827', secondary: '#6b7280' },
    divider: '#e5e7eb',
  },
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1100, xl: 1440 },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: { textTransform: 'none', fontWeight: 600 },
  },
  dashboard: designTokens,
})