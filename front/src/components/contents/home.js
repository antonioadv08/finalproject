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

export default class home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: [],
            news: [],

        };
    }

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

    }

    render() {
        console.log(this.state.name)
        return (
            <div class="daddiv">
                <Screener></Screener>

                <table>
                    <td>
                        <tr>{this.state.name.indexName}</tr>
                        <tr>STOCK MARKET INDEX</tr>
                        <tr>INDEX VALUE: {this.state.name.price}</tr>
                        <tr>{this.state.name.changes}%</tr>
                    </td>
                </table>

                <div class="stockspanel">
                    <MostGainers></MostGainers>
                    <MostLosers></MostLosers>
                    <div class="stockspaneldown">

                        <table class="newstable">
                            <tr>
                                <th>News</th>

                            </tr>
                            <tr >
                                <td>{this.state.news.map(data =>
                                    <div class="insidenews">
                                        <div>
                                            <img src={data.urlToImage} width="170px" height="130px"></img>
                                        </div>
                                        <div class="titleanddescription">
                                            <a href={data.url} target="_blank" rel="noopener noreferrer">
                                                <h3 class="h3home">{data.title}</h3></a>
                                            <p>{data.description}</p>
                                        </div>

                                    </div>
                                )}
                                </td>
                            </tr>
                        </table>

                    </div>
                </div>

                {/* <Tv></Tv> */}
                <div class="seccionabajo">
                    <SectorsPerfomance></SectorsPerfomance>
                    <MostActive></MostActive>
                    <Economiccalendar class="economiccalendar"></Economiccalendar>
                </div>
            </div>
        )
    }
}
