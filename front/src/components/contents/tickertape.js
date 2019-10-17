import React, { Component } from 'react'

export default class Tickertape extends Component {

    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
        script.async = true;
        script.innerHTML = {
            "symbols": [
              {
                "title": "S&P 500",
                "proName": "OANDA:SPX500USD"
              },
              {
                "title": "Nasdaq 100",
                "proName": "OANDA:NAS100USD"
              },
              {
                "title": "EUR/USD",
                "proName": "FX_IDC:EURUSD"
              },
              {
                "title": "BTC/USD",
                "proName": "BITSTAMP:BTCUSD"
              },
              {
                "title": "ETH/USD",
                "proName": "BITSTAMP:ETHUSD"
              }
            ],
            "colorTheme": "light",
            "isTransparent": false,
            "displayMode": "compact",
            "locale": "es"
          }
        /* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
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


// <!-- TradingView Widget BEGIN -->
// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright"><a href="https://es.tradingview.com" rel="noopener" target="_blank"><span class="blue-text">Cinta de cotizaciones</span></a> por TradingView</div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
//   {
//   "symbols": [
//     {
//       "title": "S&P 500",
//       "proName": "OANDA:SPX500USD"
//     },
//     {
//       "title": "Nasdaq 100",
//       "proName": "OANDA:NAS100USD"
//     },
//     {
//       "title": "EUR/USD",
//       "proName": "FX_IDC:EURUSD"
//     },
//     {
//       "title": "BTC/USD",
//       "proName": "BITSTAMP:BTCUSD"
//     },
//     {
//       "title": "ETH/USD",
//       "proName": "BITSTAMP:ETHUSD"
//     }
//   ],
//   "colorTheme": "light",
//   "isTransparent": false,
//   "displayMode": "adaptive",
//   "locale": "es"
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->