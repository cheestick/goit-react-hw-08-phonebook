import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import { Outlet } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authSlice';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>{isLoggedIn && <UserMenu />}</Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
