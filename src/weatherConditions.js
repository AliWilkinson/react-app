import React from "react";

export default function weatherConditions() {
  return (
    <div>
      <ul id="weather-conditions">
        <li>
          Feels like <span id="feel-like-temp"> </span>&deg;C
        </li>
        <li>
          Humidity: <span id="humidity"></span>%
        </li>
        <li>
          Wind: <span id="wind"> </span>km/h
        </li>
      </ul>
    </div>
  );
}
