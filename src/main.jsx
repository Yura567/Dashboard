import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import App from './components/App.jsx'
import GlobalStyles from './styled/GlobalStyles.js'
import { theme } from './styled/theme.js'
import { store } from './store/index.js'

createRoot(document.getElementById('root')).render(
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
