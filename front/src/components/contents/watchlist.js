import React, { Component } from 'react'
import AuthService from '../auth/AuthService';
import { Link } from "react-router-dom";

export default class Watchlist extends Component {
    constructor(props) {
        super(props)
        this.service = new AuthService()
        this.state = {
            loggedInUser: {
                stocks: []
            },
            stocks: null,

        };

    }
   


    
    componentDidMount() {

        this.service.loggedin()
            .then(response => this.setState({
                ...this.state,
                stocks: response.stocksFollow
            }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <div>
                {/* {this.props.userInSession} */}
                <table >
                    <h3>Watchlist</h3>

                    <tr>
                        {Array.isArray(this.state.stocks) ? <td>{this.state.stocks.map(data => {

                            return (
                                <div>
                                    <Link to={`stockdetail/${data}`}>  <p>{data}</p></Link>
                                </div>
                            );
                        })}</td> : null}

                    </tr>
                </table>
            </div>
        )
    }
}