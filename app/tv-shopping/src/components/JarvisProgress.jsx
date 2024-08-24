import React from 'react';
import styled, { keyframes } from 'styled-components';
import { CircularProgress, Box } from '@mui/material';

// 회전 애니메이션 키프레임 정의
const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Jarvis 스타일의 CircularProgress 커스터마이징
const JarvisCircle = styled(CircularProgress)`
  color: #00e5ff; /* 네온 블루 색상 */
  animation: ${rotateAnimation} 2s linear infinite;
`;

const JarvisGlow = styled(Box)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 229, 255, 0.2), transparent);
    animation: ${rotateAnimation} 4s linear infinite reverse;
  }
`;

function JarvisProgress() {
  return (
    <JarvisGlow>
      <JarvisCircle thickness={5} size={80} />
    </JarvisGlow>
  );
}

export default JarvisProgress;