import { fromJS } from 'immutable';
import { selectOtpDomain } from '../selectors';

describe('Otp selector tests', () => {
  let mockedState;

  beforeEach(() => {
    mockedState = {
      otp: fromJS({}),
    };
  });

  it('should select the user state', () => {
    expect(selectOtpDomain(mockedState)).toEqual(mockedState.otp.toJS());
  });
});
