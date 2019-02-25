import React, { Component } from 'react';

import './style.scss';

class Scoreboard extends Component{
  render(){
    return (
      <div className="score">
        <div className="teams">
          <div className="home">home</div>
          <div className="away">away</div>
        </div>

        <div className="inning-one">
          <div className="score-inning-number">1</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="inning-two">
          <div className="score-inning-number">2</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="inning-three">
          <div className="score-inning-number">3</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="inning-four">
          <div className="score-inning-number">4</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="inning-five">
          <div className="score-inning-number">5</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="inning-six">
          <div className="score-inning-number">6</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="inning-seven">
          <div className="score-inning-number">7</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="inning-eight">
          <div className="score-inning-number">8</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="inning-nine">
          <div className="score-inning-number">9</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="inning-ten">
          <div className="score-inning-number">10</div>
          <div className="score-home-score">0</div>
          <div className="score-away-score">0</div>
        </div>

        <div className="total">
          <div className="score-inning-number">total</div>
          <div className="score-home-score">{this.props.homeScore}</div>
          <div className="score-away-score">{this.props.awayScore}</div>
        </div>
      </div>
    )
  }
}

export default Scoreboard;