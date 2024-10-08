import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useIcebreaker } from '../Context/IcebreakerContext';
import IceBreakerCard from './IceBreakerCard';

const IceBreakerOptions = () => {
    const { setSelection } = useIcebreaker();  // Context hook to set selected option
    const navigate = useNavigate();  // Hook for navigation

    const icebreakerOptions = [
        { id: 1, title: "Icebreaker Question", description: "Generate engaging questions to break the ice." },
        { id: 2, title: "Joke", description: "Lighten the mood with a random joke." },
        { id: 3, title: "This or That", description: "Fun this or that choices to start conversations." },
        { id: 4, title: "Dumb Laws", description: "Amuse yourself with some of the most absurd laws in the world." },
        { id: 5, title: "Useless Facts", description: "Learn and share interesting useless facts." },
        { id: 6, title: "Random Quotes", description: "A selection of random quotes to inspire thought and reflection." }
    ];

    // Function to handle selection
    const handleSelect = (option) => {
        setSelection(option);  // Set the selection in context
        navigate(`/results?title=${encodeURIComponent(option.title)}`);  // Navigate to the results page
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 2 }}>
            {icebreakerOptions.map(option => (
                <IceBreakerCard
                    key={option.id}
                    title={option.title}
                    description={option.description}
                    onClick={() => handleSelect(option)}
                />
            ))}
        </Box>
    );
};

export default IceBreakerOptions;