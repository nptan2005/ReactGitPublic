import React from 'react';
import { Button } from 'react-bootstrap';

class AppTest extends React.Component{

    constructor(props) {
        super(props);
    }
    render(){
        return <Button className="btn-success btn-sm">{this.props.input}</Button>;
    }
}

module.exports = AppTest;