import React, { Component } from 'react';

import '../../font/stylesheet.css';
import './style.scss';


class Outs extends Component {
  render() {
    return (
      <div className="outs">
        <span className="number-of-outs">{this.props.outs}</span>
        <h3>outs</h3>
      </div>
    );
  }
}

export default Outs;