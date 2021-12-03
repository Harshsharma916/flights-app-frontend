import { takeLatest, call, put, select } from 'redux-saga/effects';
import { otpTypes, otpCreators } from './reducer';
import {
  verifyOTPService,
  getUserProfile,
  getUserProducts,
  getUserPosts,
  resendOTPService,
  whatsappLoginService,
  claimPostService
} from 'services/user-services';
import { message } from 'antd';
import { appIntl } from '@components/IntlGlobalProvider';
import { appCreators } from 'containers/App/reducer';
import { getApiClient } from '@utils/apiUtils';
import history from '@utils/history';
import routeConstants from '@app/utils/routeConstants';

const { REQUEST_VERIFY_OTP, REQUEST_RESEND_OTP, INITIATE_SILENT_LOGIN, R_WA_LOGIN, SSO_LOGIN } = otpTypes;

export function* verifyOtp(action) {
  // TODO: OPTIMISE
  const response = yield call(verifyOTPService, { ...action.data, source: 'PHYSICAL_US' });
  const { data, ok } = response;
  if (ok && !data.error) {
    yield put(otpCreators.otpVerified(data));
    yield put(appCreators.setToken(data.data.token));
    getApiClient().setHeader('authorization', data.data.token);
    yield put(appCreators.setUserProfile(data.data.userData));
    yield put(otpCreators.initiateSilentLogin());
    // eslint-disable-next-line no-undef
    webengage.user.login(action.data.phoneNumber);
    // eslint-disable-next-line no-undef
    webengage.user.setAttribute('we_phone', `+91${action.data.phoneNumber}`);
    message.success(appIntl().formatMessage({ id: 'otp_valid' }));
    // console.log("PROFILE",data);
    // if (action.data?.callback) {
    //   history.replace(action.data?.callback?.pathname);
    // } else {
    //   history.replace(routeConstants.addVideos.route);
    // }
    const state = yield select();
    const redirectTo = state?.App?.toJS().redirectTo;
    const postId = state?.addVideos?.toJS().keptPost?.id;
    yield call(claimPostService, {postId: postId});
    if(!data.data?.user_profile_name || !data.data?.user_profile_email) {
      history.replace(routeConstants.completeProfile.route);
    }
    else if (redirectTo) {
      history.replace(redirectTo);
      yield put(appCreators.removeRedirectTo());
    } else {
      history.replace(routeConstants.addVideos.route);
    }
  } else {
    message.error(appIntl().formatMessage({ id: 'invalid_otp' }));
    yield put(otpCreators.otpInvalid(data));
  }
}
export function* whatsAppLogin(action) {
  getApiClient().setHeader('authorization', process.env.WA_PROMOTER_ULTRON_TOKEN);
  const response = yield call(whatsappLoginService, action.data);
  const { data, ok } = response;
  if (ok && !data.error) {
    yield put(otpCreators.sWaLogin(data));
    yield put(appCreators.setToken(data.data.token));
    yield put(appCreators.setUserProfile(data.data.userData));
    yield put(otpCreators.initiateSilentLogin());
    message.success('Success');
    history.replace(routeConstants.addVideos.route);
  } else {
    message.error('Something went wrong! Please try again');
    yield put(otpCreators.otpInvalid(data));
  }
}
export function* ssoLogin(action) {}
export function* fetchUserData(action) {
  const userProfileRes = yield call(getUserProfile);
  if (userProfileRes?.ok && !userProfileRes?.data.error) {
    yield put(appCreators.setUserProfile(userProfileRes?.data?.data));
    // const userProductsRes = yield call(getUserProducts);
    // if (userProductsRes?.ok && !userProductsRes?.data.error) {
    //   yield put(appCreators.setUserProducts(userProductsRes?.data?.data));
    //   const userPostsRes = yield call(getUserPosts);
    //   if (userPostsRes?.ok && !userPostsRes?.data.error) {
    //     yield put(appCreators.setUserPosts(userPostsRes?.data?.data));
    //     yield put(otpCreators.completeFetch());
    //   }
    // }
  } else {
    message.error('Failed to fetch profile');
  }
}
export function* resendOtp(action) {
  // TODO: OPTIMISE
  const response = yield call(resendOTPService, action.data);
  const { data, ok } = response;
  if (ok && !data.error) {
    yield put(otpCreators.otpResent(data?.data));
    message.success(appIntl().formatMessage({ id: 'otp_resent' }));
  } else {
    yield put(otpCreators.failedOtpResending(data));
    message.error(appIntl().formatMessage({ id: 'something_went_wrong' }));
  }
}

export default function* otpSaga() {
  yield takeLatest(R_WA_LOGIN, whatsAppLogin);
  yield takeLatest(REQUEST_VERIFY_OTP, verifyOtp);
  yield takeLatest(INITIATE_SILENT_LOGIN, fetchUserData);
  yield takeLatest(REQUEST_RESEND_OTP, resendOtp);
  yield takeLatest(SSO_LOGIN, ssoLogin);
}
