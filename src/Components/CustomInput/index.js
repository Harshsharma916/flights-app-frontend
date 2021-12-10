/**
 *
 * CustomInput
 *
 */

import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const CI = styled(Input)`
  height: 3rem;
  &.ant-input,
  &.ant-input-affix-wrapper {
    padding-left: 1rem;
    background-color: white;
    border: 1px solid black;
    width: 100%;
    border-radius: 8px;
    &.ant-form-item-label {
      font-size: 20px;
    }
    &::placeholder {
      color: grey;
    }
  }
`;

function CustomInput(props) {
  return <CI data-testid={'custom-input'} {...props} />;
}

CustomInput.propTypes = {};

export default CustomInput;
