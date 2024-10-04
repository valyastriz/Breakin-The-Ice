import { useQuery, useMutation } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import IceBreakerCard from '../components/IceBreakerCard';
import { useIcebreaker } from '../Context/IcebreakerContext';
import { GET_RANDOM_WOULD_YOU_RATHERS, GET_RANDOM_ICEBREAKERS, GET_JOKES, GET_FACTS, GET_QUOTES, GET_LAWS } from '../utils/queries';
import { ADD_FAVORITE } from '../utils/mutations';  // Import the mutation

const Results = () => {
    const { selection, removeFavorite, favorites, addFavorite } = useIcebreaker();
    const [addFavoriteMutation] = useMutation(ADD_FAVORITE);  // Initialize the mutation

    // Map titles to GraphQL queries
    const queryMap = {
        "Icebreaker Question": GET_RANDOM_ICEBREAKERS,
        "Joke": GET_JOKES,
        "This or That": GET_RANDOM_WOULD_YOU_RATHERS,
        "Useless Facts": GET_FACTS,
        "Random Quotes": GET_QUOTES,
        "Dumb Laws": GET_LAWS,
    };

    const { data, loading, error } = useQuery(queryMap[selection?.title], {
        skip: !selection?.title,
        variables: { limit: 10 },
    });

    const results = data ? data[Object.keys(data)[0]] : [];

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error: {error.message}</Typography>;

    const handleFavoriteClick = (result, isFavorited) => {
        const uniqueId = result._id || result.someOtherId;

        if (isFavorited) {
            removeFavorite(result.content || uniqueId);  // Remove from local context
            // Add remove favorite mutation if you have one
        } else {
            addFavoriteMutation({
                variables: {
                    favoriteId: uniqueId,
                    thirdPartyContent: result.content,
                    title: selection?.title,
                    description: result.content
                },
            })
            .then(response => {
                console.log('Favorite added:', response.data);
                // Optionally, update the local state as well if needed
                addFavorite({ favoriteId: uniqueId, thirdPartyContent: result.content, title: selection?.title });
            })
            .catch(error => {
                console.error('Error adding favorite:', error);
            });
        }
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
            width: '100%'
        }}>
            <Typography variant='h3' sx={{ textAlign: 'center', width: '80%' }}>
                {selection ? `${selection.title}` : "No selection made"}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {results.map((result, index) => {
                    const uniqueId = result._id || result.someOtherId || `custom-id-${index}`;  // Ensure unique id for each item
                    const isFavorited = favorites.some(fav => fav.favoriteId === uniqueId || fav.thirdPartyContent === result.content);

                    return (
                        <IceBreakerCard
                            key={uniqueId} // Use unique id as key
                            title={selection?.title}
                            description={result.content}
                            showHeart={true}
                            isFavorited={isFavorited} // Toggle heart based on whether it's favorited
                            onFavoriteClick={() => handleFavoriteClick(result, isFavorited)}  // Call handleFavoriteClick
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default Results;