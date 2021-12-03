/**
 *
 * Stories for Otp
 *
 * @see https://github.com/storybookjs/storybook
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Otp from '../index';

storiesOf('Otp').add('simple', () => <Otp id={text('id', 'Otp')} />);
