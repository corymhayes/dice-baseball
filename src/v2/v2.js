import React, { Component } from 'react';
import { Context } from '../Provider';
import Scoreboard from '../Scoreboard/Scoreboard';
import PlayingField from '../Playing Field/PlayingField';
import DiceRoll from '../Dice Roll/DiceRoll';
import Dice from '../Dice Roll/Dice/Dice';
import Play from '../Play/Play';
import RollButton from '../RollButton/RollButton';
import OutsRuns from '../Outs Runs/OutsRuns';
import Modal from '../Modal/Modal';
import DiceMenu from '../Dice Menu/DiceMenu';

import './style2.scss';
import logo from '../images/transparent-logo.png';


class VersionTwo extends Component{
  render() {
    return (
      <Context.Consumer>
        {(context) => (
          <>
          <div className="desktop">
          {
              !context.state.gameStart ?
                <Modal click={context.startGame} />
              :
            <div className="game-container">
              <div className="dice-combination-menu">
                {
                  !context.state.diceMenu ?
                    <button onClick={context.openDiceMenu}><div className="dot"></div></button>
                    :
                    <DiceMenu menuClose={context.closeDiceMenu} />
                }
              </div>
              <div className="game-body">
                <div className="game-scoreboard">
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
                <div className="game-info-v2">
                  <div className="outs-v2">
                    <OutsRuns outAmount={context.state.outs} />
                  </div>
                  <div className="play-v2">
                    <Play fieldRuling={context.state.fieldRuling} />
                  </div>
                  <div className="dice-v2">
                    <DiceRoll amount1={context.state.dice1} amount2={context.state.dice2} />
                  </div>
                  <div className="swing-button-v2">
                    <RollButton click={context.rollDice} />
                  </div>
                </div>
                <div className="field-v2">
                  <PlayingField 
                    firstBase={context.state.bases.firstBase}
                    secondBase={context.state.bases.secondBase}
                    thirdBase={context.state.bases.thirdBase}
                  />
                </div>
              </div>
            </div>
            }
          </div>

          <div className="mobile">
          {
              // !context.state.gameStart ?
              //   <Modal click={context.startGame} />
              // :
            <div className="game-container">
              {/* <div className="dice-combination-menu">
                {
                  !context.state.diceMenu ?
                    <button onClick={context.openDiceMenu}><div className="dot"></div></button>
                    :
                    <DiceMenu menuClose={context.closeDiceMenu} />
                }
              </div> */}
              <div className="game-body">
                <div className="game-scoreboard">
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
                <div className="field-v2">
                  <PlayingField 
                    firstBase={context.state.bases.firstBase}
                    secondBase={context.state.bases.secondBase}
                    thirdBase={context.state.bases.thirdBase}
                  />
                </div>
                <div className="game-info-v2">
                  <div className="outs-v2">
                    <OutsRuns outAmount={context.state.outs} />
                  </div>
                  <div className="dice-v2">
                    <DiceRoll amount1={context.state.dice1} amount2={context.state.dice2} />
                  </div>
                  <div className="play-v2">
                    <Play fieldRuling={context.state.fieldRuling} />
                  </div>
                  <div className="swing-button-v2">
                    <RollButton click={context.rollDice} />
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </>
        )}
      </Context.Consumer>
    )
  }
}

export default VersionTwo;