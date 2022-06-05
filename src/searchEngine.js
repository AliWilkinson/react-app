import axios from "axios";
import React, { useState } from "react";
import "./searchEngine.css";
import CurrentWeather from "./currentWeather";
import DateTime from "./dateTime";
import WeatherConditions from "./weatherConditions";
import Forecast from "./forecast";

export default function SearchEngine(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ ready: false });
  const [conditions, setConditions] = useState({});

  function showWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      timezone: response.data.timezone,
    });
    setConditions({
      feel: Math.round(response.data.main.feels_like),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = `5c086425194ae4da9c42b9089eab65e7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  let form = (
    <div className="row">
      <div align="right" className="col-7"></div>
      <div className="col-5">
        <form id="city-search" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              id="city-name"
              type="search"
              className="form-control"
              placeholder="Search a City"
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
        </form>
      </div>
    </div>
  );

  if (weather.ready) {
    console.log(weather);
    return (
      <div>
        {form}
        <DateTime date={weather.date} timezone={weather.timezone} />
        <CurrentWeather weather={weather} />
        <Forecast coordinates={weather.coordinates} />
        <WeatherConditions conditions={conditions} />
      </div>
    );
  } else {
    const apiKey = `5c086425194ae4da9c42b9089eab65e7`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
}
