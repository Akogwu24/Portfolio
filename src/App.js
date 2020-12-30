import React from 'react'
import Portfolio from './components/Portfolio';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Portfolio />
    </ChakraProvider>
      
  );
}

export default App;
