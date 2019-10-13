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
            profile: []
        };
    }

    getData = (companyID) => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/historical-price-full/${companyID}`
            )

            .then(response => {
                console.log(response.data.historical)


                this.setState({
                    name: response.data.historical
                });
            });
    };



    getProfile = (companyID) => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/company/profile/${companyID}`
            )


            .then(response => {
                console.log(response.data)

                this.setState({
                    profile: response.data.profile
                });
            });
    };

    componentDidMount() {
        this.getData(this.props.companyID);
        this.getProfile(this.props.companyID);

    }

    render() {
        console.log(this.state.profile)

        return (

            <div>

                {this.props.companyID} {this.state.profile.companyName}
                <div class="distribution">
                    <div>
                        <p>ceo:{this.state.profile.ceo}</p>
                        <p>Company Name:{this.state.profile.companyName}</p>
                        <p>Price:{this.state.profile.price}</p>
                        <p>Market Cap:{this.state.profile.mktCap}</p>
                        <p>Last dividend:{this.state.profile.lastDiv}</p>
                        <p>Changues percentaje:{this.state.profile.changesPercentage}</p>
                        <a href={this.state.profile.website} target="_blank" rel="noopener noreferrer"><p>{this.state.profile.website}</p></a>
                        <p>{this.state.profile.description}</p>
                        <p>{this.state.profile.sector}</p>
                        <img href={this.state.profile.image}></img>


                    </div>

                    <Chart data={this.state.name}></Chart>
                    <News data={this.state.name}></News>



                </div>
            </div>
        )
    }
}
