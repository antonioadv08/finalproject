import React, { Component } from 'react'
import axios from "axios";
import "./_mostGainers.css"
import { Link } from "react-router-dom";


export default class MostGainers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
        };
    }

    getData = () => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/stock/gainers`
            )
            .then(response => {

                this.setState({
                    name: response.data.mostGainerStock
                });


            });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div class="mostgainerstable"> 
                <table >
                <caption > Most gainers</caption>
                    <tr>
                        <th>Ticker</th>
                        <th>Company name</th>
                        <th>Price change</th>
                    </tr>
                    <tr>
                        <td>{this.state.name.map(data => <Link to={`stockdetail/${data.ticker}`}><p>{data.ticker}</p></Link>)}</td>
                        <td>{this.state.name.map(data => <Link to={`stockdetail/${data.ticker}`}><p>{data.companyName}</p></Link>)}</td>
                        <td> {this.state.name.map(data => <p>{data.changesPercentage}</p>)}</td>
                    </tr>
                </table>




            </div>
        )
    }
}
