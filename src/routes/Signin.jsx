import React, { useState } from 'react';
import { Link as RouteLink, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  Avatar,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useSignInUserMutation } from 'redux/api';
import { useSelector } from 'react-redux';
import { selectIsPending } from 'redux/authSlice';

export default function SignIn() {
  const [userSingIn] = useSignInUserMutation();
  const [alertOpen, setAlertOpen] = useState(false);
  const navigate = useNavigate();
  const isPending = useSelector(selectIsPending);

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);

    const response = await userSingIn({
      email: data.get('email'),
      password: data.get('password'),
    });

    if (response?.error?.status === 400) {
      setAlertOpen(true);
      return;
    }

    form.reset();
    navigate('/contacts', { replace: true });
  };

  const alertCloseHandler = event => setAlertOpen(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <LoadingButton
            type="submit"
            loading={isPending}
            loadingPosition="start"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </LoadingButton>
          <Grid container>
            <Grid item>
              <Link component={RouteLink} to="/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Snackbar
        open={alertOpen}
        onClose={alertCloseHandler}
        autoHideDuration={4000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={alertCloseHandler} severity="error">
          Bad user name or password
        </Alert>
      </Snackbar>
    </Container>
  );
}
