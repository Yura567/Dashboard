import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colors } from './theme.js'

export const ReportFormRoot = styled(Box)(({ theme }) => ({
  display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: theme.spacing(2.25), padding: theme.spacing(1.5, 1.75),
  background: colors.panel, border: `1px solid ${colors.line}`, borderRadius: 12,
  [theme.breakpoints.down('sm')]: { flexWrap: 'wrap' },
}))
export const ReportInput = styled('input')(({ theme }) => ({
  flex: 1, minWidth: 160, padding: theme.spacing(1.25), border: `1px solid ${colors.line}`, borderRadius: 10,
  font: 'inherit', outline: 'none', '&:focus': { borderColor: colors.blue },
}))
export const FormError = styled('span')({ width: '100%', color: colors.danger, fontSize: '0.78rem' })
