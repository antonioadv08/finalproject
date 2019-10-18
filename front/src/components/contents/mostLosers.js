import React, { Component } from 'react'
import axios from "axios";
import "./_mostLosers.css"
import { Link } from "react-router-dom";


export default class MostLosers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
        };
    }

    getData = () => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/stock/losers`
            )
            .then(response => {

                this.setState({
                    name: response.data.mostLoserStock
                });


            });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div class="mostloserstable">

                <table class="mostloserstable">
                <caption>Most losers</caption>
                    <tr>
                        <th>Ticker</th>
                        <th>Company name</th>
                        <th>Price change</th>
                    </tr>
                    <tr>
                        <td>{this.state.name.map(data => <Link to={`stockdetail/${data.ticker}`}><p>{data.ticker}</p></Link>)}</td>
                        <td>{this.state.name.map(data => <Link to={`stockdetail/${data.ticker}`}><p>{data.companyName}</p></Link>)}</td>
                        <td class="loserprice"> {this.state.name.map(data => <p>{data.changesPercentage}</p>)}</td>
                    </tr>
                </table>




            </div>
        )
    }
}
