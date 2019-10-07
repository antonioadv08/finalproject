
import React, { Component } from 'react'
import axios from "axios";
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"



export default class Screener extends Component {

    state = {
        name: [],
        symbol: [],

    };



    searchProducts() {
        let search = this.state.searchString
        let dataSearch = [...this.state.filtered];
        let filteredData = dataSearch.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()));
       
        this.setState({
            ...this.state,
            products: filteredData
        });

    }
    checkSearch(e) {
        this.setState({
            ...this.state,
            searchString: e.target.value
        },
        
        () => this.searchProducts());
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar search={e => this.checkSearch(e)} />
                <ProductTable products={this.state.products} />

            </div>
        )
    }



    dataPrices = () => {
        axios
            .get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=247QRNTD6G5X6Q7Q`
            )
            .then(response => {

                console.log(response.data.bestMatches[0]["1. symbol"]);
                console.log(response.data.bestMatches[0]["2. name"]);

                this.setState({
                    name: response.data.bestMatches[0]["2. name"],
                    symbol: response.data.bestMatches[0]["1. symbol"],
                });
            });

    };
    componentDidMount() {
        this.dataPrices();
    }

    render() {
        return (
            <div>
            <form >
                <input
                    type="search"
                    name="search"
                    onChange={e => this.props.search(e)}
                ></input>
                <br />

            </form>
                <h2>{this.state.name}</h2>
                <h2>{this.state.symbol}</h2>
            </div>
        )
    }
}

