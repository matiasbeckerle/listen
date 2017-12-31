import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>{process.versions.node}</div>,
  document.getElementsByTagName('body')[0]);
