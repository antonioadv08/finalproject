// auth/Signup.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './AuthService'
import "./_login.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response)
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      })
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    return (
    
    <div class="log-form">
  <h2>Login to your account</h2>
  <form onSubmit={this.handleFormSubmit}>
    <input autoComplete="off" type="text" name="username" title="username" placeholder="username" value={this.state.username} onChange={e => this.handleChange(e)} />
    <input autoComplete="off" type="password" title="username" placeholder="password"  name="password" value={this.state.password} onChange={e => this.handleChange(e)}/>
    <input type="submit" class="btn" value="Login" />

  </form>
  <h1>{this.state.error ? 'Error' : ''}</h1>
</div>
    

    )   
  }
}

export default Login;