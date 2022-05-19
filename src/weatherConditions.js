import React from "react";
import "./weatherConditions.css";

export default function weatherConditions(props) {
  return (
    <div>
      <ul id="weather-conditions">
        <li>Feels like {props.conditions.feel}&deg;C</li>
        <li>Humidity: {props.conditions.humidity}%</li>
        <li>Wind: {props.conditions.wind} km/h</li>
      </ul>
    </div>
  );
}
