import {
  CHANGE_TEMP_UNIT,
  SET_PAGE_NUMBER,
  GET_WEATHER_DATA_REQUEST,
  GET_WEATHER_DATA_SUCCESS,
  GET_WEATHER_DATA_FAILURE
} from "../constants/action-types";
import OpenWeatherAPI from "../api/openWeatherAPI";

export function changeTempUnit(payload) {
  return { type: CHANGE_TEMP_UNIT, payload };
}

export function setPageNumber(payload) {
  return { type: SET_PAGE_NUMBER, payload };
}

export function getWeatherData() {
  return {
    types: [
      GET_WEATHER_DATA_REQUEST,
      GET_WEATHER_DATA_SUCCESS,
      GET_WEATHER_DATA_FAILURE
    ],
    promise: () => OpenWeatherAPI.getForecast()
  };
}
