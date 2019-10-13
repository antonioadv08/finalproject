import React, { Component } from 'react'
import axios from "axios";


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
            <div>
                <table>
                    <h3>Most gainers</h3>
                    <tr>
                        <td>{this.state.name.map(data => <p>{data.ticker}</p>)}</td>
                        <td>{this.state.name.map(data => <p>{data.companyName}</p>)}</td>
                        <td> {this.state.name.map(data => <p>{data.changesPercentage}</p>)}</td>
                    </tr>
                </table>




            </div>
        )
    }
}