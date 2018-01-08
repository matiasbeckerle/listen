import React from 'react';

class Player extends React.Component {
  render() {
    return (
      <div>
        <button>&lt; Prev</button>
        <button>Play/Pause</button>
        <button>Stop</button>
        <button>Next &gt;</button>
      </div>
    );
  }
}

export default Player;
