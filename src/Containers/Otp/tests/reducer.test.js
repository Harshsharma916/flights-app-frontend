// import produce from 'immer'
import { fromJS } from 'immutable';
import { otpReducer, otpTypes, initialState } from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('Otp reducer tests', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state', () => {
    expect(otpReducer(undefined, {})).toEqual(state);
  });

  it('should return the update the state when an action of type DEFAULT is dispatched', () => {
    const expectedResult = fromJS(state.toJS()).set('somePayload', 'Tapan Awasthi');
    expect(
      otpReducer(state, {
        type: otpTypes.DEFAULT_ACTION,
        somePayload: 'Tapan Awasthi',
      }),
    ).toEqual(expectedResult);
  });
});
