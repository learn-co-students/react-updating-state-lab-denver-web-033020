import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    
    bitrateSettings = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    } 

    resolutionSettings = () => {
        this.setState({
            settings:{
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }
    
    render() {
        return (
        <div>
            <h1>{this.state.settings.bitrate}</h1> 
            <button className='bitrate' onClick={this.bitrateSettings}>Update Bitrate</button>
            <h1>{this.state.settings.video.resolution}</h1> 
            <button className='resolution' onClick={this.resolutionSettings}>Update Resolution </button>
        </div>
        )
    }
}