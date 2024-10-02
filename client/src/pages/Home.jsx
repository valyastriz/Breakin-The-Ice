// import { useQuery } from '@apollo/client';
import { Box,Typography,Input } from '@mui/material'
import IceBreakerOptions from '../components/IceBreakerOptions';
// import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];

  return (
    <Box sx={{display:'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100%'}}>
        <Typography variant='h3' sx={{ textAlign: 'center', width: '80%' }}>Breakin’ The Ice: Unfreeze Any Conversation with a Smile!</Typography>
        <IceBreakerOptions />
    </Box>
  );
};

export default Home;
