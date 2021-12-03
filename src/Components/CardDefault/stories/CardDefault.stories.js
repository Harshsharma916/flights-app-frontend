/**
 *
 * Stories for CardDefault
 *
 * @see https://github.com/storybookjs/storybook
 *
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import CardDefault from '../index';

storiesOf('CardDefault').add('simple', () => <CardDefault id={text('id', 'CardDefault')} />);
