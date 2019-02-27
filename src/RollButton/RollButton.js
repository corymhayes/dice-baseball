import React, { Component } from 'react';

import './style.scss';

class RollButton extends Component {
  render(){
    return(
      <div>
        <button onClick={this.props.click}>roll</button>
      </div>
    )
  }
}

export default RollButton;