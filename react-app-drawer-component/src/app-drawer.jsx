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
    let fullScreenDiv = '';
    let navMenDiv = '';
    if (this.state.navOpen) {
      fullScreenDiv = 'fullScreen';
      navMenDiv = 'nav-menu nav-open';
    } else {
      fullScreenDiv = '';
      navMenDiv = 'nav-menu';
    }
    return (
      <div>
        <div className={fullScreenDiv} onClick={this.switchview}>
        </div>
        <i onClick={this.switchview} className="fas fa-bars"></i>
          <div className={navMenDiv}>
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
