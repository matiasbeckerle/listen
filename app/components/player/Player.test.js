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

test('<Player /> Play/Pause button starts playing when music is paused', () => {
  // Arrange.
  const onPlay = sinon.spy();
  const audioElement = { paused: true, play: onPlay };
  const onButtonClick = sinon.spy();
  const wrapper = setup({ onPlayPause: onButtonClick });
  wrapper.instance().handleAudioElementRef(audioElement);
  const playPauseButton = wrapper.find('.player-playpause');

  // Act.
  playPauseButton.simulate('click');

  // Assert.
  expect(onButtonClick.called).toBeTruthy();
  expect(onPlay.called).toBeTruthy();
});

test('<Player /> Play/Pause button pauses when music is playing', () => {
  // Arrange.
  const onPause = sinon.spy();
  const audioElement = { paused: false, pause: onPause };
  const onButtonClick = sinon.spy();
  const wrapper = setup({ onPlayPause: onButtonClick });
  wrapper.instance().handleAudioElementRef(audioElement);
  const playPauseButton = wrapper.find('.player-playpause');

  // Act.
  playPauseButton.simulate('click');

  // Assert.
  expect(onButtonClick.called).toBeTruthy();
  expect(onPause.called).toBeTruthy();
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
