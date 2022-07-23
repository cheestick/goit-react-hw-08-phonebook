import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MissedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/login');
    }, 1500);
  }, [navigate]);

  return (
    <Container maxWidth="sm">
      <Typography component="h2" variant="h5" mt={2}>
        Missed page...
      </Typography>
    </Container>
  );
};

export default MissedPage;
