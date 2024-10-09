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
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
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
  );
};

export default Success;