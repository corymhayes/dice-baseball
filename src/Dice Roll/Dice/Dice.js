import React, { Component } from 'react';
import './Dice.scss';

class Dice extends Component {
  render(){
    return(
      <div className="dice">
        {
          this.props.diceAmount === 1 ?
            <div className="one">
              <div className="dot dot-one"></div>
            </div>
          : 
          this.props.diceAmount === 2 ?
            <div className="two">
              <div className="dot dot-one"></div>
              <div className="dot dot-two"></div>
            </div>
          :
          this.props.diceAmount === 3 ?
            <div className="three">
              <div className="dot dot-one"></div>
              <div className="dot dot-two"></div>
              <div className="dot dot-three"></div>
            </div>
          :
          this.props.diceAmount === 4 ?
            <div className="four">
              <div className="dot dot-one"></div>
              <div className="dot dot-two"></div>
              <div className="dot dot-three"></div>
              <div className="dot dot-four"></div>
            </div>
          :
          this.props.diceAmount === 5 ?
            <div className="five">
              <div className="dot dot-one"></div>
              <div className="dot dot-two"></div>
              <div className="dot dot-three"></div>
              <div className="dot dot-four"></div>
              <div className="dot dot-five"></div>
            </div>
          :
          this.props.diceAmount === 6 ?
            <div className="six">
              <div className="dot dot-one"></div>
              <div className="dot dot-two"></div>
              <div className="dot dot-three"></div>
              <div className="dot dot-four"></div>
              <div className="dot dot-five"></div>
              <div className="dot dot-six"></div>
            </div>
          :
            <></>
        }
      </div>
    )
  }
}

export default Dice;