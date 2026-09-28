import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

export const RevenueCard = styled(Card)`
  height: 100%;
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 4}px;
  box-shadow: none;
`

export const RevenueContent = styled(CardContent)`
  padding: ${({ theme }) => theme.spacing(2)};

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing(2)};
  }
`

export const RevenueHeader = styled.div`
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

export const RevenueEyebrow = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
`

export const RevenueTitle = styled.h3`
  margin: ${({ theme }) => theme.spacing(0.5, 0, 0)};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1.2rem;
`

export const PeriodGroup = styled(ToggleButtonGroup)`
  padding: ${({ theme }) => theme.spacing(0.5)};
  border-radius: ${({ theme }) => theme.shape.borderRadius}px;
  background: ${({ theme }) => theme.palette.background.default};

  & .MuiToggleButtonGroup-grouped {
    margin: 0;
    border: 0;
    border-radius: ${({ theme }) => Number(theme.shape.borderRadius) - 2}px;
    color: ${({ theme }) => theme.palette.text.secondary};
    font-size: 0.75rem;
    padding: ${({ theme }) => theme.spacing(0.75, 1.25)};

    &.Mui-selected {
      color: ${({ theme }) => theme.palette.text.primary};
      background: ${({ theme }) => theme.palette.background.paper};
    }
  }
`

export const PeriodButton = styled(ToggleButton)``

export const ChartArea = styled.div`
  position: relative;
  height: 260px;
  overflow: hidden;
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 2}px;
  background: ${({ theme }) => theme.dashboard.chartSurface};

  @media ${({ theme }) => theme.breakpoints.down('sm')} {
    height: 220px;
  }
`

export const GridLines = styled.div`
  position: absolute;
  inset: 0 0 ${({ theme }) => theme.spacing(3.5)};
  background-image: linear-gradient(to top, ${({ theme }) => theme.dashboard.chartGrid} 1px, transparent 1px);
  background-size: 100% 25%;
`

export const Bars = styled.div`
  position: absolute;
  inset: ${({ theme }) => theme.spacing(2.25, 1.75, 3.5)};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(1)};
`

export const Bar = styled.span<{ $height: number }>`
  flex: 1;
  height: ${({ $height }) => $height}%;
  border-radius: ${({ theme }) => Number(theme.shape.borderRadius) + 2}px ${({ theme }) => Number(theme.shape.borderRadius) + 2}px 0 0;
  background: ${({ theme }) => theme.dashboard.revenueGradient};
`

export const ChartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(0.5)};
  margin-top: ${({ theme }) => theme.spacing(1.25)};
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.72rem;

  @media ${({ theme }) => theme.breakpoints.down('sm')} {
    span:nth-child(even) {
      display: none;
    }
  }
`