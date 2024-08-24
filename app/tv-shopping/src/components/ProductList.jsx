import React, { useEffect, useState } from 'react';
import { Button, Grid } from '@mui/material';
import ProductCard from './ProductCard';
import useStore from '../store/recipeStore';
import ProductModal from './ProductModal';



function ProductList() {
    const recipeList = useStore((state) => state.recipeList);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // useEffect(()=>{
    //     handleOpen()
    // },[])
    return (
        <>
        <h3>음식 추천</h3>
        <Grid container spacing={4} sx={{ mt: 4 }}>
         <ProductModal open={open} handleClose={handleClose} />
        {recipeList.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
            </Grid>
        ))}
        </Grid>
        </>
    );
}

export default ProductList;