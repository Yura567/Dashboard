import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Topbar = styled(Box)(({ theme }) => ({
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, marginBottom: theme.spacing(2.5),
  [theme.breakpoints.down('sm')]: { alignItems: 'flex-start', flexDirection: 'column' },
}))
export const TopActions = styled(Box)({ display: 'flex', alignItems: 'center', gap: 10 })
export const Eyebrow = styled('p')({ margin: 0, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6b7280' })
export const PageTitle = styled('h2')({ margin: '8px 0 0', fontSize: 'clamp(1.7rem, 2vw, 2.2rem)', letterSpacing: '-0.04em' })
