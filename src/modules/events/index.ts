/* Third party imports */
import { handleActions } from 'redux-actions';

/* Actions imports */
import {
  fetchEventsStarted,
  fetchEventsSucceeded,
  fetchEventsFailed,
  fetchEventStarted,
  fetchEventSucceeded,
  fetchEventFailed,
} from './actions';
import { appIsLoading, appFinishedLoading } from '../app';

/* Interfaces imports */
import { EventsState } from './interfaces';

/* API imports */
import eventService from '../../api/event';

/**
 * Get all events and dispatch the appropriate actions
 */
export const fetchEvents = () => (async (dispatch) => {
  dispatch(appIsLoading());
  dispatch(fetchEventsStarted());

  eventService.get()
    .then((data) => {
      dispatch(fetchEventsSucceeded(data));
      dispatch(appFinishedLoading());
    })
    .catch((err) => {
      dispatch(fetchEventsFailed(err));
      dispatch(appFinishedLoading());
    });
});

/**
 * Get one selected event and dispatch the appropriate actions
 * @param id Id of the selected event
 */
export const fetchEvent = (id) => (async (dispatch) => {
  dispatch(appIsLoading());
  dispatch(fetchEventStarted());

  eventService.getOne(id)
    .then((data) => {
      dispatch(fetchEventSucceeded(data));
      dispatch(appFinishedLoading());
    })
    .catch((err) => {
      dispatch(fetchEventFailed(err));
      dispatch(appFinishedLoading());
    });
});

/**
 * Initial event state
 */
const initialState: EventsState = {
  events: [],
  event: {
    title: '',
    description: '',
    img: '',
  },
};

/**
 * Event reducer
 */
const reducer = handleActions({
  [fetchEventsSucceeded]: (state, action) => ({
    ...state,
    events: action.payload.events ? action.payload.events : [],
  }),
  [fetchEventsFailed]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
  [fetchEventSucceeded]: (state, action) => ({
    ...state,
    event: action.payload.event ? action.payload.event : {},
  }),
  [fetchEventFailed]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
}, initialState);

export default reducer;
