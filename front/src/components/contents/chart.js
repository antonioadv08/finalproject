
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                title: {
                    text: 'CandleStick Chart',
                    align: 'left'
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    tooltip: {
                        enabled: true
                    }
                }
            },
            series: [{
                data: [{

                 
                },

                ]
            }],
        }



    }


    componentDidMount() {
    }

    render() {

        let newData = this.props.data.map(act => ({ x: act.date, y: [act.open, act.high, act.low, act.close] }))
        let newDataSeries = [{ "data": [...newData] }]


        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={newDataSeries} type="candlestick" width="700" height="600" />
            </div>

        );
    }
}

export default App;