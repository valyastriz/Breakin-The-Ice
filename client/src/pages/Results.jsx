import { useQuery } from '@apollo/client';
import { Box,Typography, Input } from '@mui/material'
import IceBreakerResults from '../components/IceBreakerResults';
import { useIcebreaker} from '../Context/IcebreakerContext';
// import { GET_ICEBREAKER_QUESTIONS, GET_JOKES, GET_LAWS, GET_WOULD_YOU_RATHERS } from '../utils/queries';
import { GET_RANDOM_WOULD_YOU_RATHERS, GET_RANDOM_ICEBREAKERS } from '../utils/queries'; 

const Results = () => {
    const { selection, addFavorite, removeFavorite } = useIcebreaker();

        // Map titles to GraphQL queries
        const queryMap = {
            "Icebreaker Question": GET_RANDOM_ICEBREAKERS,
            // "Joke": GET_JOKES,
            "This or That": GET_RANDOM_WOULD_YOU_RATHERS,
            // "Dumb Laws": GET_LAWS,
            // "Random Facts": GET_ICEBREAKER_QUESTIONS, // Modify this once we have api set up
            // "Motivational Quotes": GET_ICEBREAKER_QUESTIONS // Modify this once we have api set up
        };

        console.log("Query to execute:", queryMap[selection?.title]);
        console.log("Is selection title defined?", selection?.title);
        
        const { data, loading, error } = useQuery(queryMap[selection?.title], {
            skip: !selection?.title, // Skip if selection is not defined
            variables: { limit: 10 }, // Query for 10 random results
        });

        // Extract results from the fetched data
        const results = data ? data[Object.keys(data)[0]] : [];
        console.log("Results object:", results);

            // Handle loading and error states
        if (loading) return <Typography>Loading...</Typography>;
        if (error) {
            console.error("GraphQL Error:", error);
            return <Typography>Error: {error.message}</Typography>;
        }

    // const getResults = () => {
    //     switch (selection?.title) {
    //         case "Icebreaker Question":
    //             return [
    //                 { id: 1, title: "Get to Know", description: "If you could write a book, what genre would it be about?" },
    //                 { id: 2, title: "Deep Dive", description: "What’s something that everyone, absolutely everyone, in the entire world can agree on?" },
    //                 { id: 3, title: "Casual", description: "What’s the best thing you’ve got going on in your life at the moment?" }
    //             ];
    //         case "Joke":
    //             return [
    //                 { id: 1, title: "Classic Joke", description: "Why don't scientists trust atoms? Because they make up everything!" },
    //                 { id: 2, title: "Office Joke", description: "I told my wife she should embrace her mistakes. She gave me a hug." }
    //             ];
    //         case "This or That":
    //             return [
    //                 { id: 1, title: "Preference", description: "Coffee or Tea?" },
    //                 { id: 2, title: "Daily Choices", description: "Books or Movies?" }
    //             ];
    //         case "Dumb Laws":
    //             return [
    //                 { id: 1, title: "Unexpected Law", description: "In Arizona, it is illegal for a donkey to sleep in a bathtub." },
    //                 { id: 2, title: "Odd Law", description: "In Connecticut, a pickle must bounce to officially be considered a pickle." }
    //             ];
    //         case "Random Facts":
    //             return [
    //                 { id: 1, title: "Nature Fact", description: "Bananas are curved because they grow towards the sun." },
    //                 { id: 2, title: "Historical Fact", description: "Vikings used the bones of slain animals when smithing new weapons believing this would enchant the weapon with the animal's spirit." }
    //             ];
    //         case "Motivational Quotes":
    //             return [
    //                 { id: 1, title: "Inspire", description: "The only limit to our realization of tomorrow will be our doubts of today. —Franklin D. Roosevelt" },
    //                 { id: 2, title: "Determination", description: "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. —William James" }
    //             ];
    //         default:
    //             return [];
    //     }
    // };

    // // Temporary or fetched data
    // const results = getResults();

    return (
        <Box sx={{
            display: 'flex', 
            flexGrow: 1, 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100vh', 
            width: '100%'
        }}>
            <Typography variant='h3' sx={{ textAlign: 'center', width: '80%' }}>
                {selection ? `${selection.title}` : "No selection made"}
            </Typography>
            <IceBreakerResults results={results}
            title={selection?.title} 
            onAddFavorite={addFavorite} onRemoveFavorite={removeFavorite} />
        </Box>
    );
};

export default Results;