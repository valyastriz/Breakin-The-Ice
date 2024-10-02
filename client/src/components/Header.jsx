import { Box, Typography } from '@mui/material';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useTheme } from '@mui/material/styles';

const Header = ({ setNavOpen, navOpen }) => {
    const theme = useTheme();
    const onClick = () => setNavOpen(!navOpen);

    return (
        <Box sx={{
            display: 'flex',
            flexGrow: 1,
            minHeight: '60px',
            backgroundColor: theme.background.accent, // Assuming the correct path is used.
            alignItems: 'center',
            justifyContent: 'space-between', // This will push the drag handle and the title to opposite ends
            px: 2 // Adding padding on both sides for better alignment
        }}>
            <DragHandleIcon sx={{ height: '40px', width: '40px', cursor: 'pointer' }} onClick={onClick} />
            <Typography variant='h3' sx={{ flexGrow: 1, textAlign: 'center' }}>Breakin' The Ice</Typography>
            <Box sx={{ width: 40, height: 40 }}> {/* Placeholder to balance the drag handle */}</Box>
        </Box>
    );
};

export default Header;