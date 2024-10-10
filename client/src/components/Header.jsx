import { Box, Typography, Switch } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import Navbar from './Navbar'; // Import the Navbar
import { useCollapse } from '../Context/CollapseContext'; // Use collapse context

const Header = ({ toggleTheme }) => {
  const theme = useTheme();
  const { navOpen, toggleNav } = useCollapse();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: theme.background.highlight,
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
      }}>
        {/* Dark Mode Toggle on the left */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ marginRight: 1 }}>
            {theme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </Typography>
          <Switch
            checked={theme.palette.mode === 'dark'}
            onChange={toggleTheme}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </Box>

        {/* Navbar tabs on larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          <Navbar />
        </Box>

        {/* Collapse button on smaller screens */}
        <DragHandleIcon
          sx={{ display: { xs: 'block', md: 'none' }, cursor: 'pointer' }}
          onClick={toggleNav}
        />
      </Box>

      {/* Collapsed menu on small screens */}
      {navOpen && (
        <Box sx={{ display: { xs: 'block', md: 'none' }, width: '100%' }}>
          <Navbar isVertical /> {/* Pass isVertical prop to show it vertically */}
        </Box>
      )}
    </Box>
  );
};

export default Header;