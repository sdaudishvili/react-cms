import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import FileUploader from '../../FileUploader';

const UploadFile = (props) => {
  const { onClose, onResetChosenFiles, open, canUpload, fileUploadProgress, fileUploadList } = props;

  const onFilesSelect = ({ target: { files } }) => {
    const [file] = files;
    console.log(file);
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-upload" fullWidth maxWidth="sm">
      <DialogTitle id="form-dialog-upload">Upload files</DialogTitle>
      <DialogContent>
        <FileUploader fileUploadList={fileUploadList} onChange={onFilesSelect} onReset={onResetChosenFiles} />
        {canUpload ? <LinearProgress variant="determinate" value={fileUploadProgress} /> : null}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" type="button">
          Cancel
        </Button>
        <Button color="primary" onClick={() => {}} disabled={!canUpload} type="submit">
          Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};

UploadFile.propTypes = {
  onClose: PropTypes.func,
  onResetChosenFiles: PropTypes.func,
  open: PropTypes.bool,
  canUpload: PropTypes.bool,
  fileUploadProgress: PropTypes.number,
  fileUploadList: PropTypes.array
};

UploadFile.defaultProps = {
  onClose: () => {},
  onResetChosenFiles: () => {},
  open: false,
  canUpload: false,
  fileUploadProgress: 0,
  fileUploadList: []
};

export default UploadFile;
