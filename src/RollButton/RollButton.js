import React, { Component } from 'react';

import './RollButton.scss';

class RollButton extends Component {
  render(){
    return(
      <>
        <button className="roll-button" onClick={this.props.click}>swing</button>
      </>
    )
  }
}

export default RollButton;