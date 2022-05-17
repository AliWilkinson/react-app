import React from "react";
import SearchEngine from "./searchEngine";
import DateTime from "./dateTime";
import CurrentWeather from "./currentWeather";
import WeatherConditions from "./weatherConditions";
import OpenSource from "./openSource";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <h1>Weather App</h1>
            <SearchEngine />
            <DateTime />
            <CurrentWeather />
            <div className="lowerSection">
              <WeatherConditions />
              <OpenSource />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
