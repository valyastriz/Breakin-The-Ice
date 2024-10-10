import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        height: '30vh', // Adjust height as needed
        backgroundImage: 'url(/ice.jpg)', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay for better text contrast
          zIndex: 1,
        }}
      />
      <Box sx={{ zIndex: 2 }}>
        <Typography variant="h2" sx={{ marginBottom: 2 }}>
          Ice Breaker Station
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: 4 }}>
          Discover ways to get to know and connect with others!
        </Typography>

      </Box>
    </Box>
  );
};

export default HeroSection;