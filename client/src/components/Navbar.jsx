import { Collapse, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom'; 
import AuthService from '../utils/auth';  // Import your AuthService to check login status

const Navbar = ({ navOpen }) => {
    const theme = useTheme();
    const [width, setWidth] = useState('20%');
    const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login status

    useEffect(() => {
        setWidth(navOpen ? '0%' : '20%');

        // Check if the user is logged in
        const loggedIn = AuthService.loggedIn();  // Call the method to check login status
        setIsLoggedIn(loggedIn);
    }, [navOpen]);

    return (
        <Box sx={{
            width: width,
            minWidth: width,
            maxWidth: width,
            flexGrow: 1,
            borderRight: width !== '0%' ? '3px solid lightgrey' : '',
            transition: 'width ease-in-out 0.3s',
            padding: width !== '0%' ? '10px' : '',
            backgroundColor: theme.background.highlight,
        }}>
            {width !== '0%' && (
                <Box>
                    <Button component={RouterLink} to="/" sx={{ width: '100%', padding: '12px 0', color: (theme) => theme.palette.text.primary }}>Home</Button>
                    
                    {/* Conditionally render based on login status */}
                    {isLoggedIn ? (
                        <>
                            <Button component={RouterLink} to="/favorites" sx={{ width: '100%', padding: '12px 0', color: (theme) => theme.palette.text.primary }}>Favorites</Button>
                            <Button 
                                sx={{ width: '100%', padding: '12px 0', color: (theme) => theme.palette.text.primary }} 
                                onClick={() => {
                                    AuthService.logout();  // Call AuthService to log out
                                    window.location.assign('/');  // Redirect after logging out
                                }}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Button component={RouterLink} to="/login" sx={{ width: '100%', padding: '12px 0', color: (theme) => theme.palette.text.primary }}>Login</Button>
                    )}

                    <Button component={RouterLink} to="/about" sx={{ width: '100%', padding: '12px 0', color: (theme) => theme.palette.text.primary }}>About</Button>
                    <Button component={RouterLink} to="/contact" sx={{ width: '100%', padding: '12px 0', color: (theme) => theme.palette.text.primary }}>Contact</Button>
                    <Button component={RouterLink} to="/buyusacoffee" sx={{ width: '100%', padding: '12px 0', color: (theme) => theme.palette.text.primary }}>Buy us a coffee!</Button>
                </Box>
            )}
        </Box>
    );
};

export default Navbar;