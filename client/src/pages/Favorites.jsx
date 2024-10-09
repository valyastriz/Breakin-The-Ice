import { Box, Typography } from '@mui/material';
import IceBreakerCard from '../components/IceBreakerCard';
import { useIcebreaker } from '../Context/IcebreakerContext';
import { useQuery, useMutation } from '@apollo/client';  
import { GET_FAVORITES } from '../utils/queries'; 
import { REMOVE_FAVORITE } from '../utils/mutations'; // Import the remove mutation
import AuthService from '../utils/auth';
import { useTheme } from '@mui/material/styles';

const Favorites = () => {
    const theme = useTheme(); // Access the theme
    const { removeFavorite } = useIcebreaker();
    const token = AuthService.getToken();
    const profile = AuthService.getProfile();  
    const userId = profile?.data?._id || null;  

    const { data, loading, error } = useQuery(GET_FAVORITES, {
      variables: { userId }
    });

    const [removeFavoriteMutation, setFavorites] = useMutation(REMOVE_FAVORITE, {
        refetchQueries: [
            { query: GET_FAVORITES, variables: { userId } } // Refetch favorites after removing
        ]
    });

    // Debugging: Check the token and profile
    console.log('Token:', token);
    console.log('Profile:', profile);
    console.log('userId:', userId);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error: {error.message}</Typography>;

    const favorites = data?.favorites || [];

    const handleRemoveFavorite = (favoriteId) => {
        removeFavoriteMutation({
            variables: { favoriteId }
        })
        .then(response => {
            console.log('Favorite removed:', response.data);
            removeFavorite(favoriteId);  // Update local state after removing
        // This will avoid the need for refetching every time
        setFavorites(prevFavorites => prevFavorites.filter(fav => fav.favoriteId !== favoriteId));
        })
        .catch(error => {
            console.error('Error removing favorite:', error);
        });
    };

    return (
        <Box sx={{ 
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          minHeight: '100vh',
          width: '100%',
          backgroundColor: theme.background.default
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
                  onFavoriteClick={() => handleRemoveFavorite(favorite.favoriteId)} // Handle remove click
                />
            ))}
          </Box>
        </Box>
    );
};

export default Favorites;