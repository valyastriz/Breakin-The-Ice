import { Card, CardContent, Typography } from '@mui/material';

const IceBreakerCard = ({ title, description }) => (
    <Card sx={{ minWidth: 275, maxWidth: 300, margin: 2 }}>
        <CardContent>
            <Typography variant="h5" component="div">
                {title}
            </Typography>
            <Typography variant="body2">
                {description}
            </Typography>
        </CardContent>
    </Card>
);

export default IceBreakerCard;