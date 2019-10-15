import React, { Component } from 'react'

export default class Economiccalendar extends Component {

    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
        script.async = true;
        script.innerHTML = /* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
        this._ref.current.appendChild(script);
    }
    render() {
        return(
        <div class="tradingview-widget-container" ref={this._ref}>
            <div class="tradingview-widget-container__widget"></div>

            
    
        </div>
        );
    }
}