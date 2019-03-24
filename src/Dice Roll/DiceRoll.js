import React, { Component } from 'react';
import Dice from './Dice/Dice';

import './style.scss';

class DiceRoll extends Component {
  render(){
    return(
      <div className="roll">
        <div className="die">
          <Dice diceAmount = {this.props.amount1} />
          <Dice diceAmount = {this.props.amount2} />
        </div>

        {/* <RollButton click={this.props.click} /> */}
      </div>
    )
  }
}

export default DiceRoll;