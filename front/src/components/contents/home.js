import React, { Component } from 'react'
import Screener from './Screener'
import axios from "axios";
import MostGainers from './mostGainers';
import MostLosers from './mostLosers';
import MostActive from './mostActive';
import SectorsPerfomance from './sectorsPerfomance';

export default class home extends Component {

    render() {

        return (
            <div>
                <Screener></Screener>
                <MostGainers></MostGainers>
                <MostLosers></MostLosers>
                <MostActive></MostActive>
                <SectorsPerfomance></SectorsPerfomance>

            </div>
        )
    }
}
