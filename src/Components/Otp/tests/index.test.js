/**
 *
 * Tests for Otp
 *
 */

import React from 'react';
// import { fireEvent } from '@testing-library/dom'
import { renderWithIntl } from '@utils/testUtils';
import Otp from '../index';

describe('<Otp />', () => {
  it('should render and match the snapshot', () => {
    const { baseElement } = renderWithIntl(<Otp />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should contain 1 Otp component', () => {
    const { getAllByTestId } = renderWithIntl(<Otp />);
    expect(getAllByTestId('otp').length).toBe(1);
  });
});
