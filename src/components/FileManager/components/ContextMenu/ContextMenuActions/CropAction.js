import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { ListItemIcon, Typography } from '@material-ui/core';
import CropIcon from '@material-ui/icons/Crop';

const CropAction = (props) => {
  const { onClick } = props;

  return (
    <MenuItem onClick={(e) => onClick(e)}>
      <ListItemIcon>
        <CropIcon />
      </ListItemIcon>
      <Typography variant="inherit">Crop</Typography>
    </MenuItem>
  );
};

CropAction.propTypes = {
  onClick: PropTypes.func
};

CropAction.defaultProps = {
  onClick: () => {}
};

export default CropAction;
