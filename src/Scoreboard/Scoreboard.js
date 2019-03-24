import React, { Component } from 'react';

import './style.scss';

class Scoreboard extends Component{
  render(){
    return (
      <div className="scoreboard">
          {
            this.props.currentSide === 'home' ?
              <div className="teams">
                <div></div>
                <div className="home current">home</div>
                <div className="away">away</div>
              </div>
              :
              <div className="teams">
                <div></div>
                <div className="home">home</div>
                <div className="away current">away</div>
              </div>
          }
        <div className="score">
          <div className="inning-one">
            {
              this.props.currentInning === 1 ?
                <div className="score-inning-number current">1</div>
              :
                <div className="score-inning-number">1</div>
            }
            <div className="score-home-score">{this.props.homeOne}</div>
            <div className="score-away-score">{this.props.awayOne}</div>
          </div>

          <div className="inning-two">
            {
              this.props.currentInning === 2 ?
                <div className="score-inning-number current">2</div>
              :
                <div className="score-inning-number">2</div>
            }
            <div className="score-home-score">{this.props.homeTwo}</div>
            <div className="score-away-score">{this.props.awayTwo}</div>
          </div>

          <div className="inning-three">
            {
              this.props.currentInning === 3 ?
                <div className="score-inning-number current">3</div>
              :
                <div className="score-inning-number">3</div>
            }
            <div className="score-home-score">{this.props.homeThree}</div>
            <div className="score-away-score">{this.props.awayThree}</div>
          </div>

          <div className="inning-four">
          {
              this.props.currentInning === 4 ?
                <div className="score-inning-number current">4</div>
              :
                <div className="score-inning-number">4</div>
            }
            <div className="score-home-score">{this.props.homeFour}</div>
            <div className="score-away-score">{this.props.awayFour}</div>
          </div>

          <div className="inning-five">
          {
              this.props.currentInning === 5 ?
                <div className="score-inning-number current">5</div>
              :
                <div className="score-inning-number">5</div>
            }
            <div className="score-home-score">{this.props.homeFive}</div>
            <div className="score-away-score">{this.props.awayFive}</div>
          </div>

          <div className="inning-six">
          {
              this.props.currentInning === 6 ?
                <div className="score-inning-number current">6</div>
              :
                <div className="score-inning-number">6</div>
            }
            <div className="score-home-score">{this.props.homeSix}</div>
            <div className="score-away-score">{this.props.awaySix}</div>
          </div>

          <div className="inning-seven">
          {
              this.props.currentInning === 7 ?
                <div className="score-inning-number current">7</div>
              :
                <div className="score-inning-number">7</div>
            }
            <div className="score-home-score">{this.props.homeSeven}</div>
            <div className="score-away-score">{this.props.awaySeven}</div>
          </div>

          <div className="inning-eight">
          {
              this.props.currentInning === 8 ?
                <div className="score-inning-number current">8</div>
              :
                <div className="score-inning-number">8</div>
            }
            <div className="score-home-score">{this.props.homeEight}</div>
            <div className="score-away-score">{this.props.awayEight}</div>
          </div>

          <div className="inning-nine">
          {
              this.props.currentInning === 9 ?
                <div className="score-inning-number current">9</div>
              :
                <div className="score-inning-number">9</div>
            }
            <div className="score-home-score">{this.props.homeNine}</div>
            <div className="score-away-score">{this.props.awayNine}</div>
          </div>

          <div className="inning-ten">
          {
              this.props.currentInning === 10 ?
                <div className="score-inning-number current">10</div>
              :
                <div className="score-inning-number">10</div>
            }
            <div className="score-home-score">{this.props.homeTen}</div>
            <div className="score-away-score">{this.props.awayTen}</div>
          </div>
        </div>
        <div className="total">
          <div className="score-inning-number">R</div>
          <div className="score-home-score">{this.props.homeTotal}</div>
          <div className="score-away-score">{this.props.awayTotal}</div>
        </div>
      </div>
    )
  }
}

export default Scoreboard;