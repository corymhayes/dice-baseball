import React, { Component } from 'react'
import DiceRollDecisions from './DiceRollDecisions'

export const Context = React.createContext();

export default class Provider extends Component{
  state = {
    currentSide: 'home',
    currentInning: 1,
    homeScore: [0,0,0,0,0,0,0,0,0,0],
    awayScore: [0,0,0,0,0,0,0,0,0,0],
    outs: 0,
    runs: 0,
    bases: {
      firstBase: 0,
      secondBase: 0,
      thirdBase: 0,
      batter: 1
    },
    dice1: 1,
    dice2: 1,
    fieldRuling: 'single',
    timeline: []
  }

  render(){
    return(
      <Context.Provider value={{
        state: this.state,
        rollDice: () => {
          let bases = this.state.bases;

          let diceRollNumber1 = Math.floor(Math.random() * (7-1)) + 1;
          let diceRollNumber2 = Math.floor(Math.random() * (7-1)) + 1;

          let decisions = DiceRollDecisions(diceRollNumber1, diceRollNumber2, bases, this.state);

          this.setState({
            bases: bases,
            dice1: diceRollNumber1,
            dice2: diceRollNumber2,
            fieldRuling: decisions
          });
        },
        doublePlay: () => {
          let bases = this.state.bases;

          let diceRollNumber1 = 2;
          let diceRollNumber2 = 2;

          let decisions = DiceRollDecisions(diceRollNumber1, diceRollNumber2, this.state.bases, this.state);

          let tempTimeline = this.state.timeline;

          Object.values(this.state.bases).map((item) => {
            return tempTimeline.push(`${item}`)
          })
          tempTimeline.push(`Play: ${decisions}`)

          this.setState({
            bases: bases,
            dice1: diceRollNumber1,
            dice2: diceRollNumber2,
            fieldRuling: decisions,
            timeline: tempTimeline
          })
        }
      }}>
        { this.props.children }
      </Context.Provider>
    )
  }
}