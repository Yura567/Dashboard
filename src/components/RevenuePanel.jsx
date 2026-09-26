import { useState } from 'react'
import { Bars, Bar, ChartArea, ChartFooter, GridLines, PeriodButton, PeriodGroup, RevenueCard, RevenueContent, RevenueEyebrow, RevenueHeader, RevenueTitle } from '../styled/RevenuePanel.js'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const barHeights = [28, 42, 35, 56, 65, 52, 76, 68, 88, 74, 92, 82]
const periods = ['Month', 'Quarter', 'Year']

export default function RevenuePanel() {
  const [period, setPeriod] = useState('Month')

  return (
    <RevenueCard>
      <RevenueContent>
        <RevenueHeader>
          <div>
            <RevenueEyebrow>Performance</RevenueEyebrow>
            <RevenueTitle>Revenue overview</RevenueTitle>
          </div>
          <PeriodGroup
            exclusive
            size="small"
            value={period}
            aria-label="Revenue period"
            onChange={(_, value) => value && setPeriod(value)}
          >
            {periods.map((item) => <PeriodButton key={item} value={item} aria-label={item}>{item}</PeriodButton>)}
          </PeriodGroup>
        </RevenueHeader>
        <ChartArea aria-label={`${period} revenue chart`}>
          <GridLines />
          <Bars>
            {barHeights.map((height, index) => <Bar key={months[index]} $height={height} />)}
          </Bars>
        </ChartArea>
        <ChartFooter>{months.map((month) => <span key={month}>{month}</span>)}</ChartFooter>
      </RevenueContent>
    </RevenueCard>
  )
}
