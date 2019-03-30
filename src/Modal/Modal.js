// Components
import React, { Component } from 'react'

// Images
import logo from '../images/transparent-logo.png';

// Styles
import './Modal.scss';


class Modal extends Component{
  render(){
    return (
      <div className="modal-container">
        <div className="modal-body">
          <img src={logo} alt="logo" />

          <p>
            {this.props.message}
          </p>

          <button className="modal-button" onClick={this.props.click}>{this.props.buttonTitle}</button>
          
        </div>
      </div>
    )
  }
}

export default Modal;