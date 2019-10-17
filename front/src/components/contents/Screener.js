
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


                        {Array.isArray(this.state.name)  && this.state.name.map(el => {

                            return (
                                    <table class="screenertable">
                                        <tr class="trscreener" >
                                            <Link class="linkscreener" to={`/stockdetail/${el["1. symbol"]}`}>
                                                <td class="namecompany"><p class="pscreener">{el["2. name"]}</p></td>
                                                <td class="symbolcompany"><p class="pscreener">{el["1. symbol"]}</p></td>

                                            </Link>
                                        </tr>
                                    </table>
                            );
                        })}</div>
                    
                
            </div>
        )
    }
}

