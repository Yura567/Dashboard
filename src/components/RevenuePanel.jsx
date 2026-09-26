import { useState } from 'react'

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const bars = [28, 42, 35, 56, 65, 52, 76, 68, 88, 74, 92, 82]
const periods = ['Month', 'Quarter', 'Year']

export default function RevenuePanel() {
  const [periodIndex, setPeriodIndex] = useState(0)

  return (
    <article className="panel">
      <div className="panel-header">
        <div>
          <p className="eyebrow muted">Performance</p>
          <h3>Revenue overview</h3>
        </div>
        <div className="segmented-control" aria-label="Revenue period">
          {periods.map((period, index) => (
            <button
              key={period}
              type="button"
              className={`segment ${index === periodIndex ? 'active' : ''}`}
              aria-pressed={index === periodIndex}
              onClick={() => setPeriodIndex(index)}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-area">
        <div className="grid-lines" />
        <div className="bars">
          {bars.map((height, index) => <span key={months[index]} style={{ '--h': `${height}%` }} />)}
        </div>
      </div>
      <div className="chart-footer">
        {months.map((month) => <span key={month}>{month}</span>)}
      </div>
    </article>
  )
}
