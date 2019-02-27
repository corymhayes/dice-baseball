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
          <div className="score-home-score">{this.props.homeOne}</div>
          <div className="score-away-score">{this.props.awayOne}</div>
        </div>

        <div className="inning-two">
          <div className="score-inning-number">2</div>
          <div className="score-home-score">{this.props.homeTwo}</div>
          <div className="score-away-score">{this.props.awayTwo}</div>
        </div>

        <div className="inning-three">
          <div className="score-inning-number">3</div>
          <div className="score-home-score">{this.props.homeThree}</div>
          <div className="score-away-score">{this.props.awayThree}</div>
        </div>

        <div className="inning-four">
          <div className="score-inning-number">4</div>
          <div className="score-home-score">{this.props.homeFour}</div>
          <div className="score-away-score">{this.props.awayFour}</div>
        </div>

        <div className="inning-five">
          <div className="score-inning-number">5</div>
          <div className="score-home-score">{this.props.homeFive}</div>
          <div className="score-away-score">{this.props.awayFive}</div>
        </div>

        <div className="inning-six">
          <div className="score-inning-number">6</div>
          <div className="score-home-score">{this.props.homeSix}</div>
          <div className="score-away-score">{this.props.awaySix}</div>
        </div>

        <div className="inning-seven">
          <div className="score-inning-number">7</div>
          <div className="score-home-score">{this.props.homeSeven}</div>
          <div className="score-away-score">{this.props.awaySeven}</div>
        </div>

        <div className="inning-eight">
          <div className="score-inning-number">8</div>
          <div className="score-home-score">{this.props.homeEight}</div>
          <div className="score-away-score">{this.props.awayEight}</div>
        </div>

        <div className="inning-nine">
          <div className="score-inning-number">9</div>
          <div className="score-home-score">{this.props.homeNine}</div>
          <div className="score-away-score">{this.props.awayNine}</div>
        </div>

        <div className="inning-ten">
          <div className="score-inning-number">10</div>
          <div className="score-home-score">{this.props.homeTen}</div>
          <div className="score-away-score">{this.props.awayTen}</div>
        </div>

        <div className="total">
          <div className="score-inning-number">total</div>
          <div className="score-home-score">{this.props.homeTotal}</div>
          <div className="score-away-score">{this.props.awayTotal}</div>
        </div>
      </div>
    )
  }
}

export default Scoreboard;