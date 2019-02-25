import React, { Component } from 'react';

import '../font/stylesheet.css';
import './style.scss';


class Play extends Component {
  render() {
    return (
      <div className="play">
        <h1>{this.props.fieldRuling}</h1>
      </div>
    );
  }
}

export default Play;