import React, { Component } from 'react'
import Dice from '../Dice Roll/Dice/Dice'
import DiceRoll from '../Dice Roll/DiceRoll'

import './style.scss';


class DiceMenu extends Component {
  render(){
    return(
        <div className="dice-menu">
          <div className="dice-combos-body">
            <div className="dice-combos-title">
              <h1>Dice<br />Combinations</h1>
              <div className="under-graphic">
                <hr />
                <div className="graphic">
                  <Dice diceAmount={5} />
                  <Dice diceAmount={4} />
                  <Dice diceAmount={2} />
                  <Dice diceAmount={3} />
                </div>
                <hr />
              </div>
            </div>
          
            <div className="dice-combos">
              <div className="dice-combo">
                <DiceRoll amount1={1} amount2={1} />
                <h5>home run</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={3} amount2={3} />
                <h5>walk</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={1} amount2={2} />
                <h5>double</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={3} amount2={4} />
                <h5>single</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={1} amount2={3} />
                <h5>flyout</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={3} amount2={5} />
                <h5>ground out</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={1} amount2={4} />
                <h5>walk</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={3} amount2={6} />
                <h5>fly out</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={1} amount2={5} />
                <h5>pop out</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={4} amount2={4} />
                <h5>walk</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={1} amount2={6} />
                <h5>single</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={4} amount2={5} />
                <h5>pop out</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={2} amount2={2} />
                <h5>double play</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={4} amount2={6} />
                <h5>out</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={2} amount2={3} />
                <h5>ground out</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={5} amount2={5} />
                <h5>strike out</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={2} amount2={4} />
                <h5>out</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={5} amount2={6} />
                <h5>sac fly<br /><span>runners advance 1 base</span></h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={2} amount2={5} />
                <h5>single<br /><span>runners advance 2 bases</span></h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={6} amount2={6} />
                <h5>triple</h5>
              </div>
              <div className="dice-combo">
                <DiceRoll amount1={2} amount2={6} />
                <h5>out</h5>
              </div>
            </div>
          </div>
      
          <div className="menu-overlay">
            <button onClick={this.props.menuClose}><div className="dot"></div></button>
          </div>
        </div>
    )
  }
}

export default DiceMenu