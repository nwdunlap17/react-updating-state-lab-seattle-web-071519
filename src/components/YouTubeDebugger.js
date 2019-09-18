// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

export default class YouTubeDebugger extends Component{
    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }

    }

    setBitrate = () => {
        this.setState({settings: { ...this.state.settings,bitrate: 12}})
        // this.state.bitrate = 12
    }

    setResolution = () => {
        this.setState({settings: {...this.state.settings, video: {resolution: '720p'}}})
    }


    render(){
        let elements = []
        elements.push(<button className='bitrate' onClick={this.setBitrate}>bitrate = {this.state.settings.bitrate}</button>)
        elements.push(<button className='resolution' onClick={this.setResolution}>Res = {this.state.settings.video.resolution}</button>)
        return <div>{elements}</div>
    }
}
