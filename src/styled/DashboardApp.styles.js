import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colors } from './theme.js'

export const AppShell = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '220px minmax(0, 1fr)',
  background: colors.background,
  [theme.breakpoints.down('md')]: { gridTemplateColumns: '1fr' },
}))

export const MainPanel = styled(Box)(({ theme }) => ({
  minWidth: 0,
  padding: theme.spacing(3, 2.75, 2.25),
  [theme.breakpoints.down('sm')]: { padding: theme.spacing(2) },
}))
