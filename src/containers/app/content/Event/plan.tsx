/* Third party imports */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* UI Components */
import {
  Paper,
} from '@material-ui/core';

/* Relative imports  */

const useStyles = makeStyles((theme) => ({
  paper: {
    height: 220,
    width: '100%',
    marginTop: theme.spacing(1),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Plan = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} square />
      <Paper className={classes.paper} square />
      <Paper className={classes.paper} square />
      <Paper className={classes.paper} square />
    </div>
  );
};

export default Plan;
