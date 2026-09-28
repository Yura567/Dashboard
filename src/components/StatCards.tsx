import Grid from '@mui/material/Grid'

import { Delta, Sparkline, SparklineBar, StatCard, StatCardContent, StatHeader, StatLabel, StatValue, StatsGrid, Trend, ValueRow } from '../styled/StatCards'

const stats: { label: string; value: string; delta: string; trend: string; tone: 'primary' | 'secondary' | 'success'; heights: number[] }[] = [
  { label: 'Sales', value: '$48.2K', delta: '+1.9K', trend: '+18.2%', tone: 'primary', heights: [32, 48, 64, 56, 78, 100] },
  { label: 'Conversion', value: '6.84%', delta: '+0.8%', trend: '+12.4%', tone: 'secondary', heights: [48, 34, 66, 54, 80, 100] },
  { label: 'Visitors', value: '14.8K', delta: '-420', trend: '-3.1%', tone: 'success', heights: [74, 88, 66, 82, 54, 68] },
]

export default function StatCards() {
  return (
    <StatsGrid container spacing={2}>
      {stats.map((card) => {
        const isPositive = card.delta.startsWith('+')
        return (
          <Grid key={card.label} size={{ xs: 12, sm: 6, lg: 4 }}>
            <StatCard>
              <StatCardContent>
                <StatHeader>
                  <StatLabel>{card.label}</StatLabel>
                  <Trend $positive={isPositive}>{card.trend}</Trend>
                </StatHeader>
                <ValueRow>
                  <StatValue>{card.value}</StatValue>
                  <Delta $positive={isPositive}>{isPositive ? '▲' : '▼'} {card.delta.replace(/^[+-]/, '')}</Delta>
                </ValueRow>
                <Sparkline>
                  {card.heights.map((height, index) => <SparklineBar key={`${card.label}-${index}`} $height={`${height}%`} $tone={card.tone} />)}
                </Sparkline>
              </StatCardContent>
            </StatCard>
          </Grid>
        )
      })}
    </StatsGrid>
  )
}