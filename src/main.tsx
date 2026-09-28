import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import App from './components/App'

import GlobalStyles from './styled/GlobalStyles'
import { theme } from './styled/theme'
import { store } from './store'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element was not found')
}

createRoot(rootElement).render(
  <StrictMode>
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>
        <GlobalStyles />
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    </StyledThemeProvider>
  </StrictMode>,
)
