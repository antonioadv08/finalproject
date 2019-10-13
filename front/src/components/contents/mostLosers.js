import React, { Component } from 'react'
import axios from "axios";


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
            <div>
                <table>
                <h3>Most losers</h3>

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
