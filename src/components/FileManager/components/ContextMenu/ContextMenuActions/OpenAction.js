import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { ListItemIcon, Typography } from '@material-ui/core';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';

const OpenAction = (props) => {
  const { onClick } = props;

  return (
    <MenuItem onClick={(e) => onClick(e)}>
      <ListItemIcon>
        <OpenInBrowserIcon />
      </ListItemIcon>
      <Typography variant="inherit">Open</Typography>
    </MenuItem>
  );
};

OpenAction.propTypes = {
  onClick: PropTypes.func
};

OpenAction.defaultProps = {
  onClick: () => {}
};

export default OpenAction;
