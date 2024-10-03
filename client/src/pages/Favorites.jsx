import { Box, Typography } from '@mui/material';
import IceBreakerCard from '../components/IceBreakerCard';
import { useIcebreaker } from '../Context/IcebreakerContext';

const Favorites = () => {
    const { favorites, removeFavorite } = useIcebreaker();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Typography variant='h3' sx={{ textAlign: 'center', width: '80%' }}>
                Favorites
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {favorites.map((favorite) => (
                    <IceBreakerCard
                        key={favorite.id}
                        title={favorite.title}
                        description={favorite.description}
                        showHeart={true}
                        isFavorited={true}
                        onFavoriteClick={() => removeFavorite(favorite.id)}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Favorites;