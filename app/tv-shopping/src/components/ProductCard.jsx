import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`${product.image}`}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {product.title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;