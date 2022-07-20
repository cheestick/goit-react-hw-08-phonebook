import React from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MissedPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/login');
  }, 1500);

  return (
    <Container maxWidth="sm">
      <Typography component="h2" variant="h5" mt={2}>
        Missed page...
      </Typography>
    </Container>
  );
};

export default MissedPage;
