import React from 'react';
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
import { Box } from '@mui/material';
import { useState } from 'react';

function App() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Router>
    <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column' }}>
      <Header setNavOpen={setNavOpen} navOpen={navOpen} />
      <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'row' }}>
        <Navbar navOpen={navOpen} />
        <Box sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/buyusacoffee" element={<BuyUsACoffee />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Box>
      </Box>
      <Footer />
    </Box>
    </Router>
  );
}

export default App;