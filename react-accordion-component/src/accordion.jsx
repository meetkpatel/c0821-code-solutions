import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tabOpen: 'none' };
    this.switchview = this.switchview.bind(this);

  }

  switchview() {
    if (event.target.className === this.state.tabOpen) {
      this.setState({ tabOpen: 'none' });
    } else {
      this.setState({ tabOpen: event.target.className });
    }
  }

  render() {
    const subjectList = (
      <div>
        {this.props.subjects.map(subject =>
          <div key={subject.topic}>
            <a onClick={this.switchview} className={subject.topic}>{subject.topic}</a>
            <p className={getclassname(this.state.tabOpen, subject.topic)}>{subject.detail}</p>
          </div>
        )}
      </div>
    );

    return (
      <div>
        {subjectList}
      </div>
    );
  }
}

function getclassname(className, topic) {
  if (className === topic) {
    return '';
  } else {
    return 'hidden';
  }
}
