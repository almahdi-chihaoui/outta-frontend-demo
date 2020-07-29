/* Third party imports */
import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

/* Reducers imports */
import app from './app';
import events from './events';

/* Interfaces imports */
import { AppState } from './app/interfaces';
import { EventsState } from './events/interfaces';

export interface ApplicationState {
  app: AppState;
  events: EventsState;
  router: RouterState;
}

export default (history) => combineReducers<ApplicationState>({
  app,
  events,
  router: connectRouter(history),
});
