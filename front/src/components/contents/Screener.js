
import React, { Component } from 'react'
import axios from "axios";
// import SearchBar from "./SearchBar"
// import ProductTable from "./ProductTable"



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

                // const x = [];
                // const y = [];

                // for (var i in response.data.bestMatches) {
                //     x.push(response.data.bestMatches[i]["1. symbol"]);

                // }
                // for (var j in response.data.bestMatches) {
                //     y.push(response.data.bestMatches[j]["2. name"]);
                // }

                // var names = [];

                // for (var i = 0 ; i < response.data.bestMatches.length; i++){
                //     for (var key in response.data.bestMatches[i]){
                //         if (key === "2. name")	names.push(response.data.bestMatches[i][key])
                //     }
                // }

              
                this.setState({
                    search:word,
                    name: response.data.bestMatches
                });


            });
    };

    componentDidMount() {
       
    }

    handleSearch = event => {
        const value = event.target.value;
        this.setState({search:value})
        let searchWord = value

        
        this.getData(searchWord);
    };

    render() {
        console.log(this.state.name)
        // const filteredStock = this.state.name.filter(el => {
        //     return el.name.toLowerCase().includes(this.state.search.toLowerCase());
        // });

     

        return (
            
            <div>
                {Array.isArray(this.state.name)?
                <div>
            <div>
                <label htmlFor="search">Search</label>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={this.state.search}
                    onChange={this.handleSearch}
                />
                
            </div>
            
              {this.state.name.map(el => {
                  console.log("entra")
                return (
                    <div>
                        <h2>{el["2. name"]}</h2>
                    </div>
                );
            })}</div>:
             <div>
            <label htmlFor="search">Search</label>
            <input
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

