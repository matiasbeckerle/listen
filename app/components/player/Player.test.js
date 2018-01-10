import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Player />);
});

test('<Player /> renders accurately', () => {
  expect(wrapper.find('button')).toHaveLength(4);
});
