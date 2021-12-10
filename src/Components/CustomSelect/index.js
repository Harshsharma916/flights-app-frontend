/**
 *
 * CustomSelect
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Select } from 'antd';


const StyledCustomSelect = styled(Select)`
  && {
    &.ant-select:not(.ant-select-disabled):hover .ant-select-selector {
      border-right-width: 0px !important;
    }
    .ant-select-selection-search input {
      height: 100% !important;
    }

    &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customise-input) .ant-select-selector {
      box-shadow: none;
      border-right-width: 0px !important;
    }
    &.ant-select {
      border-radius: 8px;
      border: solid 1px black;
    }
    &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
      height: 3rem;
      line-height: 3rem;
      border-radius: 8px;
      width: 100%;
      border: solid 0 black;
    }
    &.ant-select-single .ant-select-selector .ant-select-selection-item,
    &.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
      line-height: 3rem;
      text-align: left;
    }
    &.ant-select-multiple:not(.ant-select-customize-input) .ant-select-selector {
      height: 3rem;
      width: 100%;
      border: solid 0 black;
      overflow-y: auto;
      && {
        border-right-width: 0px !important;
      }
    }
    .ant-select-multiple,
    .ant-select-selection-item,
    .ant-select-multiple,
    .ant-select-selection-placeholder {
      text-align: left;
    }
    &.ant-select-arrow {
      color: black;
    }
    .ant-select-selector {
      border-radius: 8px !important;
    }
    div::-webkit-scrollbar-thumb {
      background-color: lightgray;
      border: 4px solid transparent;
      border-radius: 8px;
      background-clip: padding-box;
    }
    div::-webkit-scrollbar {
      width: 16px;
    }
    .ant-select-selection-placeholder {
      color: black;
    }
  }
`;
function CustomSelect(props) {
  return (
    <StyledCustomSelect data-testid={'custom-select'} getPopupContainer={trigger => trigger.parentNode} {...props} />
  );
}

CustomSelect.propTypes = {};

export default CustomSelect;
