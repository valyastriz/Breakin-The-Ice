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
        <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
          Thank you for buying us a coffee. Your payment was processed successfully. Please Enjoy the song below as a special thank you!
        </Typography>
        {/* Embed video */}
        <Box sx={{ mb: 4, width: '100%', maxWidth: '600px' }}>
          <video
            controls
            style={{
              width: '100%', // Make the video responsive
              maxHeight: '60vh', // Restrict the height to a maximum of 60% of the viewport height
              objectFit: 'contain', // Ensure the video scales and fits within the container without being cut off
            }}
          >
            <source src="/thanks_for_the_coffee.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
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
      </Box>
    </Box>
  );
};

export default Success;