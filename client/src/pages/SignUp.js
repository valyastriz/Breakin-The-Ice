import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 

const SignUp = () => {
  const theme = useTheme(); // Use the dark theme
  const navigate = useNavigate(); // Create navigate function

  const handleLogin = () => {
    navigate('/login'); // Redirect to the login page
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: theme.palette.background.default, // Use the theme background
      }}
    >
      <Box
        sx={{
          maxWidth: 500,
          width: '100%',
          padding: 4,
          backgroundColor: theme.palette.background.paper, // Use theme paper background
          borderRadius: 2,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}
        >
          Sign up
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: theme.palette.text.secondary }}>
          Enter credentials to continue
        </Typography>

        {/* Form */}
        <Typography variant="body2" sx={{ mb: 2, color: theme.palette.text.secondary }}>
          Sign up with Email address
        </Typography>

        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ mb: 2 }}
          />
        </Box>

        <TextField
          label="Email Address / Username"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ mb: 2 }}
        />

        {/* Sign Up Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            mb: 3,
            ':hover': {
              backgroundColor: theme.palette.primary.hover, // Use hover from the theme
            },
          }}
        >
          Sign Up
        </Button>

        {/* Sign In Link */}
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', color: theme.palette.text.secondary }}
        >
          Already have an account?{' '}
          <Link
            onClick={handleLogin} // Navigate to login page
            sx={{ color: theme.palette.primary.main, cursor: 'pointer', textDecoration: 'none' }}
          >
            Sign In
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;