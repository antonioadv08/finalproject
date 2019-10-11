
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

                    //   x: "2014-2-5",
                    //   y: [6629.81, 6650.5, 6623.04, 6633.33]
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
                <ReactApexChart options={this.state.options} series={newDataSeries} type="candlestick" width="1000" height="800" />
            </div>

        );
    }
}

export default App;