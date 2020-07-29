import {
  FETCH_EVENTS_SUCCEEDED,
  FETCH_EVENTS_STARTED,
  FETCH_EVENTS_FAILED,
  FETCH_EVENT_SUCCEEDED,
  FETCH_EVENT_STARTED,
  FETCH_EVENT_FAILED
} from './constants';

export interface Event {
  title: string;
  description: string;
  img: string;
}

export interface EventsState {
  events: Event[];
  event: Event;
}

export interface FetchEventsSucceededAction {
  type: typeof FETCH_EVENTS_SUCCEEDED,
  events: Event[];
}

export interface FetchEventsStartedAction {
  type: typeof FETCH_EVENTS_STARTED,
}

export interface FetchEventsFailedAction {
  type: typeof FETCH_EVENTS_FAILED,
  error: any;
}

export interface FetchEventSucceededAction {
  type: typeof FETCH_EVENT_SUCCEEDED,
  event: Event;
}

export interface FetchEventStartedAction {
  type: typeof FETCH_EVENT_STARTED,
}

export interface FetchEventFailedAction {
  type: typeof FETCH_EVENT_FAILED,
  error: any;
}