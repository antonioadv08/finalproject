import React, { Component } from 'react'
import axios from "axios";
import Chart from "./chart"
import "./_stockdetail.css"
import service from "../auth/AuthService"
import Screener from './Screener';



export default class Stockdetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
            profile: [],
            news: [],


        };
        this.services = new service()
        this.getInfo(this.props.companyID)

    }

    componentWillReceiveProps(pro) {
        this.getInfo(pro.companyID)

    }

    getData = (companyID) => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/historical-price-full/${companyID}`
            )

            .then(response => {


                this.setState({
                    name: response.data.historical
                });
            });
    };



    getProfile = (companyID) => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/company/profile/${companyID}`
            )


            .then(response => {
                if (Object.entries(response.data).length === 0 && response.data.constructor === Object) { response = null } else { response = response.data.profile }
                this.setState({
                    profile: response
                });
            });
    };

    // getNews = (companyID) => {
    //     axios
    //         .get(`https://api.unibit.ai/api/terminal?tickers=${companyID}&selectedFields=Sentiment,Title,Author,description,Source,Source%20Url,Published%20Time&apiname=news_by_sentiment&startDate=7/24/2019&endDate=7/29/2019&accessKey=${process.env.REACT_APP_UNIBIT_KEY}`
    //         )
    //         .then(response => {

    //             this.setState({
    //                 news: response.data[companyID]
    //             });



    //         });
    // };


    getNews = (companyID) => {

        axios
            .get(`https://newsapi.org/v2/everything?language=en&q=${companyID}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`)

            .then(response => {

                if (Object.entries(response.data).length === 0 && response.data.constructor === Object) { response = null } else { response = response.data.articles }

                this.setState({
                    news: response
                });



            });
    };

    savecompanyID = () => {
        this.services.addcompany(this.props.companyID)

    }



    getInfo(companyID) {

        this.getData(companyID);
        this.getProfile(companyID);
        this.getNews(companyID);

    }

    render() {

        console.log(this.state.profile)
        return (
            <div>

                <Screener></Screener>

                <div class="distribution">
                    <div class="flex">
                        {this.state.profile != null ?
                            <div class="stocksdetailscomponents">
                                <table>
                                    <tr><td><img src={this.state.profile.image} alt=""></img>
                                    </td><h1>{this.state.profile.companyName}</h1></tr>

                                    <tr class="tdleft"><td >CEO:</td><td class="tdright">{this.state.profile.ceo}</td></tr>
                                    <tr class="tdleft"><td >Stock price:</td><td class="tdright">{this.state.profile.price}  $</td></tr>
                                    <tr class="tdleft"><td >Market Cap:</td><td class="tdright">{this.state.profile.mktCap}  $</td></tr>
                                    <tr class="tdleft"><td >Last dividend:</td><td class="tdright">{this.state.profile.lastDiv}  $</td></tr>
                                    <tr class="tdleft"><td >Changes percentage:</td><td class="tdright">{this.state.profile.changesPercentage}</td></tr>
                                    <tr class="tdleft"><td >Description:</td><td class="tdright">{this.state.profile.description}</td></tr>
                                    <tr class="tdleft"><td >Sector:</td><td class="tdright">{this.state.profile.sector}</td></tr>
                                    <tr class="tdleft"><td >Daily average volume:</td><td class="tdright">{this.state.profile.volAvg}</td></tr>

                                    <tr class="tdleft"><td>Web:</td><td class="tdright"><a href={this.state.profile.website} target="_blank" rel="noopener noreferrer">{this.state.profile.website}</a></td></tr>

                                    <tr></tr>
                                </table>

                            </div>
                            :
                            <div>
                                <h1>No data avaible for this stock</h1>
                            </div>
                        }

                        {this.state.name != null ?
                            <Chart class="chartstockdetail" data={this.state.name}></Chart>
                            :
                            <div>
                                <h1>No chart avaible for this stock</h1>
                            </div>
                        }
                        <div class="stocksdetailscomponents">
                            {this.state.news != null ?
                                <table class="newstablestocksdetail">
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
                                                        <h2>{data.title}</h2></a>
                                                    <p>{data.description}</p>
                                                </div>
                                            </div>
                                        )}
                                        </td>
                                    </tr>
                                </table>
                                :
                                <div>
                                    <h1>No news avaible for this stock</h1>
                                </div>
                            }
                        </div>
                    </div>
                    <div class="divbuton">
                        <button class="btnfollowstock"  onClick={() => this.savecompanyID()} >Add to watchlist</button>
                    </div>
                </div>
                {/* <table class="newstable">
                        <tr>
                        <th>News</th>
                        </tr>
                        
                        
                            <tr >
                            <td class="arriba">{this.state.news.map(data =>
                                <tr><a href={data["source url"]} target="_blank" rel="noopener noreferrer"><tr>{data.title}</tr></a>
                                    <p>{data.description}</p>
                                    </tr>)}</td>
                                    </tr>
                                </table> */}

            </div>
        )
    }
}
