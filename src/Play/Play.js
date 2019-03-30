import React, { Component } from 'react';

import './Play.scss';


class Play extends Component {
  render() {
    return (
      <div className="play">
        <h1>{this.props.fieldRuling}</h1>
      </div>
    );
  }
}

export default Play;