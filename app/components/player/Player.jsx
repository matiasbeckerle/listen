import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handlePlayPause() {
    this.props.onPlayPause();
  }

  handleStop() {
    this.props.onStop();
  }

  handlePrevious() {
    this.props.onPrevious();
  }

  handleNext() {
    this.props.onNext();
  }

  render() {
    return (
      <div>
        <audio controls>
          <source src="../app/temp/air.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <ol>
          <li>
            <button onClick={this.handlePrevious} className="player-previous">
              &lt; Prev
            </button>
          </li>
          <li>
            <button onClick={this.handlePlayPause} className="player-playpause">
              Play/Pause
            </button>
          </li>
          <li>
            <button onClick={this.handleStop} className="player-stop">
              Stop
            </button>
          </li>
          <li>
            <button onClick={this.handleNext} className="player-next">
              Next &gt;
            </button>
          </li>
        </ol>
      </div>
    );
  }
}

Player.propTypes = {
  onPlayPause: PropTypes.func,
  onStop: PropTypes.func,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func
};

export default Player;
