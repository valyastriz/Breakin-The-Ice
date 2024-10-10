// import { useQuery } from '@apollo/client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// import { QUERY_PROFILES } from '../utils/queries';

const Footer = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];
const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.background.highlight,
        color: 'white',
        textAlign: 'center',
        padding: 2,
        width: '100%',
        left: 0,
      }}
    >
      <Typography variant='body1' sx={{ color:theme.text.primary}}>
        Let's break the ice and chill with some cool questions!
      </Typography>
    </Box>
  );
};

export default Footer;
