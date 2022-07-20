import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

const CustomDialog = ({ open, close, children }) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="add-contact-dialog-title"
    >
      <DialogTitle id="add-contact-dialog-title">Add contact</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
