import React, { Component } from 'react';

import './OutsRuns.scss';


class OutsRuns extends Component {
  render() {
    return (
      <div className="outs-runs">
        {
          this.props.outAmount > 0 ?
            <div className="out-dot marker"></div>
          : 
            <div className="out-dot"></div>
        }
        <h3>outs</h3>
        {
          this.props.outAmount > 1 ?
            <div className="out-dot marker"></div>
          : 
            <div className="out-dot"></div>
        }          
      </div>
    );
  }
}

export default OutsRuns;