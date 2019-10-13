
import React, { Component } from 'react'
import axios from "axios";
import "./_mostActive.css"


export default class MostActive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
        };
    }

    getData = () => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/stock/actives`
            )
            .then(response => {

                this.setState({
                    name: response.data.mostActiveStock
                });


            });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <h3>Most active</h3>

                <table class="mostactivetable">
                    <tr>
                        <th>Ticker</th>
                        <th>Company name</th>
                        <th>Price change</th>
                    </tr>
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
