import React, { Component } from 'react';

export default class DigitalClicker extends Component {

    state = {
        timesClicked: 0
    }

    clicker = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
    }

    render() {
        return (
            <div>
             <h1>{this.state.timesClicked}</h1>
            <button onClick={this.clicker}>Click This!</button>
            </div>
           
        )
    }
    
}