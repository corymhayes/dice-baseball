import React, { Component } from 'react';

import '../../font/stylesheet.css';
import './style.scss';


class Runs extends Component {
  render() {
    return (
      <div className="runs">
        <span className="number-of-runs">{this.props.runs}</span>
        <h3>runs</h3>
      </div>
    );
  }
}

export default Runs;