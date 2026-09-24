import { GlobalStyles as MuiGlobalStyles } from '@mui/material'
import { colors } from './theme.js'

export default function GlobalStyles() {
  return (
    <MuiGlobalStyles
      styles={{
        '*': { boxSizing: 'border-box' },
        'html, body, #root': { margin: 0, minHeight: '100%', width: '100%' },
        body: {
          minHeight: '100vh',
          overflowX: 'hidden',
          background: `linear-gradient(135deg, #edf2ff 0%, ${colors.background} 100%)`,
        },
        a: { color: 'inherit', textDecoration: 'none' },
        button: { font: 'inherit' },
      }}
    />
  )
}
