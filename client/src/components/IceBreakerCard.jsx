import { Card, CardContent, Typography, Divider, CardActionArea, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const IceBreakerCard = ({ title, description, showHeart, onClick, onFavoriteClick, isFavorited }) => (
    <Card sx={{ minWidth: 275, maxWidth: 300, margin: 2 }}>
        <CardActionArea onClick={onClick}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Divider sx={{ 
                    my: 1,
                    borderBottomWidth: 1,
                    width: '100%',
                    mx: 'auto',
                    borderColor: 'white'
                }} />
                <Typography variant="body2">
                    {description}
                </Typography>

                {/* Conditionally render the heart icon */}
                {showHeart && (
                    <IconButton
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering the card click when clicking the heart
                            onFavoriteClick();
                        }}
                        aria-label="add to favorites"
                    >
                        <FavoriteIcon color={isFavorited ? 'error' : 'default'} />
                    </IconButton>
                )}
            </CardContent>
        </CardActionArea>
    </Card>
);

export default IceBreakerCard;