import React, { Component } from 'react'
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import "./_sectorsPerfomance.css"


export default class SectorsPerfomance extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: [],
        };
    }

    getData = () => {
        axios
            .get(`https://financialmodellingprep.com/api/v3/stock/sectors-performance`
            )
            .then(response => {

                this.setState({
                    name: response.data.sectorPerformance
                });


            });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <table class="sectorperfomancetable">
                <caption>Sector perfomance</caption>

                    <tr>
                        <td>{this.state.name.map(data => <p>{data.sector}</p>)}</td>
                        <td>{this.state.name.map(data => <p>{data.changesPercentage}</p>)}</td>
                    </tr>
                </table>
                
            </div>
        )
    }
}
