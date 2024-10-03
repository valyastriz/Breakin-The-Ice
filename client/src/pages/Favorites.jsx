import { Box, Typography } from '@mui/material';
import IceBreakerCard from '../components/IceBreakerCard';
import { useIcebreaker } from '../Context/IcebreakerContext';

const Favorites = () => {
    const { favorites, removeFavorite } = useIcebreaker();

    return (
        <Box sx={{ 
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          minHeight: '100vh',
          width: '100%'
         }}>
            <Typography variant='h3' sx={{ textAlign: 'center', width: '80%' }}>
                Favorites
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {favorites.map((favorite) => {
              console.log("Favorite in Favorites Page:", favorite);  // Check the favorite details
              
              return (
                <IceBreakerCard
                  key={favorite.uniqureId || favorite.favoriteId}  // Use the correct key for the favorites
                  title={favorite.title}
                  description={favorite.content || favorite.thirdPartyContent}
                  showHeart={true}
                  isFavorited={true}
                  onFavoriteClick={() => removeFavorite(favorite.uniqueId || favorite.favoriteId )}
                />
              );
            })}
          </Box>
        </Box>
    );
};

export default Favorites;