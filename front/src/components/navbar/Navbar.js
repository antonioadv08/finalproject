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
              <Link class="links" to="/home">Home</Link>
            </li>
            <li>
              <Link class="links" to="/watchlist">Watchlist</Link>
            </li>
            <li>
              <a onClick={this.handleLogout} class="links">Logout</a>
            </li>
            <li>
              <Link class="links" to="/forexpanel">Forexpanel</Link>
            </li>
            <li>
              <Link class="links" to="/news">News</Link>
            </li>
            
          </ul>



        </nav>
      );
    } else {
      return (
          <nav className="nav-style">
            <ul>
              <li>
                <Link class="links" to="/home">Home</Link>
              </li>
              <li>
                <Link class="links" to="/signup">Signup</Link>
              </li>
              <li>
                <Link class="links" to="/login">Login</Link>
              </li>
              {/* <li>
                <Link to="/createRecomendation">Create recomendation</Link>
              </li> */}
               <li>
              <Link class="links" to="/forexpanel">Forexpanel</Link>
            </li>
            <li>
              <Link class="links" to="/news">News</Link>
            </li>
            
            </ul>
          </nav>
      );
    }
  }
}

export default Navbar;
