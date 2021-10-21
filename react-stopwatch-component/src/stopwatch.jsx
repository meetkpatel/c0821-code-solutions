import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tick: 0, clockStatus: false };
    this.handleFafaClick = this.handleFafaClick.bind(this);
    this.handleCircleClick = this.handleCircleClick.bind(this);
  }

  handleFafaClick() {
    if (this.state.clockStatus === false) {
      this.setState({ clockStatus: true });
      this.startwatch();
    } else {
      this.setState({ clockStatus: false });
      this.pausewatch();
    }
  }

  startwatch() {
    this.timerId = setInterval(() => {
      this.setState({ tick: this.state.tick + 1 });
    }, 1000);
  }

  pausewatch() {
    clearInterval(this.timerId);
  }

  handleCircleClick() {
    this.setState({ tick: 0 });
  }

  render() {
    if (this.state.clockStatus === true) {
      return (
        <div className="row">
          <div className="circle">
            <h1>{this.state.tick}</h1>
          </div>
          <div className="fafa">
            <i onClick={this.handleFafaClick} className="fas fa-pause"></i>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div onClick={this.handleCircleClick} className="circle">
            <h1>{this.state.tick}</h1>
          </div>
          <div className="fafa">
            <i onClick={this.handleFafaClick} className="fas fa-play"></i>
          </div>
        </div>
      );
    }
  }
}

export default StopWatch;
