import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  fileListEmptyMessage: {
    padding: theme.spacing(3),
    display: 'block',
    borderRadius: 5,
    background: '#efefef',
    color: '#333',
    fontSize: 15
  }
}));

const FileListEmptyMessage = () => {
  const classes = useStyles();
  return (
    <div className={classes.fileListEmptyMessage}>
      <Typography variant="h6" color="inherit" noWrap>
        No files in this folder
      </Typography>
    </div>
  );
};

export default FileListEmptyMessage;
