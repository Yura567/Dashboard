import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colors } from './theme.js'

export const StatCard = styled(Card)(({ theme }) => ({ border: `1px solid ${colors.line}`, boxShadow: 'none', borderRadius: 14, padding: theme.spacing(2), minHeight: 130 }))
export const StatHeader = styled('div')({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 })
export const MiniLabel = styled('span')({ color: colors.muted, fontSize: '0.75rem', fontWeight: 600 })
export const ValueRow = styled('div')({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, margin: '16px 0' })
export const Value = styled('h3')({ margin: 0, fontSize: 'clamp(1.5rem, 2vw, 2.1rem)', letterSpacing: '-0.04em' })
export const Trend = styled('span')(({ negative }) => ({ padding: '5px 7px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 700, background: negative ? 'rgba(239,68,68,0.1)' : 'rgba(22,163,74,0.12)', color: negative ? '#b91c1c' : '#15803d' }))
export const Spark = styled('div')({ display: 'flex', alignItems: 'end', gap: 5, height: 28, '& span': { display: 'block', width: 10, height: 14, borderRadius: '6px 6px 0 0', background: colors.blue }, '& span:nth-of-type(2)': { height: 19 }, '& span:nth-of-type(3)': { height: 24 }, '& span:nth-of-type(4)': { height: 20 }, '& span:nth-of-type(5)': { height: 25 }, '& span:nth-of-type(6)': { height: 28 } })
