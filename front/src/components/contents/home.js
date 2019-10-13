import React, { Component } from 'react'
import Screener from './Screener'
import axios from "axios";
import MostGainers from './mostGainers';
import MostLosers from './mostLosers';
import MostActive from './mostActive';
import SectorsPerfomance from './sectorsPerfomance';
import "./_home.css"

export default class home extends Component {

    render() {

        return (
            <div>
                <Screener></Screener>

                <div class="stockspanel">
                <MostGainers></MostGainers>
                <MostLosers></MostLosers>
                <MostActive></MostActive>
                </div>
                
                <SectorsPerfomance></SectorsPerfomance>

            </div>
        )
    }
}
