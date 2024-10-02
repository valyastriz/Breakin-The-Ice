import { Box, Typography } from '@mui/material';
import IceBreakerCard from './IceBreakerCard';
import { useEffect, useState } from 'react';

const IceBreakerResults = ({ selectedOptionId }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://api.example.com/results/${selectedOptionId}`);
            const data = await response.json();
            setResults(data.results); // Assuming the API returns an array of results
        };
        fetchData();
    }, [selectedOptionId]);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {results.map(result => (
                <IceBreakerCard key={result.id} title={result.title} description={result.description} />
            ))}
        </Box>
    );
};

export default IceBreakerResults;