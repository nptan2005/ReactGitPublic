import React from 'react';

class Clock extends React.Component{
	constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div className="row">
      	<div className="col-md-4"></div>
        <div className="col-md-4">
            <div className="panel panel-default">
              <div className="panel-body">
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
              </div>
            </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    );
  }
}

module.exports = Clock;