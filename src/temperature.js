import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div>
        <span id="temp"></span>
        <span>{props.celsius} </span>
        <span id="unit">&deg;C</span>
        <span> | </span>
        <span>
          <button onClick={showFahrenheit}>&deg;F</button>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span id="temp"></span>
        <span>{Math.round(fahrenheit())} </span>
        <span id="unit">
          <button onClick={showCelsius}>&deg;C</button>
        </span>
        <span> | </span>
        <span>&deg;F</span>
      </div>
    );
  }
}
