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
        console.log(this.state.news)

        return (
            <div>
                <Screener></Screener>

                {this.state.name.indexName}
                <br />
                {this.state.name.changes}
                <br />

                {this.state.name.price}


                <div class="stockspanel">
                    <MostGainers></MostGainers>
                    <MostLosers></MostLosers>
                    <MostActive></MostActive>
                </div>
                <div class="stockspaneldown">
                    <SectorsPerfomance></SectorsPerfomance>
                    <Economiccalendar></Economiccalendar>
                    {/* <Tv></Tv> */}


                    <table class="newstable">
                        <tr>
                            <th>News</th>
                        </tr>
                        <tr >
                            <td>{this.state.news.map(data =>
                                <div>
                                    <img src={data.urlToImage} width="50px" height="50px"></img>
                                    <a href={data.url} target="_blank" rel="noopener noreferrer">
                                        <p>{data.title}</p></a>
                                    <p>{data.description}</p>
                                </div>
                            )}
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
}
