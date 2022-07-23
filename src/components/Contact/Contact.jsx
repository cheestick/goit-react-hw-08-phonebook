import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/api';
import {
  Box,
  Button,
  Avatar,
  Divider,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  Snackbar,
  CircularProgress,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { stringToColor } from 'Utils';
import CustomDialog from 'components/CustomDialog';
import EditContactForm from 'components/EditContactForm';

export default function Contact({ id, name, number }) {
  const [openModal, setOpenModal] = useState(false);
  const [deleteContactModal, setDeleteContactModal] = useState(false);
  const [removeContact, { isLoading }] = useDeleteContactMutation();

  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const closeDeleteContactModal = () => setDeleteContactModal(false);
  const openDeleteContactModal = () => setDeleteContactModal(true);

  const deleteContactHandler = _e => {
    setDeleteContactModal(true);
    removeContact(id);
  };

  return (
    <>
      <ListItem
        id={id}
        sx={{ paddingRight: 0 }}
        alignItems="flex-start"
        secondaryAction={
          <Box>
            <IconButton
              arial-label="edit"
              onClick={() => {
                openModalHandler(id);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              edge="end"
              arial-label="delete"
              onClick={openDeleteContactModal}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
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

      <CustomDialog open={openModal} close={() => {}}>
        <EditContactForm
          contactId={id}
          contactName={name}
          contactNumber={number}
          closeModal={closeModalHandler}
        />
      </CustomDialog>

      <CustomDialog
        open={deleteContactModal}
        close={() => {}}
        title=" Are you sure? You try to delete the contact"
      >
        <Button onClick={deleteContactHandler}>Detele anyway</Button>
        <Button onClick={closeDeleteContactModal} autoFocus>
          Cancel
        </Button>
      </CustomDialog>
      <Snackbar
        open={isLoading}
        sx={{ width: '10rem' }}
        autoHideDuration={6000}
        message="Deleting..."
        action={<CircularProgress />}
      />
    </>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
