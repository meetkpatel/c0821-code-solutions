import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { switch: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.switch) {
      this.setState({ switch: false });

    } else {
      this.setState({ switch: true });
    }
  }

  render() {
    if (this.state.switch) {
      return (
        <div className="row">
          <div className="bar-on">
            <div onClick={this.handleClick} className="circle-on"></div>
          </div>
          <h1>On</h1>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="bar-off">
            <div onClick={this.handleClick} className="circle-off"> </div>
          </div>
          <h1>OFF</h1>
        </div>
      );
    }
  }
}

export default ToggleSwitch;
