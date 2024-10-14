import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
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
import { PageProvider } from './Context/RefreshContext';
import { BingoProvider } from './Context/BingoContext';
import Bingo from './pages/Bingo';
import Success from './pages/Success';
import { CollapseProvider } from './Context/CollapseContext';  // Add CollapseProvider
import { initializeApp } from "firebase/app";

function App() {
  const [themeMode, setThemeMode] = useState('dark');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };

  const currentTheme = createAppTheme(themeMode);

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  return (
    <PageProvider>
      <BingoProvider>
        <CollapseProvider> {/* Add CollapseProvider here */}
          <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <Router>
              <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
                <HeroSection />
                <Header toggleTheme={toggleTheme} />
                <Box sx={{ flexGrow: 1 }}>
                  <Routes>
                    <Route path="/" element={<Home setThemeMode={setThemeMode} />} />
                    <Route path="/results" element={<Results setThemeMode={setThemeMode} />} />
                    <Route path="/contact" element={<Contact setThemeMode={setThemeMode} />} />
                    <Route path="/about" element={<About setThemeMode={setThemeMode} />} />
                    <Route path="/buyusacoffee" element={<BuyUsACoffee setThemeMode={setThemeMode} />} />
                    <Route path="/favorites" element={<Favorites setThemeMode={setThemeMode} />} />
                    <Route path="/login" element={<Login setThemeMode={setThemeMode} />} />
                    <Route path="/signup" element={<SignUp setThemeMode={setThemeMode} />} />
                    <Route path="/bingo" element={<Bingo setThemeMode={setThemeMode} />} />
                    <Route path="/success" element={<Success setThemeMode={setThemeMode} />} />
                  </Routes>
                </Box>
                <Footer />
              </Box>
            </Router>
          </ThemeProvider>
        </CollapseProvider>  {/* End CollapseProvider here */}
      </BingoProvider>
    </PageProvider>
  );
}

export default App;