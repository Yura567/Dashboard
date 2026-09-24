import { Box, Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colors } from './theme.js'

export const WorkspaceRoot = styled(Box)(({ theme }) => ({ display: 'grid', gap: theme.spacing(2.75) }))
export const Intro = styled(Box)({ maxWidth: 620, '& h3': { margin: '7px 0 8px', fontSize: 'clamp(1.35rem, 2vw, 1.8rem)' }, '& p': { margin: 0, color: colors.muted } })
export const WorkspaceCard = styled(Card)({ border: `1px solid ${colors.line}`, boxShadow: 'none', minHeight: 250 })
export const PageLink = styled('button')({ display: 'grid', gridTemplateColumns: '34px 1fr auto', alignItems: 'center', gap: 12, width: '100%', padding: '13px 0', border: 0, borderBottom: '1px solid #edf0f5', background: 'transparent', color: '#202938', textAlign: 'left', cursor: 'pointer', '&:last-child': { borderBottom: 0 } })
export const PageLinkNumber = styled('span')({ color: '#8b93a4', fontSize: '0.78rem', fontWeight: 700 })
export const PageLinkArrow = styled('span')({ color: colors.purple, fontSize: '1.15rem' })
