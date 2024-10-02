import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Box } from '@mui/material'
import {useState} from 'react';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Box sx={{display:'flex', flexGrow:1, flexDirection:'column'}}>
        <Header setNavOpen={setNavOpen} navOpen={navOpen}/>
        <Box sx={{display:'flex', flexGrow:1, flexDirection:'row'}}>
          <Navbar navOpen={navOpen}/>
          <Home />
        </Box>
        <Footer />
      </Box>
    </ApolloProvider>
  );
}

export default App;
