import React from 'react';
import ContactList from 'components/ContactList';
import { Container, Typography } from '@mui/material';

const Contacts = () => {
  return (
    <Container maxWidth="sm">
      <Typography component="h2" variant="h3" sx={{ mt: 2, mb: 2 }}>
        Contacts
      </Typography>
      <ContactList />
    </Container>
  );
};

export default Contacts;
