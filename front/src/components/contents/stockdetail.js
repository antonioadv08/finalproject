import React, { Component } from 'react'
import axios from "axios";
import News from "./news"
import Chart from "./chart"


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

                    <table>
                        <Chart data={this.state.name}></Chart>
                        <News ></News>

                       
                    </table>

                </div>
            </div>
        )
    }
}
