import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal';
function ProductCard({ product }) {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const trigger = () => {
        handleOpen()
    }

    return (
        // <Link to="/ingre">
        <Card onClick={trigger}>
            <ProductModal open={open} handleClose={handleClose} />
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
        // </Link>
    );
}

export default ProductCard;