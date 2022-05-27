import React from "react";
import "./dateTime.css";

export default function DateTime(props) {
  let UTCHours = new Date().getUTCHours();
  let UTCMinutes = new Date().getUTCMinutes();
  let secondsFromUTC = props.timezone;
  let TimezoneMinutes = (secondsFromUTC % 3600) / 60;
  let TimezoneHours = (secondsFromUTC % 86400) / 3600;
  let localHours = UTCHours + TimezoneHours;

  if (localHours >= 24) {
    localHours = localHours - 24;
  }
  if (localHours < 10) {
    localHours = `0${localHours}`;
  }

  let localMinutes = UTCMinutes + TimezoneMinutes;
  if (localMinutes < 10) {
    localMinutes = `0${localMinutes}`;
  }

  return (
    <div>
      <br />
      <small className="localTime">
        {localHours} : {localMinutes}{" "}
      </small>
      <br />
    </div>
  );
}
