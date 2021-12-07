import React from 'react';
import PropTypes from 'prop-types';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

const FormDialog = (props) => {
  const { onClose, open, fileContentImageUrl } = props;
  return (
    <div style={{ marginLeft: '1em' }}>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-content" fullWidth maxWidth="sm">
        <DialogTitle id="form-dialog-content">Viewing file </DialogTitle>
        <DialogContent>
          <img src={fileContentImageUrl} alt="" style={{ maxWidth: '100%' }} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary" type="button">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

FormDialog.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
  fileContentImageUrl: PropTypes.string
};

FormDialog.defaultProps = {
  onClose: () => {},
  open: false,
  fileContentImageUrl: null
};

export default FormDialog;
