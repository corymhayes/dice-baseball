import React, { Component } from 'react'
import DiceRollDecisions from './DiceRollDecisions'

export const Context = React.createContext();

export default class Provider extends Component{
  state = {
    currentSide: 'home',
    currentInning: 7,
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
    timeline: [],
    gameStart: false,
    diceMenu: false,
    gameOutcome: ''
  }

  render(){
    return(
      <Context.Provider value={{
        state: this.state,
        rollDice: () => {
          let bases = this.state.bases;

          let goInning = this.state.currentInning;
          let goSide = this.state.currentSide;
          let goOuts = this.state.outs;

          let diceRollNumber1 = Math.floor(Math.random() * (7-1)) + 1;
          let diceRollNumber2 = Math.floor(Math.random() * (7-1)) + 1;

          let decisions = DiceRollDecisions(diceRollNumber1, diceRollNumber2, bases, this.state);

          if(goInning === 9 && goOuts >= 2 && goSide === 'away'){
            if(this.state.homeScore.reduce((item, currentItem) => item + currentItem, 0) > this.state.awayScore.reduce((item, currentItem) => item + currentItem, 0)){
              this.setState({
                gameOutcome: 'home'
              })
            } else {
              this.setState({
                gameOutcome: 'away'
              })
            }
          }

          this.setState({
            bases: bases,
            dice1: diceRollNumber1,
            dice2: diceRollNumber2,
            fieldRuling: decisions
          });
        },
        startGame: () => {
          this.setState({
            gameStart: true
          })
        },
        openDiceMenu: () => {
          this.setState({
            diceMenu: true
          }) 
        },
        closeDiceMenu: () => {
          this.setState({
            diceMenu: false
          }) 
        }
      }}>
        { this.props.children }
      </Context.Provider>
    )
  }
}