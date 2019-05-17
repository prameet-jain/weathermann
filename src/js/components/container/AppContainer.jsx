import React, { Component } from "react";
import ReactDOM from "react-dom";

class AppContainer extends Component {
  constructor() {
    super();
  }
  render() {
    return <div>Weathermann App Loaded !!</div>;
  }
}
export default AppContainer;

const wrapper = document.getElementById("weather-app");
wrapper ? ReactDOM.render(<AppContainer />, wrapper) : false;
