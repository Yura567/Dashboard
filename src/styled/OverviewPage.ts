import styled from 'styled-components'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Grid, { type GridProps } from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

export const OverviewGrid = styled(Grid)<GridProps>`
  width: 100%;
`

export const PanelCard = styled(Card)`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 4}px;
  box-shadow: none;
`

export const PanelContent = styled(CardContent)`
  min-width: 0;
  padding: ${({ theme }) => theme.spacing(2)};

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
  }
`

export const PanelHeader = styled(Box)`
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

export const PanelEyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const PanelTitle = styled.h3`
  margin: ${({ theme }) => theme.spacing(0.5, 0, 0)};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.2rem;
`

export const ViewAllButton = styled(Button)`
  padding-inline: ${({ theme }) => theme.spacing(0.75)};
`

export const TaskList = styled(List)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 0;
`

export const TaskRow = styled(ListItemButton)`
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding: ${({ theme }) => theme.spacing(1.25, 1)};
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 2}px;
  background: ${({ theme }) => theme.dashboard.mutedSurface};
`

export const TaskMarker = styled.span<{ $tone: 'primary' | 'secondary' | 'success' }>`
  width: 10px;
  height: 10px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${({ theme, $tone }) => theme.palette[$tone].main};
`

export const TaskCopy = styled.span`
  min-width: 0;
`

export const TaskTitle = styled.strong`
  display: block;
  color: ${({ theme }) => theme.palette.text.primary};
  overflow-wrap: anywhere;
`

export const TaskTime = styled.small`
  display: block;
  margin-top: ${({ theme }) => theme.spacing(0.25)};
  color: ${({ theme }) => theme.palette.text.secondary};
`

export const TransactionTableContainer = styled(TableContainer)`
  max-width: 100%;
  overflow-x: auto;
`

export const TransactionTable = styled(Table)`
  min-width: 520px;
`

export const TransactionHeaderCell = styled(TableCell)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  white-space: nowrap;
`

export const TransactionCell = styled(TableCell)`
  border-bottom-color: ${({ theme }) => theme.palette.divider};
  color: ${({ theme }) => theme.palette.text.primary};
  white-space: nowrap;
`

export const SortButton = styled(Button)`
  min-width: 0;
  padding: 0;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  text-transform: inherit;
`

export const SortIndicator = styled.span`
  margin-left: ${({ theme }) => theme.spacing(0.5)};
  font-size: 0.75rem;
`

export const CustomerCell = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.25)};
`

export const CustomerAvatar = styled(Avatar)<{ $tone: 'amber' | 'blue' | 'pink' }>`
  width: 28px;
  height: 28px;
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme, $tone }) => theme.dashboard.avatarGradients[$tone]};
  font-size: 0.7rem;
  font-weight: 700;
`

export const PaymentStatus = styled(Chip)<{ $paid: boolean }>`
  height: auto;
  border-radius: 999px;
  color: ${({ theme, $paid }) => $paid ? theme.dashboard.successText : theme.dashboard.warningText};
  background: ${({ theme, $paid }) => $paid ? theme.dashboard.successSoft : theme.dashboard.warningSoft};
  font-size: 0.76rem;
  font-weight: 700;

  & .MuiChip-label {
    padding: ${({ theme }) => theme.spacing(0.75, 1.25)};
  }
`

export const ActivityList = styled(Box)`
  display: grid;
  gap: ${({ theme }) => theme.spacing(1.25)};
`

export const ActivityItem = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  padding: ${({ theme }) => theme.spacing(1.25, 1)};
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 2}px;
  background: ${({ theme }) => theme.dashboard.activityBackground};
`

export const ActivityDot = styled.span<{ $tone: 'primary' | 'secondary' | 'success' }>`
  width: 10px;
  height: 10px;
  flex: 0 0 auto;
  border-radius: 50%;
  background: ${({ theme, $tone }) => theme.palette[$tone].main};
`

export const ActivityCopy = styled.span`
  min-width: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  overflow-wrap: anywhere;
`

export const ActivityTime = styled.small`
  display: block;
  margin-top: ${({ theme }) => theme.spacing(0.25)};
  color: ${({ theme }) => theme.palette.text.secondary};
`