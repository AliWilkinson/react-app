import React from "react";
import "./currentWeather.css";
import WeatherIcon from "./weatherIcon";

export default function CurrentWeather(props) {
  return (
    <div className="currentWeather">
      <h1 id="city">
        {props.weather.city} {props.weather.temperature}
        <span className="units"> &deg;C</span>
      </h1>

      <div className=" icon">
        <WeatherIcon code={props.weather.icon} size={90} />
      </div>

      <h3 id="description">{props.weather.description}</h3>
    </div>
  );
}
