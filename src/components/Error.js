import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const styles = {
  dialogPaper: {
    maxHeight: 400,
    maxWidth: 400,
  },
};

const Error = ({
  message,
  onClose,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          { message }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={
            () => {
              setOpen(false);
              if (onClose !== undefined) {
                onClose();
              }
            }
          }
          color="primary"
          autoFocus
        >
          {'OK'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

Error.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(Error);
