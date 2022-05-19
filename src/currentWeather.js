import React from "react";
import "./currentWeather.css";

export default function CurrentWeather(props) {
  return (
    <div>
      <h1 id="city">{props.weather.city}</h1>
      <div className="row">
        <div className="col-6">
          <img
            src={props.weather.icon}
            alt={props.weather.description}
            width="150"
          />
        </div>
        <div className="col-6">
          <h2>
            <span id="temp"></span>
            {props.weather.temperature}
            <span id="unit">C</span>
          </h2>
        </div>
      </div>
      <h3 id="description">{props.weather.description}</h3>
    </div>
  );
}
