/* Third party imports */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';

/* Interfaces imports */
import { RootState } from 'modules';

/* UI components */
import { Grid } from '@material-ui/core';

/* Relative imports  */
import EventCard from './eventCard';
import { fetchEvents } from '../../../../modules/events';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const dummyEvents = [
  {
    title: '_____',
    img: '_____',
    description: '_______',
  },
  {
    title: '_____',
    img: '_____',
    description: '_______',
  },
  {
    title: '_____',
    img: '_____',
    description: '_______',
  },
]; // To make the skeleton while loading

const Events = (props) => {
  useEffect(() => { props.fetchEvents(); }, []);

  const classes = useStyles();
  const {
    events,
    isLoading,
    goToEventPage,
  } = props;

  return (
    <div className={classes.root}>
      <Grid alignContent="space-around" alignItems="center" container spacing={3}>
        {
          events && events.map((event, index) => (
            <Grid
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={4}
            >
              <EventCard
                // className={classes.paper}
                event={Object.assign(event, { id: index }, {})}
                isLoading={isLoading}
                onEventClick={goToEventPage}
              />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
  fetchEvents: PropTypes.func.isRequired,
  goToEventPage: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state: RootState) {
  const {
    isLoading,
  } = state.app;
  const events = isLoading ? dummyEvents : state.events.events;
  return {
    events,
    isLoading,
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchEvents,
  goToEventPage: (id) => push(`/event/${id}`),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);
