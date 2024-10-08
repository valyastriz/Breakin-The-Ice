import { Box } from '@mui/material';
import IceBreakerCard from './IceBreakerCard';

const IceBreakerResults = ({ results, title, onAddFavorite, onRemoveFavorite }) => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {results.map(result => (
                <IceBreakerCard key={result.id} title={title} description={result.content} onFavorite={() => onAddFavorite(result)} />
            ))}
        </Box>
    );
};

export default IceBreakerResults;