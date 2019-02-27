import React, { Component } from 'react';
import { Context } from './Provider';
import Scoreboard from './Scoreboard/Scoreboard';
import CurrentInning from './Current Inning/CurrentInning';
import PlayingField from './Playing Field/PlayingField';
import DiceRoll from './Dice Roll/DiceRoll';
import Play from './Play/Play';
import RollButton from './RollButton/RollButton';

import './Mobile.scss';

class Game extends Component {
  render() {
    return (
      <Context.Consumer>
        {(context) => (
            <div className="container">
              <div className="scoreboard">
                <Scoreboard 
                  homeOne={context.state.homeScore[0]} 
                  awayOne={context.state.awayScore[0]} 
                  homeTwo={context.state.homeScore[1]} 
                  awayTwo={context.state.awayScore[1]} 
                  homeThree={context.state.homeScore[2]} 
                  awayThree={context.state.awayScore[2]} 
                  homeFour={context.state.homeScore[3]} 
                  awayFour={context.state.awayScore[3]} 
                  homeFive={context.state.homeScore[4]} 
                  awayFive={context.state.awayScore[4]} 
                  homeSix={context.state.homeScore[5]} 
                  awaySix={context.state.awayScore[5]} 
                  homeSeven={context.state.homeScore[6]} 
                  awaySeven={context.state.awayScore[6]} 
                  homeEight={context.state.homeScore[7]} 
                  awayEight={context.state.awayScore[7]} 
                  homeNine={context.state.homeScore[8]} 
                  awayNine={context.state.awayScore[8]} 
                  homeTen={context.state.homeScore[9]} 
                  awayTen={context.state.awayScore[9]} 
                  homeTotal={context.state.homeScore.reduce((item, currentItem) => item + currentItem, 0)}
                  awayTotal={context.state.awayScore.reduce((item, currentItem) => item + currentItem, 0)}
                />
              </div>
              <div className="playing-board">
                <CurrentInning inning={context.state.currentInning} />
                <PlayingField 
                  firstBase={context.state.bases.firstBase}
                  secondBase={context.state.bases.secondBase}
                  thirdBase={context.state.bases.thirdBase}
                />
                <div className="outs">
                  <h1>{context.state.outs}</h1>
                  <span className="title">outs</span>
                </div>
                <div className="runs">
                  <h1>{context.state.runs}</h1>
                  <span className="title">runs</span>
                </div>
              </div>
              <div className="die-play">
                <DiceRoll amount1={context.state.dice1} amount2={context.state.dice2} />
                <Play fieldRuling={context.state.fieldRuling} />
              </div>
              <RollButton click={context.rollDice} />
            </div>
        )}
      </Context.Consumer>
    );
  }
}

export default Game;
