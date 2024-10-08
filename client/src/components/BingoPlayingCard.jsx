import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const BingoPlayingCard = ({ content, isSelected, onClick, sx }) => {
  const theme = useTheme();

  return (
    <Card
      onClick={onClick}
      sx={{
        minWidth: 150,
        minHeight: 150,
        backgroundColor: isSelected
          ? theme.palette.primary.main
          : theme.palette.mode === 'dark'
          ? '#757575'  // Medium gray for dark mode
          : '#d3d3d3', // Lighter gray for light mode
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        ...sx,
      }}
    >
      <CardContent>
        <Typography variant="body1" align="center">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BingoPlayingCard;