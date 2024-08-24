import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import ingredientStore from '../store/ingredientStore';
import ProductModal from './ProductModal';
import IngredientCard from './ingredientCard';
import { Title } from '@mui/icons-material';



function IngredientList() {
    const ingredientList = ingredientStore((state) => state.ingredientList);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        handleOpen()
    },[])
    return (<>
        <h3>음식 재료 둘러보기</h3>
        <Grid container spacing={4} sx={{ mt: 0 }}>
        {ingredientList.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
                <IngredientCard product={product} number={1}/>
            </Grid>
        ))}
        </Grid>
        </>
    );
}

export default IngredientList;