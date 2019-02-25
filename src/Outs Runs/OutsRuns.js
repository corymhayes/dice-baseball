import React, { Component } from 'react';
import Outs from './Outs/Outs';
import Runs from './Runs/Runs';

import '../font/stylesheet.css';
import './style.scss';


class OutsRuns extends Component {
  render() {
    return (
      <div className="outs-runs">
        <Outs outs={this.props.outs} />
        <Runs runs={this.props.runs} />
      </div>
    );
  }
}

export default OutsRuns;