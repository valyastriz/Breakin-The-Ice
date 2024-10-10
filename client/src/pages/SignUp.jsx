import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'; 
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'; // Import your signup mutation
import AuthService from '../utils/auth'; // Import AuthService for handling login

const SignUp = () => {
  const [username, setUsername] = useState('');  // State for username
  const [email, setEmail] = useState('');  // State for email
  const [password, setPassword] = useState('');  // State for password
  const theme = useTheme();
  const navigate = useNavigate();

  // Signup mutation hook
  const [addUser, { error }] = useMutation(ADD_USER);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { data } = await addUser({
        variables: { username, email, password }
      });
  
      // Store the token using the AuthService
      AuthService.login(data.addUser.token);
  
      // Redirect to the homepage or dashboard after successful signup
      navigate('/dashboard');
    } catch (e) {
      console.error('Signup error:', e); // Log the error for debugging
      if (e.graphQLErrors) {
        e.graphQLErrors.forEach(err => {
          console.error('GraphQL error:', err.message);
        });
      } else if (e.networkError) {
        console.error('Network error:', e.networkError.message);
      } else {
        console.error('Unknown error:', e.message);
      }
    }
  };

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
        minHeight: '80vh',
        width: '100%',
        overflow: 'auto',
        backgroundColor: theme.background.default,
        padding: '5px',
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}  // Form submission handler
        sx={{
          maxWidth: 500,
          width: '100%',
          padding: 4,
          backgroundColor: theme.background.paper,
          borderRadius: 2,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Heading */}
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold', color: theme.text.primary }}
        >
          Sign up
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', mb: 4, color: theme.text.secondary }}>
          Enter credentials to continue
        </Typography>

        {/* Form */}
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}  // Bind value to state
          onChange={(e) => setUsername(e.target.value)}  // Update state on change
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email Address"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}  // Bind value to state
          onChange={(e) => setEmail(e.target.value)}  // Update state on change
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}  // Bind value to state
          onChange={(e) => setPassword(e.target.value)}  // Update state on change
          sx={{ mb: 2 }}
        />

        {/* Sign Up Button */}
        <Button
          type="submit"  // Set type to submit to trigger form submission
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: theme.background.accent,
            color: theme.text.primary,
            mb: 3,
            ':hover': {
              backgroundColor: theme.background.primary,  // Use hover from theme
            },
          }}
        >
          Sign Up
        </Button>

        {/* Display signup error */}
        {error && <Typography color="error" align="center">Signup failed. Please try again.</Typography>}

        {/* Sign In Link */}
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', color: theme.text.secondary }}
        >
          Already have an account?{' '}
          <Link
            onClick={handleLogin}  // Navigate to login page
            sx={{ color: theme.background.primary, cursor: 'pointer', textDecoration: 'none' }}
          >
            Sign In
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUp;