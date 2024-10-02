// import { useQuery } from '@apollo/client';
import { Collapse, Box, Button, Typography } from '@mui/material'
import {useEffect, useState} from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; 

// import { QUERY_PROFILES } from '../utils/queries';



const Navbar = ({ navOpen }) => {
    const theme = useTheme();
    const [width, setWidth] = useState('20%');

    useEffect(() => {
        setWidth(navOpen ? '0%' : '20%');
    }, [navOpen]);

    return (
        <Box sx={{
            width: width,
            borderRight: width !== '0%' ? '3px solid lightgrey' : '',
            transition: 'width ease-in-out 0.3s',
            padding: width !== '0%' ? '10px' : '',
            backgroundColor: theme.background.accent,
        }}>
            {width !== '0%' && (
                <Box>
                    <Button component={RouterLink} to="/" sx={{ width: '100%', padding: '12px 0' }}>Home</Button>
                    <Button component={RouterLink} to="/favorites" sx={{ width: '100%', padding: '12px 0' }}>Favorites</Button>
                    <Button component={RouterLink} to="/about" sx={{ width: '100%', padding: '12px 0' }}>About</Button>
                    <Button component={RouterLink} to="/contact" sx={{ width: '100%', padding: '12px 0' }}>Contact</Button>
                    <Button component={RouterLink} to="/buyusacoffee" sx={{ width: '100%', padding: '12px 0' }}>Buy us a coffee!</Button>
                </Box>
            )}
        </Box>
    );
};

export default Navbar;