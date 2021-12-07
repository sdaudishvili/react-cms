import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import FileUploader from '../../FileUploader';

const FormDialog = (props) => {
  const {
    onClose,
    onUpload,
    onSaveChosenFiles,
    onResetChosenFiles,
    open,
    canUpload,
    fileUploadProgress,
    fileUploadList
  } = props;

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-upload" fullWidth maxWidth="sm">
      <DialogTitle id="form-dialog-upload">Upload files</DialogTitle>
      <DialogContent>
        <FileUploader fileUploadList={fileUploadList} onChange={onSaveChosenFiles} onReset={onResetChosenFiles} />
        {canUpload ? <LinearProgress variant="determinate" value={fileUploadProgress} /> : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" type="button">
          Cancel
        </Button>
        <Button color="primary" onClick={() => onUpload(fileUploadList)} disabled={!canUpload} type="submit">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FormDialog.propTypes = {
  onClose: PropTypes.func,
  onUpload: PropTypes.func,
  onSaveChosenFiles: PropTypes.func,
  onResetChosenFiles: PropTypes.func,
  open: PropTypes.bool,
  canUpload: PropTypes.bool,
  fileUploadProgress: PropTypes.number,
  fileUploadList: PropTypes.array
};

FormDialog.defaultProps = {
  onClose: () => {},
  onUpload: () => {},
  onSaveChosenFiles: () => {},
  onResetChosenFiles: () => {},
  open: false,
  canUpload: false,
  fileUploadProgress: 0,
  fileUploadList: []
};

export default FormDialog;
