import { combineReducers } from "redux";
import TemperatureControlReducer from "./TemperatureControlReducer";
import WeatherDataReducer from "./WeatherDataReducer";
import PaginationControlReducer from "./PaginationControlReducer";

const appReducer = combineReducers({
  TemperatureControlReducer,
  WeatherDataReducer,
  PaginationControlReducer
});

function rootReducer(state, action) {
  return appReducer(state, action);
}
export default rootReducer;
