import { styled } from '@mui/material/styles'
import { colors } from './theme.js'

export const TableWrap = styled('div')({ overflowX: 'auto' })
export const Table = styled('table')({ width: '100%', borderCollapse: 'collapse', '& th, & td': { padding: '12px 8px', textAlign: 'left', borderBottom: `1px solid ${colors.line}`, whiteSpace: 'nowrap' }, '& th': { color: colors.muted, fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase' }, '& td': { color: colors.text, fontSize: '0.85rem' } })
export const UserCell = styled('div')({ display: 'flex', alignItems: 'center', gap: 8 })
export const Avatar = styled('span')({ width: 28, height: 28, display: 'grid', placeItems: 'center', borderRadius: '50%', color: '#fff', background: 'linear-gradient(135deg, #f9a8d4, #8b5cf6)', fontSize: '0.68rem', fontWeight: 700 })
export const Status = styled('span')(({ pending }) => ({ padding: '5px 7px', borderRadius: 999, color: pending ? '#92400e' : '#15803d', background: pending ? 'rgba(245,158,11,0.14)' : 'rgba(22,163,74,0.12)', fontSize: '0.72rem', fontWeight: 700 }))
