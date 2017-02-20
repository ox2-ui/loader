/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Loader from './Loader';

const handler = () => true;

it('renders correctly', () => {
  const wrapper = mount(
    <Loader />
  );

  expect(wrapper).toMatchSnapshot();
});
