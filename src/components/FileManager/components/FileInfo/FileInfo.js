import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, Typography } from '@material-ui/core';
import { FileIcon, defaultStyles } from 'react-file-icon';

const useStyles = makeStyles((theme) => ({
  file: {
    paddingTop: theme.spacing(7),
    padding: theme.spacing(3),
    display: 'block',
    width: '100%',
    height: '100%',
    userSelect: 'none'
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    width: 60,
    height: 60,
    fontSize: 30,
    flexShrink: 0,
    '& img': {
      maxWidth: '100%',
      borderRadius: 3
    },
    '& svg': {
      fontSize: 'inherit'
    }
  },
  fileName: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
    wordBreak: 'break-word',
    marginTop: theme.spacing(5)
  },
  infoItem: {
    marginTop: theme.spacing(1),
    color: 'black'
  }
}));

const FileInfo = (props) => {
  const { selectedFiles } = props;
  const classes = useStyles();
  const [file] = selectedFiles;

  const [extension] = file ? file.name?.split('.').reverse() : [];

  // eslint-disable-next-line no-unused-vars
  const renderFileIcon = (e, u, n) => {
    return <FileIcon extension={e} {...defaultStyles[e]} />;
  };

  return (
    <div className={clsx(classes.file)}>
      {file && (
        <>
          <Box className="box" alignItems="center" display="flex" flexDirection="column">
            <Box mr={2} className={classes.icon}>
              {renderFileIcon(extension, file.url, file.name)}
            </Box>
            <Typography className={classes.fileName} variant="h6">
              {file.name}
            </Typography>
          </Box>
          <Box mt={5}>
            <Typography className={classes.infoItem} variant="subtitle2">
              Type: File
            </Typography>
            <Typography className={classes.infoItem} variant="subtitle2">
              Size: 30mb
            </Typography>
            <Typography className={classes.infoItem} variant="subtitle2">
              Path: {file.path}
            </Typography>

            <Box className="box" display="flex" mt={5}>
              <a href={file.url} target="_blank" rel="noreferrer">
                <Button color="primary" variant="contained">
                  Download
                </Button>
              </a>
              <Button color="secondary" variant="contained" style={{ marginLeft: 10 }}>
                Delete
              </Button>
            </Box>
          </Box>
        </>
      )}
    </div>
  );
};

FileInfo.propTypes = {
  selectedFiles: PropTypes.array
};

FileInfo.defaultProps = {
  selectedFiles: []
};

export default FileInfo;
