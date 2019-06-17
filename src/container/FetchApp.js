import React from "react";
import { connect } from "react-redux";

import {
  getWeatherData,
  changeTempUnit,
  setPageNumber
} from "../actions/index";

const mapStateToProps = state => {
  return {
    isDataLoaded: state.WeatherDataReducer.isDataLoaded,
    apiError: state.WeatherDataReducer.error,
    weatherData: state.WeatherDataReducer.data,
    tempUnit: state.TemperatureControlReducer.tempUnit,
    paginationData: state.PaginationControlReducer
  };
};

class FetchApp extends React.Component {
  componentDidMount() {
    this.props.getWeatherData();
  }
  render() {
    if (!this.props.isDataLoaded) {
      if (this.props.apiError) return this.props.error();

      return this.props.loader();
    }

    if (this.props.isDataLoaded)
      return this.props.render({
        weatherData: this.props.weatherData,
        tempData: {
          tempUnit: this.props.tempUnit,
          changeTempUnit: this.props.changeTempUnit
        },
        paginationData: {
          ...this.props.paginationData,
          setPageNumber: this.props.setPageNumber
        }
      });
  }
}

export default connect(
  mapStateToProps,
  { getWeatherData, changeTempUnit, setPageNumber }
)(FetchApp);
