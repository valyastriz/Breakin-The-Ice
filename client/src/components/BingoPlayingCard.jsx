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
        backgroundColor: isSelected
          ? theme.palette.primary.main
          : theme.palette.mode === 'dark'
          ? '#757575'  // Medium gray for dark mode
          : '#d3d3d3', // Lighter gray for light mode
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        aspectRatio: '1 / 1',  // Ensure the card is always square
        ...sx,
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px !important',
          height: '100%',
          width: '100%',
          textAlign: 'center', // Ensure text is centered horizontally
        }}
      >
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: {
              xs: '0.6rem',  // Smaller font size for extra-small screens
              sm: '1rem',      // Default for small screens
              md: '1.25rem',   // Medium size for larger screens
              lg: '1.5rem',    // Larger for extra-large screens
            },
            lineHeight: 1.1,
            textAlign: 'center',  // Center the text
            width: '100%',  // Ensure text takes up the full card space
            height: '100%',
            display: 'flex',
            alignItems: 'center',  // Vertically center text
            justifyContent: 'center',  // Horizontally center text
            wordWrap: 'break-word',  // Break long words
          }}
        >
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BingoPlayingCard;