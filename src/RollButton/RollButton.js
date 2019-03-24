import React, { Component } from 'react';

import './style.scss';

class RollButton extends Component {
  render(){
    return(
      <>
        <button onClick={this.props.click}>swing</button>
      </>
    )
  }
}

export default RollButton;