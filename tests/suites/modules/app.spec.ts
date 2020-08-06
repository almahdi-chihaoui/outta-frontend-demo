import * as constants from '../../../src/modules/app/constants';
import * as actions from '../../../src/modules/app/actions';
import reducer from '../../../src/modules/app';

describe('app actions', () => {
  it('should create an action to set the app state to loading', () => {
    const expectedAction = {
      type: constants.APP_IS_LOADING,
    }
    expect(actions.appIsLoadingAction()).toEqual(expectedAction)
  })
  it('should create an action to set the app state to not loading', () => {
    const expectedAction = {
      type: constants.APP_FINISHED_LOADING,
    }
    expect(actions.appFinishedLoadingAction()).toEqual(expectedAction)
  })
})

describe('app reducer', () => {
  it('should return the initial app state', () => {
    expect(reducer(undefined, {})).toEqual({
      isLoading: true,
    })
  })

  it('should handle app loading state', () => {
    expect(
      reducer({}, {
        type: constants.APP_IS_LOADING,
      })
    ).toEqual({
      isLoading: true,
    })
    expect(
      reducer({}, {
        type: constants.APP_FINISHED_LOADING,
      })
    ).toEqual({
      isLoading: false,
    })
  })
})