import React, { Component } from 'react';

import './style.scss';

class CurrentInning extends Component {
  render() {
    return (
      <>
        {
          this.props.inning === 1 ?
              <div className="number">
                <div className="one">1</div>
                <div className="st">
                  st<br />
                  <span className="inning">inning</span>
                </div>
              </div>
          : this.props.inning === 2 ?
            <div className="number">
              <div className="one">2</div>
              <div className="st">
                nd<br />
                <span className="inning">inning</span>
              </div>
            </div>
          : this.props.inning === 3 ?
            <div className="number">
              <div className="one">3</div>
              <div className="st">
                rd<br />
                <span className="inning">inning</span>
              </div>
            </div>
          :
            <div className="number">
              <div className="one">{this.props.inning}</div>
              <div className="st">
                th<br />
                <span className="inning">inning</span>
              </div>
            </div>
          }
      </>
    );
  }
}

export default CurrentInning;