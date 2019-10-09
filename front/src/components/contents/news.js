import React, { Component } from 'react'
import axios from "axios";


export default class Stockdetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
        };
    }

    getData = () => {
        axios
            .get(`https://api.unibit.ai/api/terminal?tickers=AAPL&selectedFields=Sentiment,Title,Author,description,Source,Source%20Url,Published%20Time&apiname=news_by_sentiment&startDate=7/24/2019&endDate=7/29/2019&accessKey=cP__FTGwQdTggfYA1nFQXN2aSZ2tHaJA`
            )
            .then(response => {
                
                this.setState({
                    name: response.data.AAPL
                });
                


            });
    };

    componentDidMount() {
        this.getData();
        this.setState({
        });
    }
    render() {

        return (
            <div>
                <div>
                    <table>ssss
                        <tr>
                            <td>{this.state.name.map(data => <p>{data.AAPL}</p>)}</td>
                            <td>{this.state.name.map(data => <p>{data.AAPL}</p>)}</td>
                            <td>{this.state.name.map(data => <p>{data.AAPL}</p>)}</td>
                            <td>{this.state.name.map(data => <p>{data.AAPL}</p>)}</td>
                            <td>{this.state.name.map(data => <p>{data.AAPL}</p>)}</td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
}
