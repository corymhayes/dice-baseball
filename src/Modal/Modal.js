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
            {this.props.message}
          </p>

          <button onClick={this.props.click}>{this.props.buttonTitle}</button>
          
        </div>
      </div>
    )
  }
}

export default Modal;