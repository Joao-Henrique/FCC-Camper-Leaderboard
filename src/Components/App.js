import React, { Component } from "react";
import logo from "../logo.svg";
import "../Styles/App.css";
import CamperList from "./CamperList";
import axios from "axios";

class App extends Component {
  //////////////////    CONSTRUCTOR     ///////////////////
  constructor(props) {
    super(props);
    this.state = {
      RecentCampers: [],
      AllTimeCampers: [],
      currentView: "RecentCampers"
    };
  }
  ////////////////////////////////////////////////////////

  ////////      AXIOS GETS DATA FROM API        //////////
  fetchRecentCampers() {
    return axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent");
  }
  fetchAllTimeCampers() {
    return axios.get(
      "https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
    );
  }
  ////////////////////////////////////////////////////////

  changeView(currentView) {
    this.setState({ currentView });
  }

  //////////      LIFECICLE COMPONENT     //////////////
  componentWillMount() {
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()]).then(
      axios.spread((recentCampers, allTimeCampers) => {
        this.setState({
          RecentCampers: recentCampers.data,
          AllTimeCampers: allTimeCampers.data
        });
      })
    );
  }
  ////////////////////////////////////////////////////////

  //////////      RENDER APLICATION     //////////////
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FCC Camper Leaderboard by João Henrique</h1>
        </header>
        <h3>{`Viewing Top ${this.state.currentView}`}</h3>
        <button
          onClick={() => this.changeView("RecentCampers")}
          className="btn"
        >
          Recent
        </button>
        <button
          onClick={() => this.changeView("AllTimeCampers")}
          className="btn"
        >
          All Time
        </button>
        <CamperList campers={this.state[this.state.currentView]} />
      </div>
    );
  }
  ////////////////////////////////////////////////////////
}

export default App;
