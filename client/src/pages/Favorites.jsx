import { Box, Typography } from '@mui/material';
import IceBreakerCard from '../components/IceBreakerCard';
import { useIcebreaker } from '../Context/IcebreakerContext';
import { useQuery } from '@apollo/client';  
import { GET_FAVORITES } from '../utils/queries'; 
import AuthService from '../utils/auth';

const Favorites = () => {
    const { removeFavorite } = useIcebreaker();
    const token = AuthService.getToken();
    const profile = AuthService.getProfile();  // Get the user profile from the token
    const userId = profile?.data?._id || null;  // Correctly extract userId from profile.data
    console.log('userId:', userId); 

    const { data, loading, error } = useQuery(GET_FAVORITES, {
      variables: { userId }
    });

    // Debugging: Check the token and profile
    console.log('Token:', token);
    console.log('Profile:', profile);
    console.log('userId:', userId); 

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error: {error.message}</Typography>;

    const favorites = data?.favorites || [];

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
            {favorites.map((favorite) => (
                <IceBreakerCard
                  key={favorite.favoriteId}
                  title={favorite.title}
                  description={favorite.description || favorite.thirdPartyContent}
                  showHeart={true}
                  isFavorited={true}
                  onFavoriteClick={() => removeFavorite(favorite.favoriteId)}
                />
            ))}
          </Box>
        </Box>
    );
};

export default Favorites;