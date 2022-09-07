import React from "react";

function LocationAndTime(props) {
  const cityName = props.city;
  let currentDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="locationTime">
      {cityName}
      {currentDate}
    </div>
  );
}

export default LocationAndTime;
