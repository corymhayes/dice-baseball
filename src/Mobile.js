import React, { Component } from 'react';
import { Context } from './Provider';
import Scoreboard from './Scoreboard/Scoreboard';

import './Dice Roll/Dice/style.scss';
import './Mobile.scss';

class Game extends Component {
  render() {
    return (
      <Context.Consumer>
        {(context) => (
            <div className="container">
              <div className="scoreboard">
                <Scoreboard />
              </div>
              <div className="playing-board">
                <div className="inning">
                  <div className="inning-number">
                    <h1>{context.state.currentInning}</h1>
                    <span className="ordinal">st</span>
                  </div>
                  <span className="title">inning</span>
                </div>
                <div className="field">
                  {
                    context.state.bases.firstBase === 1 ? 
                      <div className="first-base runner"></div>
                    :
                      <div className="first-base"></div>
                  }

                  {
                    context.state.bases.secondBase === 1 ? 
                      <div className="second-base runner"></div>
                    :
                      <div className="second-base"></div>
                  }

                  {
                    context.state.bases.thirdBase === 1 ? 
                      <div className="third-base runner"></div>
                    :
                      <div className="third-base"></div>
                  }
                </div>
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
                <div className="die">
                  <div className="dice">
                    <div className="one">
                      <div className="dot-one"></div>
                    </div>
                  </div>

                  <div className="dice">
                    <div className="two">
                      <div className="dot-one"></div>
                      <div className="dot-two"></div>
                    </div>
                  </div>
                </div>
                <div className="play">{context.state.fieldRuling}</div>
              </div>
              <button onClick={context.rollDice}>roll</button>
            </div>
        )}
      </Context.Consumer>
    );
  }
}

export default Game;
