import React, { useState } from "react";
import "./forecast.css";
import axios from "axios";
import WeatherForecastDay from "./weatherForecastDay";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function search() {
    let apiKey = `5c086425194ae4da9c42b9089eab65e7`;
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    console.log(forecast);

    return (
      <div className="row fiveday-forecast" id="forecast">
        <div className="col">
          <WeatherForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    search();
    return null;
  }
}
