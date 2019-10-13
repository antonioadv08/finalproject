
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
            .get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${word}&apikey=247QRNTD6G5X6Q7Q`
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
                        <div>
                            <label htmlFor="search">Search</label>
                            <input
                                placeholder="Search by ticker or company name..."
                                type="text"
                                name="search"
                                id="search"
                                value={this.state.search}
                                onChange={this.handleSearch}
                               size="50"   
                                />

                        </div>


                        {this.state.name.map(el => {

                            return (
                                <div>
                                    <Link to={`stockdetail/${el["1. symbol"]}`}>  <p>{el["2. name"]}</p></Link>
                                </div>
                            );
                        })}</div> :
                    <div>
                        <label htmlFor="search">Search</label>
                        <input
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

