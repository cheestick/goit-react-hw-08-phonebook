import React from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/api';
import {
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { stringToColor } from 'Utils';

export default function Contact({ id, name, number }) {
  const [removeContact] = useDeleteContactMutation();

  return (
    <>
      <ListItem
        id={id}
        alignItems="flex-start"
        secondaryAction={
          <IconButton
            edge="end"
            arial-label="delete"
            onClick={() => removeContact(id)}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemButton>
          <ListItemAvatar>
            <Avatar
              alt={name}
              sx={{
                width: 56,
                height: 56,
                mr: 3,
                bgcolor: stringToColor(name),
              }}
            >
              {name[0].toUpperCase()}
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                color="text.primary"
              >
                {name}
              </Typography>
            }
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="subtitle1"
                  color="text.primary"
                >
                  {number}
                </Typography>
              </>
            }
          />
        </ListItemButton>
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
