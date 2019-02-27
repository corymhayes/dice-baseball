import React, { Component } from 'react';
import './style.scss';

class PlayingField extends Component{
  render(){
    return(
      // <div className="playing-board">
        <div className="field">
          {/* <div className="bases"> */}
          {
            this.props.firstBase === 1 ? 
              <div className="first-base runner"></div>
            :
              <div className="first-base"></div>
          }

          {
            this.props.secondBase === 1 ? 
              <div className="second-base runner"></div>
            :
              <div className="second-base"></div>
          }

          {
              this.props.thirdBase === 1 ? 
              <div className="third-base runner"></div>
            :
              <div className="third-base"></div>
          }
          {/* </div> */}
        </div>
      // </div> 
    )
  }
}

export default PlayingField;