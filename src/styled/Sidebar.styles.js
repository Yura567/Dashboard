import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
import { colors } from './theme.js'

export const SidebarRoot = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  padding: theme.spacing(3, 2.25),
  color: '#e5e7eb',
  background: colors.sidebar,
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1.5, 2),
    flexDirection: 'row',
    alignItems: 'center',
    overflowX: 'auto',
  },
}))

export const Brand = styled(Box)({ display: 'flex', alignItems: 'center', gap: 12, minWidth: 175 })
export const BrandMark = styled(Box)({
  width: 38, height: 38, display: 'grid', placeItems: 'center', borderRadius: 10,
  fontWeight: 700, background: 'linear-gradient(135deg, #7c3aed, #2563eb)', color: '#fff',
})
export const BrandEyebrow = styled('p')({ margin: 0, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8' })
export const BrandTitle = styled('h1')({ margin: '6px 0 0', fontSize: '1rem', color: '#fff' })
export const Navigation = styled(Box)(({ theme }) => ({
  display: 'flex', flexDirection: 'column', gap: theme.spacing(1), marginTop: theme.spacing(1),
  [theme.breakpoints.down('md')]: { flexDirection: 'row', marginTop: 0 },
}))
export const NavItem = styled(NavLink)(({ theme }) => ({
  display: 'flex', alignItems: 'center', gap: 10, width: '100%', padding: theme.spacing(1.25, 1.5),
  borderRadius: 10, color: '#d1d5db', fontWeight: 500, '&.active': { background: 'rgba(255,255,255,0.08)', color: '#fff' },
  '& span': { width: 20, textAlign: 'center', opacity: 0.9 },
  [theme.breakpoints.down('md')]: { width: 'auto', whiteSpace: 'nowrap' },
}))
export const Avatar = styled('span')({ width: 34, height: 34, display: 'grid', placeItems: 'center', borderRadius: '50%', background: 'linear-gradient(135deg, #f9a8d4, #8b5cf6)', color: '#fff', fontSize: '0.68rem', fontWeight: 700 })
export const ProfileCard = styled(Box)(({ theme }) => ({
  marginTop: 'auto', display: 'flex', alignItems: 'center', gap: 10, padding: theme.spacing(1.25),
  border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, background: 'rgba(255,255,255,0.05)',
  [theme.breakpoints.down('md')]: { display: 'none' },
  '& strong, & small': { display: 'block' },
  '& small': { marginTop: 2, color: '#cbd5e1' },
}))
