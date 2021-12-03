/**
 *
 * T
 *
 */

import React, { memo } from "react";
import styled from "styled-components";
// import { FormattedMessage } from 'react-intl';
// import { PropTypes } from 'prop-types';
// import { fonts } from '@app/themes';

const StyledText = styled.p`
  && {
    margin: 0;
    ${(props) =>
      props.marginBottom && `margin-bottom: ${props.marginBottom}px;`};
  }
`;
// const getFontStyle = type => (fonts.style[type] ? fonts.style[type] : () => {});
export const T = ({ type, text, id, marginBottom, values, ...otherProps }) => (
  <StyledText
    data-testid="t"
    marginBottom={marginBottom}
    {...otherProps}
  ></StyledText>
);

T.defaultProps = {
  values: {},
  type: "standard",
};

const TextComponent = memo(T);
export default TextComponent;
