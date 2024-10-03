import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'; // Import your login mutation
import AuthService from '../utils/auth'; // Import the AuthService for handling login

const Login = () => {
  const [email, setEmail] = useState('');  // State for email
  const [password, setPassword] = useState('');  // State for password
  const navigate = useNavigate();
  const theme = useTheme();

  // Login mutation hook
  const [login, { error }] = useMutation(LOGIN_USER);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { email, password }
      });

      // Store the token using the AuthService
      AuthService.login(data.login.token);

      // Redirect to the homepage or dashboard after successful login
      navigate('/dashboard');

    } catch (e) {
      console.error('Login error:', e);
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); // Redirect to the signup page
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minheight: '100%',
        height: '100vh',
        width: '100%',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit} // Add form submission handler
        sx={{
          maxWidth: 500,
          width: '100%',
          padding: 4,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 2,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: theme.palette.primary.main }}
        >
          Hi, Welcome
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: theme.palette.text.secondary }}>
          Login to your account
        </Typography>

        {/* Form */}
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email} // Bind value to state
          onChange={(e) => setEmail(e.target.value)} // Update state on change
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password} // Bind value to state
          onChange={(e) => setPassword(e.target.value)} // Update state on change
          sx={{ mb: 2 }}
        />

        {/* "Keep me logged in" and "Forgot Password" */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
          }}
        >
          <FormControlLabel
            control={<Checkbox sx={{ color: theme.palette.primary.main }} />}
            label="Keep me logged in"
          />
          <Link href="#" sx={{ textDecoration: 'none', color: theme.palette.primary.main }}>
            Forgot Password?
          </Link>
        </Box>

        {/* Sign In Button */}
        <Button
          type="submit"  // Set type to submit to trigger form submission
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            mb: 3,
            ':hover': {
              backgroundColor: theme.palette.primary.hover,
            },
          }}
        >
          Sign In
        </Button>

        {/* Display login error */}
        {error && <Typography color="error" align="center">Login failed. Please check your credentials.</Typography>}

        {/* Sign Up Link */}
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', color: theme.palette.text.secondary }}
        >
          Don't have an account?{' '}
          <Link
            onClick={handleSignUp}
            sx={{ color: 'primary.main', cursor: 'pointer', textDecoration: 'none' }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;