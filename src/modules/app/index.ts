/* Third party imports */
import { handleActions } from 'redux-actions';

/* Actions imports */
import {
  appFinishedLoadingAction,
  appIsLoadingAction,
} from './actions';

/* Interfaces imports */
import { AppState } from './interfaces';

export const appIsLoading = appIsLoadingAction;
export const appFinishedLoading = appFinishedLoadingAction;

const initialState: AppState = {
  isLoading: true,
};

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
