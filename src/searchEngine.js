import React from "react";
import "./searchEngine.css";

export default function SearchEngine() {
  let form = (
    <div className="row">
      <div align="right" className="col-5">
        <button id="location-button" title="Use Current Location">
          <i className="fas fa-location-arrow"></i>
        </button>
      </div>
      <div className="col-7">
        <form id="city-search">
          <div className="row">
            <div className="col-10">
              <div className="form-group">
                <input
                  id="city-name"
                  type="search"
                  className="form-control"
                  placeholder="Search a City"
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
      <ul>
        <li>Temperature:30&deg;C </li>
      </ul>
    </div>
  );
}
