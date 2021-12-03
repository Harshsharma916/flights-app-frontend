import { createSelector } from 'reselect';
import { initialState } from './reducer';
import get from 'lodash/get';
/**
 * Direct selector to the otp state domain
 */

const selectOtpDomain = state => (state.otp || initialState).toJS();
const selectLoginDomain = state => state.login.toJS();
const makeSelectOtp = () =>
  createSelector(
    selectOtpDomain,
    substate => substate,
  );
export const selectOtpResponse = () =>
  createSelector(
    selectLoginDomain,
    substate => get(substate, 'otpResponse', null),
  );
export const selectOtpError = () =>
  createSelector(
    selectLoginDomain,
    substate => get(substate, 'otpError', null),
  );
export const selectOtpData = () =>
  createSelector(
    selectLoginDomain,
    substate => get(substate, 'otpData', {}),
  );
export const selectLoading = () =>
  createSelector(
    selectOtpDomain,
    substate => get(substate, 'loading', false),
  );
export const selectOtpFailure = () =>
  createSelector(
    selectOtpDomain,
    substate => get(substate, 'otpFailure', null),
  );
export default makeSelectOtp;
export { selectOtpDomain };
