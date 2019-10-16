import React, { Component } from 'react'
import axios from "axios";
import Chart from "./chart"
import "./_stockdetail.css"
import service from "../auth/AuthService"



export default class Stockdetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
            profile: [],
            news: [],


        };
        this.services = new service()

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

                this.setState({
                    profile: response.data.profile
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

                this.setState({
                    news: response.data.articles
                });



            });
    };

    savecompanyID = () => {
        this.services.addcompany(this.props.companyID)

    }



    componentDidMount() {

        this.getData(this.props.companyID);
        this.getProfile(this.props.companyID);
        this.getNews(this.props.companyID);

    }

    render() {


        return (

            <div>

                {this.props.companyID} {this.state.profile.companyName}
                <div class="distribution">
                    <div>
                        <p>ceo:{this.state.profile.ceo}</p>
                        <p>Company Name:{this.state.profile.companyName}</p>
                        <p>Price:{this.state.profile.price}</p>
                        <p>Market Cap:{this.state.profile.mktCap}</p>
                        <p>Last dividend:{this.state.profile.lastDiv}</p>
                        <p>Changues percentaje:{this.state.profile.changesPercentage}</p>
                        <a href={this.state.profile.website} target="_blank" rel="noopener noreferrer"><p>{this.state.profile.website}</p></a>
                        <p>{this.state.profile.description}</p>
                        <p>{this.state.profile.sector}</p>
                        <img src={this.state.profile.image}></img>

                        <button onClick={() => this.savecompanyID()}>follow stock</button>

                    </div>

                    <Chart data={this.state.name}></Chart>

                </div>
                <div>
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
                                            <h2>{data.title}</h2></a>
                                        <p>{data.description}</p>
                                    </div>

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
