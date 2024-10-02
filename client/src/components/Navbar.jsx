// import { useQuery } from '@apollo/client';
import { Collapse, Box, Button, Typography } from '@mui/material'
import {useEffect, useState} from 'react';
import { useTheme } from '@mui/material/styles';

// import { QUERY_PROFILES } from '../utils/queries';

const Navbar = ({navOpen}) => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];
const theme = useTheme();
const [width, setWidth] = useState(0);

useEffect(() => {setWidth(width > 0 ? 0 : 200)},[navOpen]);

  return (
    <Box sx={{
      width:width, borderRight: width > 0 ? '3px solid lightgrey' : '',
      transition: 'width ease-in-out 0.3s',
      padding: width !== 0 ?'10px' : '',
      backgroundColor:theme.background.accent,
      }}>
        {width !== 0 &&
          <Box>
            <Button sx={{width:'100%'}}>hey</Button>
          </Box>
        }
      
    </Box>
  );
};

export default Navbar;
