/* Third party imports */
import { createAction } from 'redux-actions';

/* Constants imports */
import {
  APP_IS_LOADING,
  APP_FINISHED_LOADING,
} from './constants';

/* Interfaces imports */
import {
  AppIsLoadingAction,
  AppFinishedLoadingAction,
} from './interfaces';

export const appIsLoadingAction = createAction<AppIsLoadingAction>(APP_IS_LOADING);
export const appFinishedLoadingAction = createAction<AppFinishedLoadingAction>(APP_FINISHED_LOADING);
