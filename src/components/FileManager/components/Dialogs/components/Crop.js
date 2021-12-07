import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@material-ui/core';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const FormDialog = (props) => {
  const { onClose, onSubmitCrop, open, fileCropperImage, aspectRatio } = props;

  const [options, setOptions] = useState({});

  const cropper = useRef(null);

  const handlerCrop = () => {
    cropper.current.crop();
    onSubmitCrop({ ...options, name: fileCropperImage.name });
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-content" fullWidth maxWidth="sm">
        <DialogTitle id="form-dialog-content">Crop file</DialogTitle>
        <DialogContent>
          {!!fileCropperImage && (
            <Cropper
              crop={(e) => setOptions(e.detail)}
              ref={cropper}
              aspectRatio={aspectRatio}
              src={fileCropperImage.url}
              viewMode={1}
              zoomable
              scalable={false}
              cropBoxResizable={false}
              checkCrossOrigin={false}
              checkOrientation={false}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handlerCrop} color="primary" size="small" variant="contained">
            Crop
          </Button>
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
  onSubmitCrop: PropTypes.func,
  fileCropperImage: PropTypes.object,
  open: PropTypes.bool,
  aspectRatio: PropTypes.number.isRequired
};

FormDialog.defaultProps = {
  onClose: () => {},
  onSubmitCrop: () => {},
  fileCropperImage: {},
  open: false
};

export default FormDialog;
