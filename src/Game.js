import React, { Component } from 'react';
import { Context } from './Provider';
import CurrentSide from './Current Side/CurrentSide';
import Play from './Play/Play';
import OutsRuns from './Outs Runs/OutsRuns';
import CurrentInning from './Current Inning/CurrentInning';
import DiceRoll from './Dice Roll/DiceRoll';
import Scoreboard from './Scoreboard/Scoreboard';
import PlayingField from './Playing Field/PlayingField';

// import './Game.scss';
import './Mobile.scss';

class Game extends Component {
  render() {
    return (
      <Context.Consumer>
        {(context) => (
            <div className="container">
              <aside className="inning-details">
                <CurrentInning inning={context.state.currentInning} />
                <CurrentSide side={context.state.currentSide} />
                <OutsRuns outs={context.state.outs} runs={context.state.runs} />
                <Play fieldRuling={context.state.fieldRuling} />
                <DiceRoll amount1={context.state.dice1} amount2={context.state.dice2} click={context.rollDice}/>
              </aside>
              
              <div className="score-field">
                <Scoreboard 
                  homeScore={context.state.homeScore} 
                  awayScore={context.state.awayScore} 
                />
                <PlayingField 
                  firstBase={context.state.bases.firstBase} 
                  secondBase={context.state.bases.secondBase} 
                  thirdbase={context.state.bases.thirdBase} 
                />
              </div>
            </div>
        )}
      </Context.Consumer>
    );
  }
}

export default Game;
