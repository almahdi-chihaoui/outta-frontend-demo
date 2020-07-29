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

export const fetchEvents = () => ((dispatch) => {
  dispatch(appIsLoading());
  dispatch(fetchEventsStarted());

  return setTimeout(() => {
    // eslint-disable-next-line no-use-before-define
    dispatch(fetchEventsSucceeded(eventsExp));
    dispatch(appFinishedLoading());
  }, 3000);
}
);

export const fetchEvent = (id) => ((dispatch) => {
  dispatch(appIsLoading());
  dispatch(fetchEventStarted());

  return setTimeout(() => {
    // eslint-disable-next-line no-use-before-define
    dispatch(fetchEventSucceeded(eventsExp[id]));
    dispatch(appFinishedLoading());
  }, 3000);
}
);

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

const eventsExp = [
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas yeaaaaaa',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
  {
    title: 'Trip to Las Vegas',
    description: 'What happen in Vegas stay in Vegas',
    img: 'https://www.pro-sky.com/images/en/news/news_header_webseite_-49-_342_big.jpg',
  },
];
