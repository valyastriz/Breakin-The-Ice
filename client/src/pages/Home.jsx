import { Box, Typography } from '@mui/material';
import IceBreakerOptions from '../components/IceBreakerOptions';
import { useIcebreaker } from '../Context/IcebreakerContext';
import { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

const Home = () => {
  const { selection, setSelection } = useIcebreaker();

  const theme = useTheme();


  useEffect(() => {
    setSelection({ title: 'Default' });  // Set a default or initial selection
  }, [setSelection]);
  
  const handleSelect = (type) => {
    console.log("Selected type:", type);
    setSelection({ title: type });  // Update the context with the new selection
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '100vh', width: '100%', overflow: 'auto', position: 'relative', backgroundColor: theme.background.default}}>
        <Typography variant='h3' sx={{ textAlign: 'center', width: '80%', marginBottom: 4}}>Unfreeze Any Conversation with a Smile!</Typography>
        <Typography variant='h5' sx={{ textAlign: 'center', width: '80%', marginBottom: 4}}>Select the type of icebreaker you'd like to generate.</Typography>
        <IceBreakerOptions onSelect={handleSelect} />
    </Box>
  );
};

export default Home;