import styled from 'styled-components'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'

export const WorkspaceRoot = styled(Stack)`
  gap: ${({ theme }) => theme.spacing(2.5)};
`

export const WorkspaceIntro = styled.div``

export const WorkspaceEyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const WorkspaceTitle = styled.h3`
  margin: ${({ theme }) => theme.spacing(1, 0)};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.5rem;
`

export const WorkspaceDescription = styled.p`
  max-width: 680px;
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
`

export const WorkspaceCard = styled(Card)`
  width: 100%;
  max-width: 920px;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => theme.shape.borderRadius + 4}px;
  box-shadow: none;
`

export const WorkspaceCardContent = styled(CardContent)`
  padding: ${({ theme }) => theme.spacing(2)};

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
  }
`

export const WorkspaceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.breakpoints.down('sm')} {
    align-items: flex-start;
    flex-direction: column;
  }
`

export const CreateButton = styled(Button)`
  flex: 0 0 auto;
`

export const WorkspaceItems = styled.div`
  display: grid;
`

export const WorkspaceItem = styled.button`
  display: grid;
  grid-template-columns: 42px minmax(0, 1fr) 24px;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  width: 100%;
  min-height: 58px;
  padding: ${({ theme }) => theme.spacing(1.25, 1)};
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
  color: ${({ theme }) => theme.palette.text.primary};
  background: ${({ theme }) => theme.palette.background.paper};
  text-align: left;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.dashboard.mutedSurface};
  }
`

export const ItemNumber = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.78rem;
  font-weight: 700;
`

export const ItemCopy = styled.span`
  min-width: 0;
  overflow-wrap: anywhere;

  small {
    display: block;
    margin-top: ${({ theme }) => theme.spacing(0.5)};
    color: ${({ theme }) => theme.palette.primary.main};
  }
`

export const ItemArrow = styled.span`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: right;
`