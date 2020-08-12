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

const initialState: EventsState = {
  events: [],
  event: {
    title: '',
    description: '',
    img: '',
  },
};

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
