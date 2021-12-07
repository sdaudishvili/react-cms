import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { UploadFileList } from './components';

const useStyles = makeStyles(() => ({
  displayNone: {
    display: 'none'
  },
  displayInlineFlex: {
    display: 'inline-flex'
  }
}));

const FileUploader = (props) => {
  const { onReset, onChange, fileUploadList } = props;
  const classes = useStyles();

  const [value, setValue] = useState('');

  const handleReset = (event) => {
    setValue('');
    onReset(event);
  };

  return (
    <div>
      <label htmlFor="button-file">
        <input
          value={value}
          className={classes.displayNone}
          id="button-file"
          multiple
          type="file"
          onChange={onChange}
        />
        <Button component="span" variant="contained" color="primary">
          Select Files
        </Button>
      </label>

      <Button
        className={fileUploadList.length ? classes.displayInlineFlex : classes.displayNone}
        component="span"
        type="reset"
        onClick={handleReset}
      >
        Clear
      </Button>

      <UploadFileList files={fileUploadList} />
    </div>
  );
};

FileUploader.propTypes = {
  fileUploadList: PropTypes.array,
  onReset: PropTypes.func,
  onChange: PropTypes.func
};

FileUploader.defaultProps = {
  fileUploadList: [],
  onReset: () => {},
  onChange: () => {}
};

export default FileUploader;
