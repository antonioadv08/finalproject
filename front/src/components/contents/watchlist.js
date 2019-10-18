import React, { Component } from 'react'
import AuthService from '../auth/AuthService';
import { Link } from "react-router-dom";
import axios from "axios";
import "./_watchlist.css"

export default class Watchlist extends Component {
    constructor(props) {
        super(props)
        this.service = new AuthService()
        this.state = {
            loggedInUser: {
                stocks: []
            },
            stocks: null,
            name: []

        };

    }

    getData = (stocks) => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/company/profile/${stocks}`
            )
            .then(response => {
                console.log(response.data)
                this.setState({
                    ...this.state,
                    name: response.data.companyProfiles
                });
            });
    };


    componentDidMount() {
        this.service.loggedin()
            .then(response => this.setState({
                ...this.state,
                stocks: response.stocksFollow
            }, this.getData(response.stocksFollow))

            )
            .catch(err => console.log(err))

    }

    render() {
        // console.log(this.state.name)

        // let newData = this.state.name.map(act => act)
        // let newDataSeries = { "data": [...newData] }
        // console.log(newData)

        // console.log(newDataSeries.data)
        console.log(this.state.name)
        let newArr = this.state.name.map(el => Object.keys(el.profile).map((elm, idx) => ({ [elm]: Object.values(el.profile)[idx] })))
        console.log(newArr)
        return (

            <div>
                <h3>Watchlist</h3>

                <table class="watchlisttable">

                    {Array.isArray(newArr) ? newArr.map(arr => arr.map(el =>

                        <div>
                            <tr>
                                <td> <img src={el.image}></img></td>
                                <td>{el.price}</td>
                                <td>{el.changesPercentage}</td>
                            </tr>
                        </div>
                    )) : null}
                                {Array.isArray(this.state.stocks) ? <td>{this.state.stocks.map(data => {
                                    return (
                                        <div>
                                            <Link to={`stockdetail/${data}`}>  <p>{data}</p></Link>
                                        </div>
                                    );
                                })}</td> : null}

                </table>


            </div>
        )
    }
}