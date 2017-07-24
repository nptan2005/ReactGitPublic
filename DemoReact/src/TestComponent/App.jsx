import React from 'react';

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return <h1>{this.props.input}</h1>
    }
}

module.exports = App;
