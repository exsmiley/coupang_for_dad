import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
function ProductCard({ product }) {
  return (
    <Link to="/ingre">
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
    </Link>
  );
}

export default ProductCard;