// import { useQuery } from '@apollo/client';
import { Box,Typography, Input } from '@mui/material'
// import { QUERY_PROFILES } from '../utils/queries';

const Login = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];

  return (
    <Box sx={{display:'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%'}}>
        <Typography variant='h3' sx={{ textAlign: 'center', width: '80%' }}>Login</Typography>
    </Box>
  );
};

export default Login;
