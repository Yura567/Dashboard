import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import App from './App.jsx'
import { store } from './store/index.js'
import GlobalStyles from './styled/GlobalStyles.jsx'
import { dashboardTheme } from './styled/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={dashboardTheme}>
        <GlobalStyles />
        <BrowserRouter><App /></BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
