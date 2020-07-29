/* Third party imports */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

/* Relative imports  */
import MainContent from './mainContent';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    marginTop: 64,
    padding: theme.spacing(3),
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <MainContent />
    </main>
  );
};

export default Content;
