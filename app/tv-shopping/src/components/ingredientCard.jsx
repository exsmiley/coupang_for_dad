import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function IngredientCard({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`${product.image}`}
        alt={product.name}
      />
      <CardContent>
        <a href='https://www.coupang.com/np/search?component=&q=%EC%84%A4%ED%83%95&channel=user' target='_blank'>
        <Typography gutterBottom variant="h7" component="div">
          {product.name}
        </Typography>
        </a>
      </CardContent>
    </Card>
  );
}

export default IngredientCard;