// import { useQuery } from '@apollo/client';
import React from 'react';
import { Box, Typography } from '@mui/material'

// import { QUERY_PROFILES } from '../utils/queries';

const Footer = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];

  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        textAlign: 'center',
        padding: 2,
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}
    >
      <Typography variant='body1'>
        Let's break the ice and chill with some cool questions!
      </Typography>
    </Box>
  );
};

export default Footer;
