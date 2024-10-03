import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import IceBreakerCard from '../components/IceBreakerCard';
import { useIcebreaker } from '../Context/IcebreakerContext';
import { GET_RANDOM_WOULD_YOU_RATHERS, GET_RANDOM_ICEBREAKERS, GET_JOKES, GET_FACTS, GET_QUOTES } from '../utils/queries';

const Results = () => {
    const { selection, addFavorite, removeFavorite, favorites } = useIcebreaker();

    // Map titles to GraphQL queries
    const queryMap = {
        "Icebreaker Question": GET_RANDOM_ICEBREAKERS,
        "Joke": GET_JOKES,
        "This or That": GET_RANDOM_WOULD_YOU_RATHERS,
        "Useless Facts": GET_FACTS,
        "Random Quotes": GET_QUOTES
    };

    const { data, loading, error } = useQuery(queryMap[selection?.title], {
        skip: !selection?.title,
        variables: { limit: 10 },
    });

    const results = data ? data[Object.keys(data)[0]] : [];

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error: {error.message}</Typography>;

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
                    const itemId = result._id || result.someOtherId; // Use the actual ID of the item
                    const isFavorited = favorites.some(fav => 
                        fav.favoriteId === itemId || fav.thirdPartyContent === result.content
                    );

                    return (
                        <IceBreakerCard
                            key={itemId || index} // Use unique key for the card
                            title={selection?.title}
                            description={result.content}
                            showHeart={true}
                            isFavorited={isFavorited} // Highlight heart if favorited
                            onFavoriteClick={() => {
                                if (isFavorited) {
                                    removeFavorite(result.content || itemId);  // Remove favorite by content or itemId
                                } else {
                                    addFavorite({ ...result, favoriteId: itemId, title: selection?.title });  // Add favorite
                                }
                            }}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default Results;