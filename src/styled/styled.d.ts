import 'styled-components'
import type { Theme as MuiTheme } from '@mui/material/styles'

import type { designTokens } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends MuiTheme {}
}

declare module '@mui/material/styles' {
  interface Theme {
    dashboard: typeof designTokens
  }

  interface ThemeOptions {
    dashboard?: typeof designTokens
  }
}