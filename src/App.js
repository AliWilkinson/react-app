import React from "react";
import SearchEngine from "./searchEngine";
import OpenSource from "./openSource";
import Forecast from "./forecast";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <SearchEngine />
            <div className="lowerSection">
              <Forecast />
              <OpenSource />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
