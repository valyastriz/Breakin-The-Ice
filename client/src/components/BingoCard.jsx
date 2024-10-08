import React from 'react';
import { Card, CardContent, Typography, Divider, CardActionArea} from '@mui/material';

import { useTheme } from '@mui/material/styles';

const BingoCard = ({ title, description, onClick }) => {
  const theme = useTheme();

  return (
      <Card sx={{ minWidth: 275, maxWidth: 300, margin: 2, backgroundColor: theme.palette.background.paper }}>
          <CardActionArea onClick={onClick}>
              <CardContent>
                  <Typography variant="h5" component="div">
                      {title}
                  </Typography>
                  <Divider sx={{ my: 1, borderBottomWidth: 1, width: '100%', mx: 'auto', borderColor: 'white' }} />
                  <Typography variant="body2">
                      {description}
                  </Typography>
              </CardContent>
          </CardActionArea>
      </Card>
  );
};

export default BingoCard;