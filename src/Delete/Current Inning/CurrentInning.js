import React, { Component } from 'react';

import './style.scss';

class CurrentInning extends Component {
  render() {
    return (
      <>
        {
          this.props.inning === 1 ?
            <div className="inning-container">
              <div className="number">
                <h1>{this.props.inning}</h1>
                <div className="words">
                  <div className="ordinal">st</div>
                  <span className="title">inning</span>
                </div>
              </div>
            </div>
          : this.props.inning === 2 ?
            <div className="inning-container">
              <div className="number">
                <h1>{this.props.inning}</h1>
                <div className="words">
                  <div className="ordinal">nd</div>
                  <span className="title">inning</span>
                </div>
              </div>
            </div>
          : this.props.inning === 3 ?
            <div className="inning-container">
              <div className="number">
                <h1>{this.props.inning}</h1>
                <div className="words">
                  <div className="ordinal">rd</div>
                  <span className="title">inning</span>
                </div>
              </div>
            </div>
          :
            <div className="inning-container">
              <div className="number">
                <h1>{this.props.inning}</h1>
                <div className="words">
                  <div className="ordinal">th</div>
                  <span className="title">inning</span>
                </div>
              </div>
            </div>
          }
      </>
    );
  }
}

export default CurrentInning;