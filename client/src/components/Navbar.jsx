import { Tabs, Tab, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom'; // Import useLocation
import { useTheme } from '@mui/material/styles';
import AuthService from '../utils/auth';  // Import your AuthService to check login status

const Navbar = ({ isVertical = false }) => {
  const theme = useTheme();
  const location = useLocation(); // Get current location

  // Check if the user is logged in
  const isLoggedIn = AuthService.loggedIn();  // Call the method to check login status

  // Define the tab routes
  const tabs = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Buy Us A Coffee', path: '/buyusacoffee' },
    { label: isLoggedIn ? 'Favorites' : 'Login', path: isLoggedIn ? '/favorites' : '/login' }, // Conditional tab
  ];

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: isVertical ? 'column' : 'row',
      alignItems: isVertical ? 'flex-start' : 'center',
      justifyContent: isVertical ? 'flex-start' : 'flex-end',
      width: '100%',
    }}>
      <Tabs
        orientation={isVertical ? 'vertical' : 'horizontal'}
        textColor="secondary"
        indicatorColor="secondary"
        sx={{
          '& .MuiTabs-flexContainer': {
            flexDirection: isVertical ? 'column' : 'row',
            alignItems: isVertical ? 'center' : 'center',  // Ensure text is centered in vertical mode
          },
          width: isVertical ? '100%' : 'auto',
        }}
      >
        {tabs.map((tab) => (
          <Tab
            key={tab.path}
            label={tab.label}
            component={RouterLink}
            to={tab.path}
            sx={{
              fontWeight: location.pathname === tab.path ? 'bold' : 'normal', // Bold the active tab
              textAlign: 'center', // Center text
              width: isVertical ? '100%' : 'auto', // Full width in vertical mode
              minWidth: '100px', // Ensure the tabs are wide enough
              padding: isVertical ? '12px' : '0 16px', // Adjust padding for vertical tabs
              justifyContent: 'center', // Center content horizontally
              '&.Mui-selected': {
                color: theme.palette.primary.main, // Optional: highlight the selected tab with a different color
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default Navbar;