import React, { Component } from 'react'
import axios from "axios";
import "./_news.css"
import Twitter from './twitter';


export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: [],
        };
    }

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
        // this.getData(this.props.companyID);
        this.getNews();
    }

    render() {
        return (
            <div class="divnews">
                <table class="newstablenews">
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
                <Twitter></Twitter>
            </div>
        )
    }
}
