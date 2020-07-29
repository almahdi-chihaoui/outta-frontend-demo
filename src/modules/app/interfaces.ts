import {
  APP_IS_LOADING,
  APP_FINISHED_LOADING
} from './constants';

export interface AppState {
  isLoading: boolean;
}

export interface AppIsLoadingAction {
  type: typeof APP_IS_LOADING;
}

export interface AppFinishedLoadingAction {
  type: typeof APP_FINISHED_LOADING;
}