// import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useTheme } from '@mui/material/styles';

// import { QUERY_PROFILES } from '../utils/queries';

const Header = ({setNavOpen, navOpen}) => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];
    const theme = useTheme();
    const onClick = () => {
        setNavOpen(!navOpen);
    }
    
    return (
        <Box sx={{
            display: 'flex', 
            flexGrow: 1, 
            minHeight: '80px', 
            backgroundColor: theme.background.accent,
            alignItems: 'center',
            justifyContent: 'space-between'  // Adjusts content to each end
        }}>
            <DragHandleIcon sx={{ height: '40px', width: '40px', cursor: 'pointer', marginLeft: 1 }} onClick={onClick} />
            <Typography variant='h3' sx={{ flexGrow: 1, textAlign: 'center' }}>Breakin' The Ice</Typography>
            <Box sx={{ width: 40, height: 40 }}> {/* Invisible spacer to balance the drag handle */}</Box>
        </Box>
    );
};

export default Header;
