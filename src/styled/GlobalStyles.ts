import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
    margin: 0;
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
    color: ${({ theme }) => theme.palette.text.primary};
    background: ${({ theme }) => theme.dashboard.appBackground};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`

export default GlobalStyles