import React, { Component } from 'react'
import axios from "axios";
import News from "./news"
import Chart from "./chart"
import "./_stockdetail.css"


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
        console.log(this.state.name)

        return (
            <div>
                
                {this.props.companyID}
                <div class="distribution">

                        <Chart data={this.state.name}></Chart>
                        <News data={this.state.name}></News>

                       

                </div>
            </div>
        )
    }
}
