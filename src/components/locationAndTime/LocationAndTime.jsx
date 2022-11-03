import React from "react";
import styles from "./locationAndTime.module.css";

function LocationAndTime(props) {
  const cityName = props.city;
  let currentDate = new Date().toLocaleDateString("en-us", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  return (
    <div className={styles.locationTime}>
      {cityName + " "} {currentDate}
    </div>
  );
}

export default LocationAndTime;
