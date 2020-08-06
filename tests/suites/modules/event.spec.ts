import * as constants from '../../../src/modules/events/constants';
import * as actions from '../../../src/modules/events/actions';
import reducer from '../../../src/modules/events';

const dummyEvent = {
  title: 'bla',
  description: 'bla bla',
  img: 'bla.jpg',
}

const dummyError = {
  message: 'Ooups',
}

describe('events module actions', () => {
  it('should create an action to start fetching events', () => {
    const expectedAction = {
      type: constants.FETCH_EVENTS_STARTED,
    }
    expect(actions.fetchEventsStarted()).toEqual(expectedAction)
  })
  it('should create an action to load fetched events', () => {
    const events = [dummyEvent, dummyEvent]
    const expectedAction = {
      type: constants.FETCH_EVENTS_SUCCEEDED,
      payload: { events },
    }
    expect(actions.fetchEventsSucceeded(events)).toEqual(expectedAction)
  })
  it('should create an action to report error when fetching events is failed', () => {
    const expectedAction = {
      type: constants.FETCH_EVENTS_FAILED,
      payload: {error: dummyError},
    }
    expect(actions.fetchEventsFailed(dummyError)).toEqual(expectedAction)
  })

  it('should create an action to start fetching event', () => {
    const expectedAction = {
      type: constants.FETCH_EVENT_STARTED,
    }
    expect(actions.fetchEventStarted()).toEqual(expectedAction)
  })
  it('should create an action to load fetched event', () => {
    const expectedAction = {
      type: constants.FETCH_EVENT_SUCCEEDED,
      payload: { event: dummyEvent },
    }
    expect(actions.fetchEventSucceeded(dummyEvent)).toEqual(expectedAction)
  })
  it('should create an action to report error when fetching event is failed', () => {
    const expectedAction = {
      type: constants.FETCH_EVENT_FAILED,
      payload: { error: dummyError },
    }
    expect(actions.fetchEventFailed(dummyError)).toEqual(expectedAction)
  })

})

describe('app reducer', () => {
  it('should return the initial Events module state', () => {
    expect(reducer(undefined, {})).toEqual({
      events: [],
      event: {
        title: '',
        description: '',
        img: '',
      },
    })
  })

  it('should handle fetching events', () => {
    expect(
      reducer({}, {
        type: constants.FETCH_EVENTS_SUCCEEDED,
        payload: { events: [dummyEvent, dummyEvent] },
      })
    ).toEqual({
      events: [dummyEvent, dummyEvent],
    })
    expect(
      reducer({}, {
        type: constants.FETCH_EVENTS_FAILED,
        payload: { error: dummyError },
      })
    ).toEqual({
      error: dummyError,
    })

    expect(
      reducer({}, {
        type: constants.FETCH_EVENT_SUCCEEDED,
        payload: { event: dummyEvent },
      })
    ).toEqual({
      event: dummyEvent,
    })
    expect(
      reducer({}, {
        type: constants.FETCH_EVENT_FAILED,
        payload: { error: dummyError },
      })
    ).toEqual({
      error: dummyError,
    })
  })
})