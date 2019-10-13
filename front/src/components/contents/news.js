import React, { Component } from 'react'
import axios from "axios";


export default class Stockdetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        };
    }

    getData = (companyID) => {
        axios
            .get(`https://api.unibit.ai/api/terminal?tickers=${companyID}&selectedFields=Sentiment,Title,Author,description,Source,Source%20Url,Published%20Time&apiname=news_by_sentiment&startDate=7/24/2019&endDate=7/29/2019&accessKey=cP__FTGwQdTggfYA1nFQXN2aSZ2tHaJA`
            )
            .then(response => {
                this.setState({
                    news: response.data[companyID]
                });



            });
    };

    componentDidMount() {
        // this.getData(this.props.companyID);
        this.getData("AAPL");
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>{this.state.news.map(data => <a href={data["source url"]} target="_blank" rel="noopener noreferrer"><p>{data.author}</p></a>)}</td>
                        <td>{this.state.news.map(data => <p>{data.description}</p>)}</td>


                    </tr>
                </table>
            </div>
        )
    }
}
