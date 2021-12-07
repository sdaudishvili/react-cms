import React from 'react';
import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  progress: {
    margin: theme.spacing(10)
  }
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <CircularProgress className={classes.progress} color="secondary" />
    </Grid>
  );
};

export default Loader;
