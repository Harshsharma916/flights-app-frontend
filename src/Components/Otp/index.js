/**
 *
 * Otp
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'antd';
import OtpInput from 'react-otp-input';

function Otp({ otp, setOtp, otpError, borderColor = '#24A0ED' }) {
  return (
    <OtpInput
      isInputNum
      containerStyle={{ justifyContent: 'space-evenly', alignItems: 'center', margin: '0.75rem 0' }}
      inputStyle={{
        width: '3rem',
        height: '3rem',
        borderRadius: '0.5rem',
        border: `1px solid black`,
      }}
      value={otp}
      onChange={setOtp}
      numInputs={4}
    />
  );
}

Otp.propTypes = {
  otp: PropTypes.string,
  setOtp: PropTypes.func,
  otpError: PropTypes.object,
  borderColor: PropTypes.string,
};

export default memo(Otp);
