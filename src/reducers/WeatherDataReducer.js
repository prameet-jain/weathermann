import produce from "immer";
import {
  GET_WEATHER_DATA_REQUEST,
  GET_WEATHER_DATA_SUCCESS,
  GET_WEATHER_DATA_FAILURE
} from "../constants/action-types";

const EMPTY_OBJECT = {};

const initialState = {
  data: EMPTY_OBJECT,
  error: undefined,
  isDataLoaded: false
};

const KelvinToFahrenheit = temp => (temp - 273.15) * 1.8 + 32;
const KelvinToCelsius = temp => temp - 273.15;

const formatDateTime = dt_str => {
  const formatOptions = {
    year: "2-digit",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  };
  const dt = new Date(dt_str);
  const formattedDateText = new Intl.DateTimeFormat(
    "default",
    formatOptions
  ).format(dt);

  return formattedDateText;
};

const parseData = data => {
  const parsedData = data.list.map(item => {
    return {
      dt_txt: item.dt_txt,
      fmt_dt_txt: formatDateTime(item.dt_txt),
      temp: item.main.temp,
      temp_c: KelvinToCelsius(item.main.temp).toFixed(2),
      temp_f: KelvinToFahrenheit(item.main.temp).toFixed(2)
    };
  });

  return parsedData;
};

const WeatherDataReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA_REQUEST: {
      draft.error = null;
      draft.data = null;
      draft.isDataLoaded = false;
      return draft;
    }
    case GET_WEATHER_DATA_SUCCESS: {
      draft.error = null;
      draft.data = parseData(action.result);
      draft.isDataLoaded = true;
      return draft;
    }
    case GET_WEATHER_DATA_FAILURE: {
      draft.error = action.error;
      draft.data = null;
      draft.isDataLoaded = false;
      return draft;
    }
  }
}, initialState);

export default WeatherDataReducer;
