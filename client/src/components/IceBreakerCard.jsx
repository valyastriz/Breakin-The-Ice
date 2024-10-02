import { Card, CardContent, Typography, Divider } from '@mui/material';

const IceBreakerCard = ({ title, description }) => (
    <Card sx={{ minWidth: 275, maxWidth: 300, margin: 2 }}>
        <CardContent>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Divider sx={{ 
                my: 1,
                borderBottomWidth: 1,
                width: '100%',
                mx: 'auto',
                borderColor: 'white'
            }} />
            <Typography variant="body2">
                {description}
            </Typography>
        </CardContent>
    </Card>
);

export default IceBreakerCard;