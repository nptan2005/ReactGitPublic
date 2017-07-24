import React from 'react';

class Hello extends React.Component{
    constructor(props) {
        super(props);
    }
  render(){
    return <h1>{this.props.input}</h1>
  }
}

module.exports = Hello;
