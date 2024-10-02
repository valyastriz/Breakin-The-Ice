import { Box, Typography } from '@mui/material';
import IceBreakerCard from './IceBreakerCard';

const IceBreakerResults = ({ results, onAddFavorite, onRemoveFavorite }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {results.map(result => (
                <IceBreakerCard key={result.id} title={result.title} description={result.description} onFavorite={() => onAddFavorite(result)} />
            ))}
        </Box>
    );
};

export default IceBreakerResults;