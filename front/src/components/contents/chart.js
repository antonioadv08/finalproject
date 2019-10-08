import Iframe from 'react-iframe'

import React, { Component } from 'react'

export default class chart extends Component {
    render() {
        return (
            <div>
                <Iframe url="https://s3.tradingview.com/tv.js"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
            </div>
        )
    }
}

