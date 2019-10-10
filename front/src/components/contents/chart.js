
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

              x: "2014-2-5",
              y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            
        ]
    }],
}



}

mapData(){
   let newData =  this.props.data.map(act=>({x:act.date,y:act.high}))
     
}
componentDidMount(){
}

render() {
    
    console.log(this.props.data)
    let newData =  this.props.data.map(act=>({x:act.date,y:[act.open,act.high,act.low,act.close]}))
    let newDataSeries =[{"data":[...newData]}]
    console.log(newDataSeries)
    console.log(this.state.series)
    
    return (
        
        <div id="chart">
            <ReactApexChart options={this.state.options} series={newDataSeries} type="candlestick" width="500" height="350" />
          </div>
  
    );
  }
}

export default App;