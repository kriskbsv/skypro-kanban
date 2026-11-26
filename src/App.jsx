import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopNewCard from './components/popups/PopNewCard/PopNewCard'
import PopBrowse from './components/popups/PopBrowse/PopBrowse'
import PopExit from './components/popups/PopExit/PopExit'
import { cards } from '../data'
import { theme } from './theme'
import { GlobalStyle, Wrapper } from './App.styled'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <PopExit />
        <PopNewCard />
        <PopBrowse />

        <Header />
        <Main cards={cards} isLoading={isLoading} />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
