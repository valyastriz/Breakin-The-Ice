import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Results from './pages/Results';
import Contact from './pages/Contact';
import About from './pages/About';
import BuyUsACoffee from './pages/BuyUsACoffee';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import createAppTheme from './Context/theme';
import  { PageProvider } from './Context/RefreshContext';
import { BingoProvider } from './Context/BingoContext';
import Bingo from './pages/Bingo';
import Success from './pages/Success';

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [themeMode, setThemeMode] = useState('dark');

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      console.log('Previous mode:', prevMode); // Check the previous mode
      return prevMode === 'dark' ? 'light' : 'dark';
    });
  };
  const currentTheme = createAppTheme(themeMode); 


  return (
    <PageProvider >
   <BingoProvider> 
   
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
        <Router>
        <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
          <Header setNavOpen={setNavOpen} navOpen={navOpen} toggleTheme={toggleTheme}/>
          <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row' }}>
            <Navbar navOpen={navOpen} />
            <Box sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home setThemeMode={setThemeMode}/>} />
                <Route path="/results" element={<Results setThemeMode={setThemeMode} />} />
                <Route path="/contact" element={<Contact setThemeMode={setThemeMode}/>} />
                <Route path="/about" element={<About setThemeMode={setThemeMode}/>} />
                <Route path="/buyusacoffee" element={<BuyUsACoffee setThemeMode={setThemeMode}/>} />
                <Route path="/favorites" element={<Favorites setThemeMode={setThemeMode}/>} />
                <Route path="/login" element={<Login setThemeMode={setThemeMode}/>} />
                <Route path="/signup" element={<SignUp setThemeMode={setThemeMode}/>} />
                <Route path="/bingo" element={<Bingo setThemeMode={setThemeMode}/>} />
                <Route path="/sucess" element={<Success setThemeMode={setThemeMode}/>} />
              </Routes>
            </Box>
          </Box>
          <Footer />
        </Box>
        </Router>
    </ThemeProvider>
    </BingoProvider> 
    </PageProvider>
  );
}

export default App;