// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component{
    constructor(){
        super()
        this.state = {timesClicked: 0}
    }

    onClick = () => {
        this.setState({timesClicked: ++this.state.timesClicked})
    }

    render(){
        return (<button onClick={this.onClick}>{this.state.timesClicked}</button>)
    }
}