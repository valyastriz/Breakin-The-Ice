import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Login = () => {
  const theme = useTheme(); // Use the theme you defined

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: theme.palette.background.default,  // Use background from theme
      }}
    >
      <Box
        sx={{
          maxWidth: 400,
          width: '100%',
          padding: 4,
          backgroundColor: theme.palette.background.paper,  // Use paper background from theme
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
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
            mb: 3,
            ':hover': {
              backgroundColor: theme.palette.primary.hover,  // Use hover from theme
            },
          }}
        >
          Sign In
        </Button>

        {/* Sign Up Link */}
        <Typography
          variant="body2"
          sx={{ textAlign: 'center', color: theme.palette.text.secondary }}
        >
          Don't have an account?{' '}
          <Link href="#" sx={{ color: theme.palette.primary.main, textDecoration: 'none' }}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;