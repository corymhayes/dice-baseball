// Components
import React, { Component } from 'react'
import Dice from '../Dice Roll/DiceRoll';

// Images
import logo from '../images/transparent-logo.png';

// Styles
import './style.scss';


class Modal extends Component{
  render(){
    return (
      <div className="modal-container">
        <div className="modal-body">
          <img src={logo} alt="logo" />

          <p>
            Welcome to Yakker Dice! A game of baseball where plays are decided on by the roll of the dice.
            Roll a double two receive a double play, roll snake eyes receive a home run. Below is a list of all the
            possible outcomes from each dice roll.
          </p>

          <button onClick={this.props.click}>let's play</button>
          
        </div>
      </div>
    )
  }
}

export default Modal;