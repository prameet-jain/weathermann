import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import AppContainer from "./container/AppContainer.jsx";

const wrapper = document.getElementById("weather-app");
wrapper
  ? ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>,
      wrapper
    )
  : false;
