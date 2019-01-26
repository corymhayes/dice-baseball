import React, { Component } from 'react';
import Dice from './Dice';

import './App.css';
import { Context } from './Provider';

class App extends Component {
  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <div className="App">
            {
              context.state.currentSide === 'home' ? 
                <div>
                  <h1>Home: {context.state.homeScore}</h1>
                  <h2>Away: {context.state.awayScore}</h2>
                </div>
              :
                <div>              
                  <h2>Home: {context.state.homeScore}</h2>
                  <h1>Away: {context.state.awayScore}</h1>
                </div>
            }
            <h3>Outs: {context.state.outs}</h3>
            <h3>Inning: {context.state.currentInning} </h3>
            <div className="baseball-diamond">
              <div className="home">{context.state.bases.homePlate}</div>
              <div className="first">{context.state.bases.firstBase}</div>
              <div className="second">{context.state.bases.secondBase}</div>
              <div className="third">{context.state.bases.thirdBase}</div>
            </div>
            <h1>{context.state.fieldRuling}</h1>
            <Dice dice={context.state.dice1} />
            <Dice dice={context.state.dice2} />
    
            <button onClick={context.rollDice}>ROLL</button>
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default App;
