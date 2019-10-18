import React, { Component } from 'react'
import Screener from './Screener'
import axios from "axios";
import MostGainers from './mostGainers';
import MostLosers from './mostLosers';
import MostActive from './mostActive';
import SectorsPerfomance from './sectorsPerfomance';
import "./_home.css"
import Tv from './Tv';
import Economiccalendar from './economiccalendar';
import Chart from "./chart"


export default class home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: [],
            news: [],
            homedata: [],

        };
    }

    getHomechart = () => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/historical-price-full/SPY`
            )

            .then(response => {


                this.setState({
                    homedata: response.data.historical
                });
            });
    };

    getData = () => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/majors-indexes/.INX`
            )
            .then(response => {
                // console.log(response.data)
                this.setState({
                    name: response.data
                });


            });
    };

    getNews = () => {

        axios
            .get(`https://newsapi.org/v2/everything?language=en&q=stocks&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`)

            .then(response => {

                this.setState({
                    news: response.data.articles
                });



            });
    };


    componentDidMount() {
        this.getData();
        this.getNews();
        this.getHomechart()

    }

    render() {
        console.log(this.state.name)
        return (
            <div >
                <Screener></Screener>
                <div class="contenderdiv">
                    <div class="divtableandchart">
                        <table className="sp500table">
                            <td>
                                <tr><h1>{this.state.name.indexName}</h1></tr>
                                <tr><p>INDEX VALUE: <h2>{this.state.name.price}</h2> points</p></tr>
                                <tr class="changue">change:</tr>
                                <tr class="changue">{this.state.name.changes}%</tr>
                            </td>
                        </table>
                        <Chart height="500px"   data={this.state.homedata}></Chart>
                        <SectorsPerfomance></SectorsPerfomance>
                    </div>
                    <div class="stockspanel">
                        <MostGainers></MostGainers>
                        <MostLosers></MostLosers>
                        <MostActive></MostActive>
                        <div class="stockspaneldown">


                        </div>
                    </div>

                    {/* <Tv></Tv> */}
                    
                </div>
            </div>
        )
    }
}
