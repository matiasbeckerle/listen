import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Player from './player/Player';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

test('<App /> renders accurately', () => {
  expect(wrapper.find(Player)).toHaveLength(1);
});
