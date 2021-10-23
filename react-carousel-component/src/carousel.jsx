import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageIndex: 0 };
    this.clickedRight = this.clickedRight.bind(this);
    this.clickedLeft = this.clickedLeft.bind(this);
    this.clickedDot = this.clickedDot.bind(this);
  }

  clickedRight() {
    if ((this.props.images.length - 1) === parseInt(this.state.imageIndex)) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: parseInt(this.state.imageIndex + 1) });
    }
    this.startTimer();
  }

  clickedLeft() {
    if (this.state.imageIndex === 0) {
      this.setState({ imageIndex: this.props.images.length - 1 });
    } else {
      this.setState({ imageIndex: this.state.imageIndex - 1 });
    }
    this.startTimer();
  }

  startTimer() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.autoSlid(), 3000);
  }

  clickedDot() {
    this.setState({ imageIndex: parseInt(event.target.getAttribute('data-view')) });
    this.startTimer();
  }

  autoSlid() {
    if ((this.props.images.length - 1) === parseInt(this.state.imageIndex)) {
      this.setState({ imageIndex: 0 });
    } else {
      this.setState({ imageIndex: parseInt(this.state.imageIndex + 1) });
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.autoSlid(), 3000);
  }

  render() {
    let counter = -1;
    const imagesStatus = (
      <div className='image-status'>
        {this.props.images.map(subject =>
          <div className='dotsDiv' key={counter++}>
            <i onClick={this.clickedDot} data-view={getImgKeys(counter)} className={getImgStatus(this.state.imageIndex, counter)}></i>
          </div>
        )}
      </div>
    );

    return (
      <div className='fullscreen'>
        <div className='image-div'>
          <img src={this.props.images[this.state.imageIndex]} />
          <div className='left-arrow'>
            <i onClick={this.clickedLeft} className="fas fa-chevron-left"></i>
          </div>
          <div className='right-arrow'>
            <i onClick={this.clickedRight} className="fas fa-chevron-right"></i>
          </div>
          {imagesStatus}
        </div>
      </div>
    );
  }
}
function getImgKeys(newcounter) {
  return newcounter--;
}

function getImgStatus(imgIndex, counter) {
  if (imgIndex === counter) {
    return 'fas fa-circle';
  } else {
    return 'far fa-circle';
  }
}
