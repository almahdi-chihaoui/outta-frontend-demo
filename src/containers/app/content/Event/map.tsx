/* Third party imports */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* UI Components */
import {
  Paper, Grid,
} from '@material-ui/core';

/* Relative imports  */

const useStyles = makeStyles((theme) => ({
  map: {
    height: '55%',
    width: '100%',
    marginTop: theme.spacing(1),
  },
  paper: {
    height: '100%',
    width: '100%',
  },
}));

const Map = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.map}>
      <Paper className={classes.paper} square />
    </Grid>
  );
};

export default Map;
