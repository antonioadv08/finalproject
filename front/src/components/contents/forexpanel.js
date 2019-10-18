import React, { Component } from 'react'
import Economiccalendar from './economiccalendar';
import "./_forexpanel.css"
import Hotmap from './hotmap';

export default class Forexpanel extends Component {

    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js'
        script.async = true;
        script.innerHTML = /* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
            this._ref.current.appendChild(script);
    }
    render() {
        return (
            <div class="forexpanelallocation" ref={this._ref}>
                {/* <Economiccalendar class="Economiccalendar"></Economiccalendar> */}
                <Hotmap></Hotmap>


            </div>
        );
    }
}