import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

const CustomDialog = ({ title = 'Dialog', open, close, children }) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="add-contact-dialog-title"
    >
      <DialogTitle id="add-contact-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

CustomDialog.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default CustomDialog;
