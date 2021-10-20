import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.counter < 3) {
      return (
        <button onClick={this.handleClick} className="white">
          Click Me!
        </button>
      );
    } else if (this.state.counter < 6) {
      return (
        <button onClick={this.handleClick} className="voilet">
          Click Me!
        </button>
      );
    } else if (this.state.counter < 9) {
      return (
        <button onClick={this.handleClick} className="light-voilet">
          Click Me!
        </button>
      );
    } else if (this.state.counter < 12) {
      return (
        <button onClick={this.handleClick} className="pink">
          Click Me!
        </button>
      );
    } else if (this.state.counter < 15) {
      return (
        <button onClick={this.handleClick} className="orange">
          Click Me!
        </button>
      );
    } else if (this.state.counter < 18) {
      return (
        <button onClick={this.handleClick} className="yellow">
          Click Me!
        </button>
      );
    } else if (this.state.counter >= 18) {
      return (
        <button onClick={this.handleClick} className="white">
          Click Me!
        </button>
      );
    }

  }

  handleClick() {
    let newCount = this.state.counter;
    newCount++;
    this.setState({ counter: newCount });
  }
}

export default HotButton;
