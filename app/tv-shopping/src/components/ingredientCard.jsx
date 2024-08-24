import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

function IngredientCard({ product, number }) {
  return (
    <Card sx={{ position: 'relative' }}>
      <CardMedia
        component="img"
        height="140"
        image={`${product.image}`}
        alt={product.name}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '3rem',
          fontWeight: 'bold',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // 반투명 배경
        }}
      >
        {number}
      </Box>
      <CardContent>
        <a href='https://www.coupang.com/np/search?component=&q=%EC%84%A4%ED%83%95&channel=user' target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography gutterBottom variant="h7" component="div">
            {product.name}
          </Typography>
        </a>
      </CardContent>
    </Card>
  );
}

export default IngredientCard;