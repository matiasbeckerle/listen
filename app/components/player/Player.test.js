import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Player from './Player';

function setup(props) {
  return shallow(<Player {...props} />);
}

test('<Player /> renders accurately', () => {
  const wrapper = setup();
  expect(wrapper.find('audio')).toHaveLength(1);
  expect(wrapper.find('.player-previous')).toHaveLength(1);
  expect(wrapper.find('.player-next')).toHaveLength(1);
  expect(wrapper.find('.player-playpause')).toHaveLength(1);
  expect(wrapper.find('.player-stop')).toHaveLength(1);
});

test('<Player /> Play/Pause button reacts to clicks', () => {
  const onButtonClick = sinon.spy();
  const wrapper = setup({ onPlayPause: onButtonClick });
  const playPauseButton = wrapper.find('.player-playpause');
  playPauseButton.simulate('click');
  expect(onButtonClick.called).toBeTruthy();
});

test('<Player /> Stop button reacts to clicks', () => {
  const onButtonClick = sinon.spy();
  const wrapper = setup({ onStop: onButtonClick });
  const stopButton = wrapper.find('.player-stop');
  stopButton.simulate('click');
  expect(onButtonClick.called).toBeTruthy();
});

test('<Player /> Previous button reacts to clicks', () => {
  const onButtonClick = sinon.spy();
  const wrapper = setup({ onPrevious: onButtonClick });
  const previousButton = wrapper.find('.player-previous');
  previousButton.simulate('click');
  expect(onButtonClick.called).toBeTruthy();
});

test('<Player /> Next button reacts to clicks', () => {
  const onButtonClick = sinon.spy();
  const wrapper = setup({ onNext: onButtonClick });
  const nextButton = wrapper.find('.player-next');
  nextButton.simulate('click');
  expect(onButtonClick.called).toBeTruthy();
});
