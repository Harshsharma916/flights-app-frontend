/**
 *
 * Tests for Otp
 *
 *
 */

import React from 'react';
import { renderProvider } from '@utils/testUtils';
// import { fireEvent } from '@testing-library/dom'
import { OtpTest as Otp } from '../index';

describe('<Otp /> container tests', () => {
  // let submitSpy

  beforeEach(() => {
    // submitSpy = jest.fn()
  });
  it('should render and match the snapshot', () => {
    const { baseElement } = renderProvider(<Otp />);
    expect(baseElement).toMatchSnapshot();
  });
});
