import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import TvIcon from '@mui/icons-material/Tv';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// styled-components를 사용하여 Button 컴포넌트를 만듭니다.
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #fff;
  }
`;

function Header() {
  return (
    <AppBar position="static" style={{background:"#333"}}>
      <Toolbar>
        <TvIcon sx={{ mr: 2 }} />
        <StyledLink to="/" variant="h6">
          TV 홈쇼핑
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
}

export default Header;