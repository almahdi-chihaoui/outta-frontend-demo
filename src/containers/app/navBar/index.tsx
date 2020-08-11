/* Third party imports */
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

/* Interfaces imports */
import { RootState } from 'modules'

/* UI components */
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  LinearProgress,
} from '@material-ui/core';

import {
  AccountCircle,
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = (props) => {
  const [auth] = useState(true);

  const classes = useStyles();
  const { isLoading } = props;

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Outta
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => { }}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
          {!auth && (
            <Button color="inherit">Login</Button>
          )}
        </Toolbar>
        { isLoading && <LinearProgress color="secondary" /> }
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state: RootState) {
  const {
    isLoading,
  } = state.app;
  return {
    isLoading,
  };
}

export default connect(mapStateToProps)(NavBar);
