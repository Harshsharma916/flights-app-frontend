/**
 *
 * CardDefault
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { media } from '@themes';
const Wrapper = styled.div`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  padding: 2rem;
  // height: fit-content;  
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // align-items: center;
  // justify-content: center;
  border-radius: 8px;
  background: white;
`;

function CardDefault({ children, style, onClick }) {
  return (
    <Wrapper onClick={onClick} style={style} data-testid="card-default">
      {children}
    </Wrapper>
  );
}

export default memo(CardDefault);
