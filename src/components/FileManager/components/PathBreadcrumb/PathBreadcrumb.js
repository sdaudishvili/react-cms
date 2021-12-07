import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs, Typography } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1)
  },
  elem: {
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer'
    }
  }
}));

const PathBreadcrumb = ({ path, onPathClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {path &&
          path.map((x) => (
            <Typography className={classes.elem} key={x} underline="hover" onClick={onPathClick}>
              {x}
            </Typography>
          ))}
      </Breadcrumbs>
    </div>
  );
};

PathBreadcrumb.propTypes = {
  path: PropTypes.instanceOf(Array),
  onPathClick: PropTypes.func
};

PathBreadcrumb.defaultProps = {
  path: [],
  onPathClick: () => {}
};

export default PathBreadcrumb;
