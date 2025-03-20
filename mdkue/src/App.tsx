import React from 'react'
import { ChakraProvider, Box, Container, extendTheme } from '@chakra-ui/react'
import Home from './components/Home'
import Header from './components/Header'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      }
    }
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="gray.50" minH="100vh">
        <Header />
        <Container maxW="container.xl" py={8}>
          <Home />
        </Container>
      </Box>
    </ChakraProvider>
  )
}

export default App 