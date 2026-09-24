import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const ChartArea = styled(Box)({ position: 'relative', height: 260, padding: '14px 12px 0', borderRadius: 10, overflow: 'hidden', background: '#f9fafb' })
export const GridLines = styled(Box)({ position: 'absolute', inset: '0 0 28px', backgroundImage: 'linear-gradient(to top, rgba(148,163,184,0.16) 1px, transparent 1px)', backgroundSize: '100% 25%' })
export const Bars = styled(Box)({ position: 'absolute', inset: '18px 14px 28px', display: 'flex', alignItems: 'end', justifyContent: 'space-between', gap: 10, '& span': { flex: 1, height: 'var(--h)', borderRadius: '10px 10px 0 0', background: 'linear-gradient(180deg, #60a5fa, #2563eb)' } })
export const ChartFooter = styled(Box)({ display: 'flex', justifyContent: 'space-between', marginTop: 10, color: '#6b7280', fontSize: '0.72rem' })
