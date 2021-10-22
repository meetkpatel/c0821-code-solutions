import React from 'react';

export default class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navOpen: false };
    this.switchview = this.switchview.bind(this);
  }

  switchview() {
    this.setState(prev => ({ navOpen: !prev.navOpen }));
  }

  render() {
    if (this.state.navOpen) {
      this.fullScreenDiv = 'fullScreen';
      this.navMenDiv = 'nav-menu nav-open';
    } else {
      this.fullScreenDiv = '';
      this.navMenDiv = 'nav-menu';
    }
    return (
      <div>
        <div className={this.fullScreenDiv} onClick={this.switchview}>
        </div>
        <i onClick={this.switchview} className="fas fa-bars"></i>
          <div className={this.navMenDiv}>
          <h1>Choose a game</h1>
          <a onClick={this.switchview}>Red Light Green Light</a>
          <a onClick={this.switchview}>Dalgona Candy</a>
          <a onClick={this.switchview}>Hopscotch</a>
          <a onClick={this.switchview}>Tug of War</a>
          <a onClick={this.switchview}>Squid Game</a>
          <a onClick={this.switchview}>Marbles</a>
          </div>
        </div>
    );
  }
}
