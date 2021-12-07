import React from 'react';
import PropTypes from 'prop-types';
import { Content, Crop, CreateFolder, UploadFile } from './components';

const Dialogs = (props) => {
  const {
    dialogContentIsVisible,
    dialogCropperIsVisible,
    dialogCreateFolderIsVisible,
    dialogUploadFileIsVisible,
    fileContentImageUrl,
    fileCropperImage,
    fileUploadList,
    fileUploadCanSave,
    fileUploadProgress,
    aspectRatio,
    onDialogClose,
    onSaveFolder,
    onSaveChosenFiles,
    onResetChosenFiles,
    onUploadChosenFiles,
    onSubmitCrop
  } = props;

  return (
    <>
      <Content open={dialogContentIsVisible} fileContentImageUrl={fileContentImageUrl} onClose={onDialogClose} />
      <Crop
        aspectRatio={aspectRatio}
        open={dialogCropperIsVisible}
        fileCropperImage={fileCropperImage}
        onSubmitCrop={onSubmitCrop}
        onClose={onDialogClose}
      />
      <CreateFolder open={dialogCreateFolderIsVisible} onSaveFolder={onSaveFolder} onClose={onDialogClose} />
      <UploadFile
        open={dialogUploadFileIsVisible}
        fileUploadList={fileUploadList}
        canUpload={fileUploadCanSave}
        onClose={onDialogClose}
        onUpload={onUploadChosenFiles}
        onSaveChosenFiles={onSaveChosenFiles}
        onResetChosenFiles={onResetChosenFiles}
        fileUploadProgress={fileUploadProgress}
      />
    </>
  );
};

Dialogs.propTypes = {
  dialogContentIsVisible: PropTypes.bool,
  dialogCropperIsVisible: PropTypes.bool,
  dialogCreateFolderIsVisible: PropTypes.bool,
  dialogUploadFileIsVisible: PropTypes.bool,
  fileContentImageUrl: PropTypes.string,
  fileCropperImage: PropTypes.object,
  fileUploadList: PropTypes.instanceOf(Array),
  fileUploadCanSave: PropTypes.bool,
  fileUploadProgress: PropTypes.number,
  aspectRatio: PropTypes.number,
  onDialogClose: PropTypes.func,
  onSaveFolder: PropTypes.func,
  onSaveChosenFiles: PropTypes.func,
  onResetChosenFiles: PropTypes.func,
  onUploadChosenFiles: PropTypes.func,
  onSubmitCrop: PropTypes.func
};

Dialogs.defaultProps = {
  dialogContentIsVisible: false,
  dialogCropperIsVisible: false,
  dialogCreateFolderIsVisible: false,
  dialogUploadFileIsVisible: false,
  fileContentImageUrl: '',
  fileCropperImage: {},
  fileUploadList: [],
  fileUploadCanSave: false,
  fileUploadProgress: 0,
  aspectRatio: 0,
  onDialogClose: () => {},
  onSaveFolder: () => {},
  onSaveChosenFiles: () => {},
  onResetChosenFiles: () => {},
  onUploadChosenFiles: () => {},
  onSubmitCrop: () => {}
};

export default Dialogs;
