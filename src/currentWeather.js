import React from "react";
import "./currentWeather.css";
import WeatherIcon from "./weatherIcon";

export default function CurrentWeather(props) {
  return (
    <div>
      <h1 id="city">{props.weather.city}</h1>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.weather.icon} size={90} />
        </div>
        <div className="col-6">
          <h2>
            {props.weather.temperature}
            <span className="units"> &deg;C</span>
          </h2>
        </div>
      </div>
      <h3 id="description">{props.weather.description}</h3>
    </div>
  );
}
