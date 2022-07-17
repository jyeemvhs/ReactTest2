
import React, { Component } from 'react';

class Display extends Component {
  render() {
    return(
      <div>
      <div>Number of things we've learned about React</div>
      <div>{this.props.count}</div>
      </div>
    );
  }
}

export default Display;
