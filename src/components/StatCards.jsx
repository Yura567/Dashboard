import { Grid } from '@mui/material'
import { StatsGrid } from '../styled/OverviewPage.styles.js'
import { MiniLabel, Spark, StatCard, StatHeader, Trend, Value, ValueRow } from '../styled/StatCards.styles.js'

export default function StatCards({ stats }) {
  return (
    <StatsGrid container spacing={2}>
      {stats.map((card) => (
        <Grid key={card.label} size={{ xs: 12, sm: 4 }}>
          <StatCard>
            <StatHeader><MiniLabel>{card.label}</MiniLabel><Trend negative={card.delta.startsWith('-')}>{card.trend}</Trend></StatHeader>
            <ValueRow><Value>{card.value}</Value><Trend negative={card.delta.startsWith('-')}>{card.delta}</Trend></ValueRow>
            <Spark><span /><span /><span /><span /><span /><span /></Spark>
          </StatCard>
        </Grid>
      ))}
    </StatsGrid>
  )
}
