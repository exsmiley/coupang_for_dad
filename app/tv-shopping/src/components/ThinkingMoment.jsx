import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import Header from './Header';
import JarvisProgress from './JarvisProgress';
import { useNavigate } from 'react-router-dom';

function ThinkingMoment() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');  // '/target-page'는 이동하고자 하는 경로입니다.
    }, 2000);  // 3000ms = 3초

    // 타이머를 클린업하기 위해 컴포넌트가 언마운트될 때 클린업 함수를 반환합니다.
    return () => clearTimeout(timer);
  }, [navigate]);
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