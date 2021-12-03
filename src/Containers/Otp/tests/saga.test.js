/**
 * Test otp sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest } from 'redux-saga/effects';
import otpSaga, { defaultFunction } from '../saga';
import { otpTypes } from '../reducer';

describe('Otp saga tests', () => {
  const generator = otpSaga();

  it('should start task to watch for DEFAULT_ACTION action', () => {
    expect(generator.next().value).toEqual(takeLatest(otpTypes.DEFAULT_ACTION, defaultFunction));
  });
});
