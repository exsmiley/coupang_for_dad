import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Header from './Header';
import JarvisProgress from './JarvisProgress';

function ThinkingMoment() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Box textAlign="center">
          <Typography variant="h5" gutterBottom style={{paddingBottom:"30px"}}>
            전화 내용을 청취중입니다...
          </Typography>
          <JarvisProgress />
        </Box>
      </Box>
    </Container>
  );
}

export default ThinkingMoment;