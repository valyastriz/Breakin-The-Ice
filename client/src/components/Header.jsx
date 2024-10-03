// import { useQuery } from '@apollo/client';
import { Box, Typography, Switch } from '@mui/material'
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useTheme } from '@mui/material/styles';

// import { QUERY_PROFILES } from '../utils/queries';

const Header = ({setNavOpen, navOpen, toggleTheme}) => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];
    const theme = useTheme();
    const onClick = () => {
        setNavOpen(!navOpen);
    }

    //   const toggleTheme = () => {
    // console.log(theme.palette.mode)
    //   theme.palette.mode = theme.palette.mode ? 'light' : 'dark';
    //   console.log(theme.palette.mode)

    // };    
    return (
        <Box sx={{
            display: 'flex',
            flexGrow: 1,
            minHeight: '80px',
            backgroundColor: theme.background.accent,
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <DragHandleIcon 
                sx={{ height: '40px', width: '40px', cursor: 'pointer', marginLeft: 1 }} 
                onClick={onClick} 
            />
            <Typography variant='h3' sx={{ flexGrow: 1, textAlign: 'center' }}>
                Breakin' The Ice
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginRight: 2 }}>
                <Typography variant="body1" sx={{ marginRight: 1 }}>
                    {theme.palette.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </Typography>
                <Switch
                    checked={theme.palette.mode === 'dark'}
                    onChange={toggleTheme}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
            </Box>
        </Box>
    );
};

export default Header;
