/* Third party imports */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

/* UI Components */
import {
  Grid,
  Hidden,
} from '@material-ui/core';

/* Relative imports  */
import Cover from './cover';
import Info from './info';
import Plan from './plan';
import Map from './map';
import { fetchEvent } from '../../../../modules/events';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(2),
  },
  fixedGrid: {
    position: 'fixed',
    right: 0,
  },
}));

const dummyEvent = {
  title: '_____',
  img: '_____',
  description: '_______',
}; // To make the skeleton while loading

const Event = (props) => {
  useEffect(() => { props.fetchEvent(props.match.params.id); }, []);

  const classes = useStyles();
  const {
    event,
    isLoading,
  } = props;

  return (
    <>
      <Grid container spacing={3} className={classes.container}>
        <Hidden mdDown>
          <Grid item md={3} />
        </Hidden>
        <Grid
          item
          container
          direction="column"
          sm={9}
          lg={6}
        >
          <Grid item>
            <Cover
              description={event.description}
              img={event.img}
              title={event.title}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item>
            <Plan />
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid
            className={classes.fixedGrid}
            style={{ height: window.innerHeight - 90 }}
            item
            container
            direction="column"
            sm={3}
            lg={3}
          >
            <Info />
            <Map />
          </Grid>
        </Hidden>
      </Grid>
    </>
  );
};

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  fetchEvent: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  match: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const {
    isLoading,
  } = state.app;
  const event = isLoading ? dummyEvent : state.events.event;
  return {
    event,
    isLoading,
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchEvent,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Event);
