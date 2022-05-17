import React from "react";
import "./currentWeather.css";

export default function CurrentWeather() {
  return (
    <div>
      <h1 id="city">London</h1>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <h2>
            <span id="temp"></span>30&deg;<span id="unit">C</span>
          </h2>
        </div>
      </div>
      <h3 id="description">Sunny</h3>
    </div>
  );
}
