/* Third party imports */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* UI components */
import CssBaseline from '@material-ui/core/CssBaseline';

/* Relative imports  */
import Content from './content';
import NavBar from './navBar';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <Content />
    </div>
  );
};

export default App;
