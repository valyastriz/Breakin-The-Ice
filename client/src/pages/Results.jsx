import { useQuery } from '@apollo/client';
import { Box, Typography } from '@mui/material'
import IceBreakerResults from '../components/IceBreakerResults';
import { useIcebreaker } from '../Context/IcebreakerContext';
import { GET_RANDOM_WOULD_YOU_RATHERS, GET_RANDOM_ICEBREAKERS, GET_JOKES, GET_FACTS, GET_QUOTES } from '../utils/queries'; 
import IceBreakerCard from '../components/IceBreakerCard'; 

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
            {results.map((result, index) => (
                    <IceBreakerCard
                        key={result._id || index} // Use a unique id for each card, or index as a fallback
                        title={result.title}
                        description={result.content}
                        showHeart={true} // Show heart icon on results page
                        onClick={() => console.log('Card clicked!')}
                        onFavoriteClick={() => addFavorite(result)} // Handle the favorite click
                        isFavorited={favorites.some(fav => fav.id === result.id)} // Check if the item is already favorited
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Results;