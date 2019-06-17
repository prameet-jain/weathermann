import ApiClient from "./apiClient";
import {
  OPEN_WEATHER_API_BASE_URL,
  OPEN_WEATHER_APP_ID,
  SEARCH_CITY
} from "../config/appConfig";

export default class OpenWeatherAPI {
  static getForecast() {
    const url = `${OPEN_WEATHER_API_BASE_URL}forecast?q=${SEARCH_CITY}&APPID=${OPEN_WEATHER_APP_ID}`;

    return ApiClient.Get(url);
  }
}
