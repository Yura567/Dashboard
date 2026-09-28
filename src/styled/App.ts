import styled from 'styled-components'
import Button from '@mui/material/Button'
import Grid, { type GridProps } from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'

export const AppShell = styled(Grid)<GridProps>`
  min-height: 100vh;
  background: ${({ theme }) => theme.palette.background.default};
`

export const SidebarColumn = styled(Grid)<GridProps>`
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(3, 2)};
  color: ${({ theme }) => theme.dashboard.sidebarText};
  background: ${({ theme }) => theme.dashboard.sidebar};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2.5)};

  @media ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: ${({ theme }) => theme.spacing(2)};
  }
`

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding: ${({ theme }) => theme.spacing(1)};
`

export const BrandMark = styled.div`
  width: 40px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 2}px;
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.dashboard.brandGradient};
  font-weight: 700;
`

export const BrandCopy = styled.div`
  min-width: 0;
`

export const BrandEyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.dashboard.sidebarMuted};
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const BrandTitle = styled.h1`
  margin: ${({ theme }) => theme.spacing(0.5, 0, 0)};
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1rem;
`

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.75)};
  margin-top: ${({ theme }) => theme.spacing(1)};

  @media ${({ theme }) => theme.breakpoints.down('lg')} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    margin-top: 0;
  }
`

export const NavItem = styled(Link)<{ $active: boolean }>`
  min-width: 0;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.25)};
  padding: ${({ theme }) => theme.spacing(1.25, 1.5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  color: ${({ theme, $active }) => $active ? theme.palette.common.white : theme.dashboard.sidebarText};
  background: ${({ theme, $active }) => $active ? theme.dashboard.sidebarActive : 'transparent'};
  font-weight: 500;
  transition: background-color 150ms ease;

  &:hover {
    background: ${({ theme }) => theme.dashboard.sidebarHover};
  }
`

export const NavIcon = styled.span`
  width: 20px;
  display: inline-grid;
  place-items: center;
  opacity: 0.9;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.25)};
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing(1.25, 1.5)};
  border: 1px solid ${({ theme }) => theme.dashboard.sidebarBorder};
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 2}px;
  background: ${({ theme }) => theme.dashboard.sidebarSurface};
`

export const ProfileAvatar = styled.div`
  width: 36px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.dashboard.profileGradient};
  font-size: 0.68rem;
  font-weight: 700;
`

export const ProfileCopy = styled.div`
  display: grid;

  small {
    color: ${({ theme }) => theme.dashboard.sidebarText};
  }
`

export const MainColumn = styled(Grid)<GridProps>`
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(3, 2.75, 2)};

  @media ${({ theme }) => theme.breakpoints.down('lg')} {
    padding-top: ${({ theme }) => theme.spacing(2.5)};
  }

  @media ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: ${({ theme }) => theme.spacing(2, 1.5)};
  }
`

export const ReportForm = styled.form`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(1.25)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1.5)};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 2}px;
  background: ${({ theme }) => theme.palette.background.paper};

  @media ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-wrap: wrap;
  }
`

export const ReportField = styled(TextField)`
  flex: 1;
  min-width: 180px;
`

export const ReportFormButton = styled(Button)`
  min-height: 48px;
  flex: 0 0 auto;
`

export const ReportError = styled.p`
  margin: ${({ theme }) => theme.spacing(-1, 0, 2)};
  color: ${({ theme }) => theme.dashboard.errorText};
  font-size: 0.875rem;
`