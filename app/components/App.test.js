import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Player from './player/Player';

function setup(props) {
  return shallow(<App {...props} />);
}

test('<App /> renders accurately', () => {
  const wrapper = setup();
  expect(wrapper.find(Player)).toHaveLength(1);
});
