import React from 'react';
import { useQuery } from '@apollo/client';
import { Box, Typography, Button } from '@mui/material';
import IceBreakerCard from '../components/IceBreakerCard';
import { useIcebreaker } from '../Context/IcebreakerContext';
import { useNavigate } from 'react-router-dom';
import { GET_RANDOM_WOULD_YOU_RATHERS, GET_RANDOM_ICEBREAKERS, GET_JOKES, GET_FACTS, GET_QUOTES, GET_LAWS } from '../utils/queries';

const Results = () => {
    const { selection, addFavorite, removeFavorite, favorites } = useIcebreaker();

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

    
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/'); // Navigate to the homepage
    };

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>Error: {error.message}</Typography>;

    const handleButtonClick = () => {
        console.log("Button clicked!"); // Replace with your desired action
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

 
            <Button 
                variant="contained" 
                onClick={handleHomeClick} 
                sx={{ margin: 2, 
                    backgroundColor: 'primary.main', color: '#fff' }} 
            >
                Return to homepage
            </Button>

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
                            onFavoriteClick={() => {
                                if (isFavorited) {
                                    removeFavorite(result.content || uniqueId);  // Remove favorite by content or uniqueId
                                } else {
                                    addFavorite({ ...result, favoriteId: uniqueId, title: selection?.title });  // Add favorite
                                }
                            }}
                        />
                    );
                })}
            </Box>
            <Button 
                variant="contained" 
                onClick={handleButtonClick} 
                sx={{ margin: 2, 
                    backgroundColor: 'primary.main', color: '#fff' }} 
            >
                Search for more!
            </Button>
        </Box>
    );
};

export default Results;