// navbar/Navbar.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../auth/AuthService";
import logo from "../../logo-ironhack-blue.png";
import "./Navbar.css"
import Screener from "../contents/Screener";
import Stockdetail from "../contents/stockdetail";

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
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/screener">Screener</Link>
              </li>
             

            </ul>
          </nav>
        </div>
      );
    }
  }
}

export default Navbar;
