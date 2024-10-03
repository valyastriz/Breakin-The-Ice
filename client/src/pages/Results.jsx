import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material';
import IceBreakerCard from '../components/IceBreakerCard';
import { useIcebreaker } from '../Context/IcebreakerContext';
import { GET_RANDOM_WOULD_YOU_RATHERS, GET_RANDOM_ICEBREAKERS, GET_JOKES, GET_FACTS, GET_QUOTES } from '../utils/queries'; 
import { v4 as uuidv4 } from 'uuid'; // For generating unique ids

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
                    const uniqueId = result._id || uuidv4(); // Generate a unique ID if _id is not available
                    const isFavorited = favorites.some(fav => fav.uniqueId === uniqueId); // Check if this specific item is favorited
                    
                    return (
                        <IceBreakerCard
                            key={uniqueId} // Use unique id
                            title={selection?.title}
                            description={result.content}
                            showHeart={true}
                            isFavorited={isFavorited} // Highlight heart if favorited
                            // Add favorite icebreaker if not already added
                            onFavoriteClick={() => {
                                if (isFavorited) {
                                  removeFavorite(uniqueId);
                                } else {
                                  addFavorite({ 
                                    favoriteId: result._id,  // Pass database id (or null for third-party)
                                    thirdPartyContent: result.content,  // Content from third-party API (or null)
                                    title: selection?.title,  // Title of the icebreaker
                                    description: result.content  // Description/content of the icebreaker
                                  });
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