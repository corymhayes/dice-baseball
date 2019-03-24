import React, { Component } from 'react';

import '../font/stylesheet.css';
import './style.scss';


class CurrentSide extends Component {
  render() {
    return (
      <div className="current-side">
        <h1>{this.props.side}</h1>
      </div>
    );
  }
}

export default CurrentSide;