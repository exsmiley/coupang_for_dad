import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ThinkingMoment from './components/ThinkingMoment';
import IngredientList from './components/IngredientList';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/think" element={<ThinkingMoment />} />
          <Route path="/ingre" element={<IngredientList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;