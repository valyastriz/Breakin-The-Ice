import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Redirect to homepage
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensure it takes up the full viewport height
      }}
    >
      {/* Main content */}
      <Box
        sx={{
          flexGrow: 1,  // Allow this section to grow and take up available space
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center', // Center the content vertically and horizontally
          padding: '20px',
        }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          Payment Successful!
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Thank you for your purchase. Your payment was processed successfully.
        </Typography>
        <Button
          variant="contained"
          onClick={handleHomeClick}
          sx={{ backgroundColor: 'primary.main', color: '#fff' }}
        >
          Return to Homepage
        </Button>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          textAlign: 'center',
          padding: '10px',
          width: '100%',
        }}
      >
        <Typography variant="body2">© 2024 My Company</Typography>
      </Box>
    </Box>
  );
};

export default Success;