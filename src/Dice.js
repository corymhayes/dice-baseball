import React, { Component } from 'react';
import './App.css';

class Dice extends Component {
  render() {
    return (
      <div>{this.props.dice}</div>
    );
  }
}

export default Dice;
