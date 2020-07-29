/* Third party imports */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* UI Components */
import {
  Paper, Grid,
} from '@material-ui/core';

/* Relative imports  */

const useStyles = makeStyles(() => ({
  info: {
    height: '35%',
    width: '100%',
  },
  paper: {
    height: '100%',
    width: '100%',
  },
}));

const Info = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.info}>
      <Paper className={classes.paper} square />
    </Grid>
  );
};

export default Info;
