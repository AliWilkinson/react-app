import React from "react";

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
          <div class="form-group">
            <input
              id="city-name"
              type="search"
              class="form-control"
              placeholder="Search a City"
            />
          </div>
          <input type="submit" value="search" />
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
