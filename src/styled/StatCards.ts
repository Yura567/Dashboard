import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid, { type GridProps } from '@mui/material/Grid'

export const StatsGrid = styled(Grid)<GridProps>`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`

export const StatCard = styled(Card)`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 4}px;
  box-shadow: none;
`

export const StatCardContent = styled(CardContent)`
  padding: ${({ theme }) => theme.spacing(2)};

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
  }
`

export const StatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1.5)};
`

export const StatLabel = styled.span`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.75rem;
  font-weight: 600;
`

export const Trend = styled.span<{ $positive: boolean }>`
  padding: ${({ theme }) => theme.spacing(0.5, 0.875)};
  border-radius: 999px;
  color: ${({ theme, $positive }) => $positive ? theme.palette.success.dark : theme.dashboard.errorText};
  background: ${({ theme, $positive }) => $positive ? theme.dashboard.successSoft : theme.dashboard.errorSoft};
  font-size: 0.72rem;
  font-weight: 700;
`

export const ValueRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin: ${({ theme }) => theme.spacing(2, 0)};
`

export const StatValue = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.85rem;
`

export const Delta = styled.span<{ $positive: boolean }>`
  color: ${({ theme, $positive }) => $positive ? theme.palette.success.dark : theme.dashboard.errorText};
  font-size: 0.72rem;
  font-weight: 700;
`

export const Sparkline = styled.div`
  height: 28px;
  display: flex;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(0.625)};
`

export const SparklineBar = styled.span<{ $height: string; $tone: 'primary' | 'secondary' | 'success' }>`
  width: 10px;
  height: ${({ $height }) => $height};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px ${({ theme }) => theme.shape.borderRadius}px 0 0;
  background: ${({ theme, $tone }) => theme.palette[$tone].main};
`