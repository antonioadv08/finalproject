import React, { Component } from 'react'
import axios from "axios";
import News from "./news"

export default class Stockdetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
        };
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

    componentDidMount() {
        this.getData(this.props.companyID);
    }

    render() {

        return (
            <div>
                {this.props.companyID}
                <div>

                    <News></News>
                    <table>
                        <tr>
                            <td>{this.state.name.map(data => <p>{data.open}</p>)}</td>
                            <td>{this.state.name.map(data => <p>{data.close}</p>)}</td>
                            <td>{this.state.name.map(data => <p>{data.high}</p>)}</td>
                            <td>{this.state.name.map(data => <p>{data.low}</p>)}</td>
                            <td>{this.state.name.map(data => <p>{data.date}</p>)}</td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
}
