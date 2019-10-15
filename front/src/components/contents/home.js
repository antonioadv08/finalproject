import React, { Component } from 'react'
import Screener from './Screener'
import axios from "axios";
import MostGainers from './mostGainers';
import MostLosers from './mostLosers';
import MostActive from './mostActive';
import SectorsPerfomance from './sectorsPerfomance';
import "./_home.css"
import Tv from './Tv';
import Tickertape from '../tickertape';

export default class home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: [],
        };
    }

    getData = () => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/majors-indexes/.INX`
            )
            .then(response => {
                console.log(response.data)
                this.setState({
                    name: response.data
                });


            });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        // console.log(this.name.indexName)

        return (
            <div>
                <Screener></Screener>

                {this.state.name.indexName}
                <br/>
                {this.state.name.changes}
                <br/>

                {this.state.name.price}


                <div class="stockspanel">
                    <MostGainers></MostGainers>
                    <MostLosers></MostLosers>
                    <MostActive></MostActive>
                </div>
                <div class="stockspaneldown">
                    <SectorsPerfomance></SectorsPerfomance>
                    {/* <Tv></Tv> */}
                </div>
            </div>
        )
    }
}
