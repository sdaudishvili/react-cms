import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { MenuItem, Link, ListItemIcon, Typography } from '@material-ui/core';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles(() => ({
  downloadLink: {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      textDecoration: 'none'
    }
  }
}));

const DownloadAction = (props) => {
  const { selectedFile } = props;

  const classes = useStyles();

  const generateParam = () => {
    return Math.random().toString(36).substring(2, 7);
  };

  return (
    <MenuItem>
      <Link className={classes.downloadLink} target="_blank" href={`${selectedFile.url}?v=${generateParam()}`}>
        <ListItemIcon>
          <CloudDownloadIcon />
        </ListItemIcon>
        <Typography variant="inherit">Download</Typography>
      </Link>
    </MenuItem>
  );
};

DownloadAction.propTypes = {
  selectedFile: PropTypes.instanceOf(Object)
};

DownloadAction.defaultProps = {
  selectedFile: {}
};

export default DownloadAction;
