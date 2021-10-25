import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    var icon = '';
    var text = '';
    var textColor = '';
    if (this.state.password.length === 0) {
      icon = 'fas fa-times';
      text = 'A password is requires.';
      textColor = 'font-red';
    } else if (this.state.password.length < 8) {
      icon = 'fas fa-times';
      text = 'Your password is too short.';
      textColor = 'font-red';
    } else {
      icon = 'fas fa-check';
      text = '';
      textColor = 'hidden';
    }
    return (
      <form>
        <label>
          <div>
            <h3>Password</h3>
          </div>

          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        <i className={icon}></i>
        <div>
          <p className={textColor}>{text}</p>
        </div>
      </form>
    );
  }
}
