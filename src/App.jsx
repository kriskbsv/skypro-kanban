import { ThemeProvider } from 'styled-components'
import './App.css'
import AppRoutes from './components/AppRoutes/AppRoutes'
import { theme } from './theme'
import { GlobalStyle } from './App.styled'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
