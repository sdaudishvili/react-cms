import React from 'react';
import PropTypes from 'prop-types';
import { UploadFile } from './components';

const Dialogs = (props) => {
  const { dialogUploadFileIsVisible, onDialogClose } = props;

  return (
    <>
      <UploadFile open={dialogUploadFileIsVisible} onClose={onDialogClose} />
    </>
  );
};

Dialogs.propTypes = {
  dialogUploadFileIsVisible: PropTypes.bool,
  onDialogClose: PropTypes.func
};

Dialogs.defaultProps = {
  dialogUploadFileIsVisible: false,
  onDialogClose: () => {}
};

export default Dialogs;
