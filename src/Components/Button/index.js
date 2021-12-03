/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Spin } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';
import T from '../T';
// import * as colors from '@app/themes/colors';
// import media from '@app/themes/media';

const StyledButton = styled.button`
  ${props => props.color && `background-color: ${props.color};`}
  ${props => props.totalWidth && `width: ${props.totalWidth}%;`}
  // ${props => props.borderColor && `border: 2px solid ${props.borderColor};`}
  color: white;
  border: none;
  cursor: pointer;
  height: 3rem;
  font-size: 1.25rem;
  line-height: 1.5;
  // border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  // &:hover{
  //   opacity: 0.7;
  // }
  &:active {
    border: none;
  }

`;
const Text = styled(T)`
  ${props => props.color && `color: ${props.color};`}
  margin: 0;
  font-size: 1.125rem ;

`;
const Icon = styled.img`
  height: 2.25rem;
`;
// const Loader = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function Button({
  loading,
  text,
  icon,
  btnColor = `green`,
  onClick,
  // borderColor,
  width = 100,
  style = {},
}) {
  return (
    <StyledButton
      // borderColor={borderColor}
      style={style}
      totalWidth={width}
      onClick={onClick}
      color={btnColor}
      data-testid="button"
    >
      {icon && <Icon src={icon} />}
      {/* {loading && <Spin indicator={Loader} />} */}
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.any,
  id: PropTypes.string,
  btnColor: PropTypes.string,
  textColor: PropTypes.string,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  borderColor: PropTypes.string,
  width: PropTypes.number,
  style: PropTypes.object,
};

export default memo(Button);
