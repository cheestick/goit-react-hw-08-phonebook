import React from 'react';
import PropTypes from 'prop-types';
// import { useDeleteContactMutation } from 'redux/api';
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

export default function Contact({ id, name, number }) {
  // const [removeContact, { isLoading }] = useDeleteContactMutation();

  return (
    <>
      <ListItem id={id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={name}>{name[0].toUpperCase()}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {number}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
