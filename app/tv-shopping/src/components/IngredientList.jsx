import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import ingredientStore from '../store/ingredientStore';
import ProductModal from './ProductModal';
import IngredientCard from './ingredientCard';



function IngredientList() {
    const ingredientList = ingredientStore((state) => state.ingredientList);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        handleOpen()
    },[])
    return (
        <Grid container spacing={4} sx={{ mt: 4 }}>
        {ingredientList.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
                <IngredientCard product={product} />
            </Grid>
        ))}
        </Grid>
    );
}

export default IngredientList;