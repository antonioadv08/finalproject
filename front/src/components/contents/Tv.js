import React, { Component } from 'react'
import ReactPlayer from 'react-player'



export default class Tv extends Component {
    render() {
        return (
            <div>
                <ReactPlayer url='https://www.youtube.com/watch?v=jL8uDJJBjMA' playing muted="yes" controls="yes" />               </div>
        )
    }
}
