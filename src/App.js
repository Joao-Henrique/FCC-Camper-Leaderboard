import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: "recentCampers"
    };
  }

  componentWillMount() {
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()]).then(
      axios.spread(function(recentCampers, allTimeCampers) {
        this.setState({
          recentCampers: recentCampers
        });
      })
    );
  }

  ////////      AXIOS GETS DATA FROM API        ////////
  fetchRecentCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  }
  fetchAllTimeCampers() {
    return axios.get(
      "https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
    );
  }
  ////////////////////////////////////////////////////////

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Camper Leaderboard by João Henrique</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
