import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";

// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/navbar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Screener from "./components//contents/Screener";
import Stockdetail from  "./components/contents/stockdetail"
import News from  "./components/contents/news"
import Tv from "./components/contents/Tv"
import Chart from "./components/contents/chart"
import Home from "./components/contents/home"
import MostGainers from "./components/contents/mostGainers";
import MostLosers from "./components/contents/mostLosers";
import MostActive from "./components/contents/mostActive";
import SectorsPerfomance from "./components/contents/sectorsPerfomance";
import StockNumbers from "./components/contents/stockNumbers";
import CreateRecomendation from "./components/contents/createRecomendation";
import Followbutton from "./components/contents/followbutton";
import Watchlist from "./components/contents/watchlist";
import Tickertape from "./components/tickertape";





// import Tape from "./components/home/Tape";

//App es la aplicación base, que se sirve del servicio AuthService para conectar con la bbdd
class App extends Component {
  //en el tiempo de construcción de la aplicación, creamos una instancia del authservice
  constructor(props) {
    super(props);
    //arrancamos el estado con un valor de loggedInUser con nada (luego lo vamos a reemplazar con el valor real)
    this.state = {
      loggedInUser: null 
    
    };
    this.service = new AuthService();

    this.fetchUser()
  }

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response,
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false,
        });
      });
  }
  


  render() {
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>
          <Redirect  />

          <div className="App">
            <header className="App-header">
              <Tickertape></Tickertape>
              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Switch>
               
                <Route exact path="/Screener" render={() => <Screener getUser={this.getUser} />} />
                <Route exact path="/stockdetail/:companyID" render={(props) => {
                  return <Stockdetail companyID={props.match.params.companyID}  getUser={this.getUser} />}}
                   />
              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          <Redirect  />

          <div className="App">
            <header className="App-header">
            <Tickertape></Tickertape>

              <Navbar userInSession={this.state.loggedInUser} logout={this.logout} />
              <Switch>
                <Route exact path="/signup" render={() => <Signup getUser={this.getUser} />} />
                <Route exact path="/login" render={() => <Login getUser={this.getUser} />} />
                <Route exact path="/Screener" render={() => <Screener getUser={this.getUser} />} />
                <Route exact path="/stockdetail/:companyID" render={(props) => {
                  return <Stockdetail companyID={props.match.params.companyID}  getUser={this.getUser} />}}
                   />

                <Route exact path="/tv" render={() => <Tv getUser={this.getUser} />} />
                <Route exact path="/chart" render={() => <Chart getUser={this.getUser} />} />
                <Route exact path="/news" render={() => <News getUser={this.getUser} />} />
                <Route exact path="/home" render={() => <Home getUser={this.getUser} />} />
                <Route exact path="/mostGainers" render={() => <MostGainers getUser={this.getUser} />} />
                <Route exact path="/mostLosers" render={() => <MostLosers getUser={this.getUser} />} />
                <Route exact path="/mostActive" render={() => <MostActive getUser={this.getUser} />} />
                <Route exact path="/sectorsPerfomance" render={() => <SectorsPerfomance getUser={this.getUser} />} />
                <Route exact path="/stockNumbers" render={() => <StockNumbers getUser={this.getUser} />} />
                <Route exact path="/createRecomendation" render={() => <CreateRecomendation getUser={this.getUser} />} />
                <Route exact path="/followbutton" render={() => <Followbutton getUser={this.getUser} />} />
                <Route exact path="/watchlist" render={() => <Watchlist getUser={this.getUser} />} />
                <Route exact path="/tickertape" render={() => <Tickertape getUser={this.getUser} />} />


              </Switch>
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
