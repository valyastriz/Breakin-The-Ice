import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useBingo } from '../Context/BingoContext';
import BingoCard from './BingoCard';

const BingoOption = () => {
    const { setSelection } = useBingo();  // Context hook to set selected option
    const navigate = useNavigate();  // Hook for navigation

    const bingoOption = [
        { id: 1, title: "BINGO", description: "A game to get to know those around you." },
    ];

    // Function to handle selection
    const handleSelect = () => {
        setSelection(bingoOption);  // Set the selection in context
        navigate(`/bingo`);  // Navigate to the results page
    };

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: 2 }}>
            {bingoOption.map(option => (
                <BingoCard
                    key={bingoOption.id}
                    title={bingoOption.title}
                    description={bingoOption.description}
                    onClick={handleSelect}
                />
            ))}
        </Box>
    );
};

export default BingoOption;