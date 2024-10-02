import { Box } from '@mui/material';
import IceBreakerCard from './IceBreakerCard';

const IceBreakerOptions = () => {
    // Define the array of options within the component
    const icebreakerOptions = [
        { id: 1, title: "Icebreaker Question", description: "Generate engaging questions to break the ice." },
        { id: 2, title: "Joke", description: "Lighten the mood with a random joke." },
        { id: 3, title: "This or That", description: "Fun this or that choices to start conversations." },
        { id: 4, title: "Dumb Laws", description: "Amuse yourself with some of the most absurd laws in the world." },
        { id: 5, title: "Random Facts", description: "Learn and share interesting random facts." },
        { id: 6, title: "Motivational Quotes", description: "Inspirational quotes to motivate you and others." }
    ];

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 2 }}>
            {icebreakerOptions.map(option => (
                <IceBreakerCard key={option.id} title={option.title} description={option.description} />
            ))}
        </Box>
    );
};

export default IceBreakerOptions;