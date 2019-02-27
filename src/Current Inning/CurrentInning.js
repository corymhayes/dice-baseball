import React, { Component } from 'react';

import './style.scss';

class CurrentInning extends Component {
  render() {
    return (
      <>
        {
          this.props.inning === 1 ?
            <div className="inning">
              <div className="number">
                <h1>{this.props.inning}</h1>
                <div className="ordinal">st</div>
              </div>
              <span className="title">inning</span>
            </div>
          : this.props.inning === 2 ?
            <div className="inning">
              <div className="number">
                <h1>{this.props.inning}</h1>
                <div className="ordinal">nd</div>
              </div>
              <span className="title">inning</span>
            </div>
          : this.props.inning === 3 ?
            <div className="inning">
              <div className="number">
                <h1>{this.props.inning}</h1>
                <div className="ordinal">rd</div>
              </div>
              <span className="title">inning</span>
            </div>
          :
            <div className="inning">
              <div className="number">
                <h1>{this.props.inning}</h1>
                <div className="ordinal">th</div>
              </div>
              <span className="title">inning</span>
            </div>
          }
      </>
    );
  }
}

export default CurrentInning;