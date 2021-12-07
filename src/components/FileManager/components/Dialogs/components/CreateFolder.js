import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = (props) => {
  const { onClose, onSaveFolder, open } = props;
  const [value, setValue] = useState('');

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSave = async (value) => {
    try {
      await onSaveFolder(value);
      setValue('');
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-create-folder" fullWidth maxWidth="sm">
      <DialogTitle id="form-dialog-create-folder">Create folder</DialogTitle>
      <DialogContent>
        <TextField
          value={value}
          onChange={handleValueChange}
          autoFocus
          fullWidth
          margin="dense"
          label="Folder name"
          type="text"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" type="button">
          Cancel
        </Button>
        <Button color="primary" onClick={() => handleSave(value)}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FormDialog.propTypes = {
  onClose: PropTypes.func,
  onSaveFolder: PropTypes.func,
  open: PropTypes.bool
};

FormDialog.defaultProps = {
  onClose: () => {},
  onSaveFolder: () => {},
  open: false
};

export default FormDialog;
