import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Loader from './Loader';

storiesOf('Loader', module)
  .add('default', () => (
    <Loader />
  ));
