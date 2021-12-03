/*
 *
 * Otp reducer
 *
 */
import produce from 'immer';
import { fromJS } from 'immutable';
import { createActions } from 'reduxsauce';

export const initialState = fromJS({});

export const { Types: otpTypes, Creators: otpCreators } = createActions({
  requestVerifyOtp: ['data'],
  otpVerified: ['data'],
  otpInvalid: ['error'],
  completeFetch: [],
  requestResendOtp: ['data'],
  failedOtpResending: ['error'],
  otpResent: ['data'],
  initiateSilentLogin: [],
  rWaLogin: ['data'],
  sWaLogin: ['data'],
  fWaLogin: ['error'],
  ssoLogin: ['data'],
  sssoLogin: ['data'],
  fssoLogin: ['data'],
  reset: ['data']
});

/* eslint-disable default-case, no-param-reassign */
export const otpReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case otpTypes.REQUEST_VERIFY_OTP:
        return state.set('otpData', action.data).set('loading', true);
      case otpTypes.OTP_VERIFIED:
        return state.set('otpVerificationResponse', action.data).set('otpData', null);
      case otpTypes.OTP_INVALID:
        return state
          .set('otpVerificationResponse', null)
          .set('loading', false)
          .set('otpData', null)
          .set('otpFailure', action.error);
      case otpTypes.COMPLETE_FETCH:
        return state.set('loading', false);
      case otpTypes.REQUEST_RESEND_OTP:
        return state.set('loading', true).set('otpFailure', null);
      case otpTypes.FAILED_OTP_RESENDING:
        return state.set('loading', false);
      case otpTypes.OTP_RESENT:
        return state.set('loading', false);
      case otpTypes.INITIATE_SILENT_LOGIN:
        return state;
      case otpTypes.R_WA_LOGIN:
        return state.set('loading', true);
      case otpTypes.S_WA_LOGIN:
        return state.set('loading', false);
      case otpTypes.F_WA_LOGIN:
        return state.set('loading', false);
      case otpTypes.SSO_LOGIN:
        return state.set('loading', true);
      case otpTypes.SSSO_LOGIN:
        return state.set('loading', false);
      case otpTypes.FSSO_LOGIN:
        return state.set('loading', false);
      case otpTypes.RESET:
        return initialState;
      default:
        return state;
    }
  });

export default otpReducer;
