import React, { Component } from "react";
import "./App.css";
const axios = require("axios");

class App extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: ""
    };
  }

  getWeatherData = () => {
    axios
      .get(
        "https://api.darksky.net/forecast/652129f565e2239ce9c863964f033fd0/40.742602, -73.941667"
      )
      .then(res => {
        this.setState({
          weatherData: res.data
        });
      })
      .catch(err => {
        console.log("error");
      });
  };


  render() {
      this.getWeatherData();
  console.log(this.state);

    return <>
    </>;
  }
}

export default App;

// <button onClick={this.getWeatherData}> Click! </button>
