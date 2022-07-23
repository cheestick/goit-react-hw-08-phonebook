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
import { useSignUpUserMutation } from 'redux/api';
import { useSelector } from 'react-redux';
import { selectIsPending } from 'redux/authSlice';

export default function Signup() {
  const [alertOpen, setAlertOpen] = useState(false);
  const [userSignUp] = useSignUpUserMutation();
  const navigate = useNavigate();
  const isPending = useSelector(selectIsPending);

  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(event.currentTarget);

    const response = await userSignUp({
      name: data.get('firstName'),
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
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
              />
            </Grid>
          </Grid>
          <LoadingButton
            type="submit"
            loading={isPending}
            loadingPosition="start"
            startIcon={<></>}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </LoadingButton>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouteLink} to="/login" variant="body2">
                Already have an account? Sign in
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
