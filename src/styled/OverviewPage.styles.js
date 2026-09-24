import { Box, Card, Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colors } from './theme.js'

export const Panel = styled(Card)({ border: `1px solid ${colors.line}`, boxShadow: 'none', overflow: 'hidden' })
export const OverviewGrid = styled(Grid)(({ theme }) => ({ marginBottom: theme.spacing(2) }))
export const StatsGrid = styled(Grid)(({ theme }) => ({ marginBottom: theme.spacing(2.25) }))
export const PanelHeader = styled(Box)({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 16 })
export const SectionLabel = styled('p')({ margin: 0, color: colors.muted, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' })
export const SectionTitle = styled('h3')({ margin: '6px 0 0', fontSize: '1.2rem', letterSpacing: '-0.04em' })
export const DataStatus = styled('p')(({ error }) => ({ margin: '0 0 18px', color: error ? colors.danger : colors.muted, fontSize: '0.85rem' }))
export const TaskList = styled('ul')({ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 18 })
export const TaskItem = styled('li')({ display: 'flex', alignItems: 'center', gap: 12, padding: 10, borderRadius: 10, background: '#f9fafb' })
export const Dot = styled('span')({ width: 9, height: 9, flex: '0 0 auto', borderRadius: '50%', background: colors.blue })
export const ActivityList = styled(Box)({ display: 'flex', flexDirection: 'column', gap: 18 })
export const ActivityItem = styled(Box)({ display: 'flex', alignItems: 'center', gap: 12 })
