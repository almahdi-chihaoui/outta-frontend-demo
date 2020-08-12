/* Third party imports */
import { handleActions } from 'redux-actions';

/* Actions imports */
import {
  appFinishedLoadingAction,
  appIsLoadingAction,
} from './actions';

/* Interfaces imports */
import { AppState } from './interfaces';

/**
 * Change the app loading state to true, this will show the app's main loading bar, as well as some other loading components
 */
export const appIsLoading = appIsLoadingAction;

/**
 * Change the app loading state to false, this will hide the app's main loading bar, as well as some other loading components
 */
export const appFinishedLoading = appFinishedLoadingAction;

/**
 * The app module's initial state
 */
const initialState: AppState = {
  isLoading: true,
};

/**
 * The app's main reducer
 * */
const reducer = handleActions({
  [appIsLoadingAction]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [appFinishedLoadingAction]: (state) => ({
    ...state,
    isLoading: false,
  }),
}, initialState);

export default reducer;
