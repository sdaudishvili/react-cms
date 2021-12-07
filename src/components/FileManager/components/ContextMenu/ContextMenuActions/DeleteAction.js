import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { ListItemIcon, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteAction = (props) => {
  const { onClick } = props;

  return (
    <MenuItem onClick={(e) => onClick(e)}>
      <ListItemIcon>
        <DeleteIcon />
      </ListItemIcon>
      <Typography variant="inherit">Delete</Typography>
    </MenuItem>
  );
};

DeleteAction.propTypes = {
  onClick: PropTypes.func
};

DeleteAction.defaultProps = {
  onClick: () => {}
};

export default DeleteAction;
