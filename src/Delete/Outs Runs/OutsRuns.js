import React, { Component } from 'react';

import './style.scss';


class OutsRuns extends Component {
  render() {
    return (
      <div className="outs-runs">
        <span className="number-of">{this.props.number}</span>
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

export default OutsRuns;