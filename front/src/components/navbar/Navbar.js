// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import "./Navbar.css"

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }

  handleLogout = e => {
    this.props.logout();
  };

  render() {


    if (this.state.loggedInUser) {
      return (
        <nav className="nav-style">
          <ul>
            <li>
              <a onClick={this.handleLogout}>Logout</a>
            </li>
            <li>
              <Link to="/screener">Screener</Link>
            </li>
          </ul>

      
        </nav>
      );
    } else {
      return (
        <div>
          <nav className="nav-style">
            <ul>
            <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
             
              <li>
                <Link to="/news">News</Link>
              </li>
            
              <li>
                <Link to="/tv">Tv</Link>
              </li>
              <li>
                <Link to="/mostGainers">Mostgainers</Link>
              </li>
              <li>
                <Link to="/mostLosers">Mostlosers</Link>
              </li>
              <li>
                <Link to="/mostActive">Mostactive</Link>
              </li>
              <li>
                <Link to="/sectorsPerfomance">Sectorperfomance</Link>
              </li>
              <li>
                <Link to="/stocksNumbers">Stocknumbers</Link>
              </li>
              <li>
                <Link to="/createRecomendation">Create recomendation</Link>
              </li>



            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
