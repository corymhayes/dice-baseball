import React, { Component } from 'react';
import { Context } from '../Provider';
import Scoreboard from '../Scoreboard/Scoreboard';
import CurrentInning from './Current Inning/CurrentInning';
import CurrentSide from './Current Side/CurrentSide';
import PlayingField from './Playing Field/PlayingField';
import DiceRoll from '../Dice Roll/DiceRoll';
import Play from '../Play/Play';
import RollButton from '../RollButton/RollButton';
import OutsRuns from './Outs Runs/OutsRuns';

// import './Mobile.scss';
import './style.scss';

class Final extends Component {
  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <>
            <div className="desktop">
              <div className="game-info">
                <CurrentInning inning={context.state.currentInning} />
                <div className="container-outs-runs">
                  <div className="runs">
                    <OutsRuns number={context.state.runs} title="runs" />
                  </div>
                  <div className="outs">
                    <OutsRuns number={context.state.outs} title="outs" />
                  </div>
                </div>
                <Play fieldRuling={context.state.fieldRuling} />
                <div className="dice-roll">
                  <DiceRoll amount1={context.state.dice1} amount2={context.state.dice2} click={context.rollDice}/>
                  <RollButton click={context.rollDice} />
                </div>
              </div>
              <div className="score-field">
                <div className="container-scoreboard">
                  <Scoreboard 
                    currentSide={context.state.currentSide}
                    currentInning={context.state.currentInning}
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
                <div className="container-playingfield">
                  <PlayingField
                    firstBase={context.state.bases.firstBase}
                    secondBase={context.state.bases.secondBase}
                    thirdBase={context.state.bases.thirdBase}
                  />
                </div>
              </div>
            </div>


            <div className="mobile">
              <div className="scoreboard-container">
                <Scoreboard 
                  currentSide={context.state.currentSide}
                  currentInning={context.state.currentInning}
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
              <div className="field-info">
                <PlayingField
                  firstBase={context.state.bases.firstBase}
                  secondBase={context.state.bases.secondBase}
                  thirdBase={context.state.bases.thirdBase}
                />
                <div className="runs">
                  <OutsRuns number={context.state.runs} title="runs" />
                </div>
                <div className="outs">
                  <OutsRuns number={context.state.outs} title="outs" />
                </div>
              </div>
              <div className="dice-play">
                <DiceRoll amount1={context.state.dice1} amount2={context.state.dice2} />
                <Play fieldRuling={context.state.fieldRuling} />
              </div>
              <div className="roll-button">
                <RollButton click={context.rollDice} />
              </div>
            </div>
          </>
        )}
      </Context.Consumer>
    )
  }
}

export default Final