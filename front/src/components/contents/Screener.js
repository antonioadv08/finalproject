
import React, { Component } from 'react'
import axios from "axios";
import "./_screener.css"
import { Link } from "react-router-dom";



export default class Screener extends Component {

    constructor() {
        super()
        this.state = {
            name: ["undefined"],
            search: ""
        };
    }

    getData = (word) => {
        axios
            .get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${word}&apikey=${process.env.REACT_APP_SCREENER_KEY}`
            )
            .then(response => {


                this.setState({
                    search: word,
                    name: response.data.bestMatches
                });


            });
    };

    componentDidMount() {

    }

    handleSearch = event => {
        const value = event.target.value;
        this.setState({ search: value })
        let searchWord = value
        this.getData(searchWord);
    };

    render() {


        return (

            <div>
                {Array.isArray(this.state.name) ?
                    <div>
                        <div class="inputdiv">
                            <input
                                class="inputscreener"
                                placeholder="Search by ticker or company name..."
                                type="text"
                                name="search"
                                id="search"
                                value={this.state.search}
                                onChange={this.handleSearch}
                            />

                        </div>


                        {this.state.name.map(el => {

                            return (
                                <table className="screenertable">
                                        <tr >
                                        <Link className="linkscreener" to={`stockdetail/${el["1. symbol"]}`}>
                                            <td class="namecompany">{el["2. name"]}</td>
                                            <td class="symbolcompany">{el["1. symbol"]}</td>

                                        </Link>
                                        </tr>
                                </table>);
                        })}</div> :
                    <div >
                        <input
                            class="inputscreener"
                            placeholder="Search by ticker or company name..."
                            type="text"
                            name="search"
                            id="search"
                            value={this.state.search}
                            onChange={this.handleSearch}
                        />

                    </div>
                }
            </div>
        )
    }
}

