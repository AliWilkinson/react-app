import React from "react";
import WeatherIcon from "./weatherIcon";

export default function weatherForecastDay(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }
  function minTemperature() {
    let temp = Math.round(props.data.temp.min);
    return `${temp}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDate();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="weatherForecastDay">
      <div className="Forecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={30} />
      <div className="Forecast-temps">
        <span className="Forecast-max">{maxTemperature()}&deg; </span>
        <span className="Forecast-min">{minTemperature()}&deg; </span>
      </div>
    </div>
  );
}
