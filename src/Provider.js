import React, { Component } from 'react'
import DiceRollDecisions from './DiceRollDecisions'

export const Context = React.createContext();

export default class Provider extends Component{
  state = {
    currentSide: 'home',
    currentInning: 1,
    homeScore: 0,
    awayScore: 0,
    outs: 0,
    bases: {
      firstBase: 0,
      secondBase: 0,
      thirdBase: 0,
      homePlate: 0
    },
    dice1: 0,
    dice2: 0,
    fieldRuling: ''
  }

  render(){
    return(
      <Context.Provider value={{
        state: this.state,
        rollDice: () => {
          let bases = this.state.bases;

          let diceRollNumber1 = Math.floor(Math.random() * (6-1)) + 1;
          let diceRollNumber2 = Math.floor(Math.random() * (6-1)) + 1;
          // let fieldRuling = DiceRollDecisions(diceRollNumber1, diceRollNumber2).showingVar;
          // let programRuling = DiceRollDecisions(diceRollNumber1, diceRollNumber2).playingVar;

          let decisions = DiceRollDecisions(diceRollNumber1, diceRollNumber2, this.state.bases, this.state);

          this.setState({
            bases: bases,
            dice1: diceRollNumber1,
            dice2: diceRollNumber2,
            fieldRuling: decisions
          })
        },
      }}>
        { this.props.children }
      </Context.Provider>
    )
  }
}