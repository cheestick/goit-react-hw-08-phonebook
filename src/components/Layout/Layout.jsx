import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { Outlet, useLocation } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/authSlice';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { pathname } = useLocation();

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar variant="dense">
            {isLoggedIn && <UserMenu />}
            {!isLoggedIn && (
              <Typography
                component="h2"
                variant="h6"
                textAlign="center"
                sx={{ textTransform: 'capitalize' }}
              >
                {pathname.slice(1)}
              </Typography>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};

export default Layout;
