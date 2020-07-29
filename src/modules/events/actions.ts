/* Third party imports */
import { createAction } from 'redux-actions';

/* Constants imports */
import {
  FETCH_EVENTS_SUCCEEDED,
  FETCH_EVENTS_STARTED,
  FETCH_EVENTS_FAILED,
  FETCH_EVENT_SUCCEEDED,
  FETCH_EVENT_STARTED,
  FETCH_EVENT_FAILED,
} from './constants';

/* Interfaces imports */
import {
  FetchEventsSucceededAction,
  FetchEventsStartedAction,
  FetchEventsFailedAction,
  FetchEventSucceededAction,
  FetchEventStartedAction,
  FetchEventFailedAction
} from './interfaces';

/* FETCH EVENTS */
export const fetchEventsSucceeded = createAction<FetchEventsSucceededAction>(
  FETCH_EVENTS_SUCCEEDED,
  (events) => ({ events }),
);
export const fetchEventsStarted = createAction<FetchEventsStartedAction>(
  FETCH_EVENTS_STARTED,
);
export const fetchEventsFailed = createAction<FetchEventsFailedAction>(
  FETCH_EVENTS_FAILED,
  (error) => ({ error }),
);

/* FETCH EVENT */
export const fetchEventSucceeded = createAction<FetchEventSucceededAction>(
  FETCH_EVENT_SUCCEEDED,
  (event) => ({ event }),
);
export const fetchEventStarted = createAction<FetchEventStartedAction>(
  FETCH_EVENT_STARTED,
);
export const fetchEventFailed = createAction<FetchEventFailedAction>(
  FETCH_EVENT_FAILED,
  (error) => ({ error }),
);
