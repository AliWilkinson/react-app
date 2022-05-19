import axios from "axios";
import React, { useState } from "react";
import "./searchEngine.css";
import CurrentWeather from "./currentWeather";
import DateTime from "./dateTime";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  function showWeather(response) {
    setWeather({
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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
      <div align="right" className="col-5">
        <button id="location-button" title="Use Current Location">
          <i className="fas fa-location-arrow"></i>
        </button>
      </div>
      <div className="col-7">
        <form id="city-search" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-10">
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
            </div>
            <div className="col-2">
              <input type="submit" value="search" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div>
      {form}
      <DateTime />
      <CurrentWeather weather={weather} />
    </div>
  );
}
