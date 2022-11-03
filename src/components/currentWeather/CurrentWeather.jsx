import React, { useState, useEffect } from "react";
import styles from "./currentWeather.module.css";

let convertUtcToLocal = (utcTime) => {
  let sec = utcTime * 1000;
  let date = new Date(sec);
  let localTime = date.toLocaleTimeString();
  return localTime;
};

function CurrentWeather({ weatherData }) {
  const [time, setTime] = useState({
    sunrise: "",
    sunset: "",
  });

  useEffect(() => {
    if (weatherData) {
      setTime({
        sunrise: convertUtcToLocal(weatherData.sys.sunrise),
        sunset: convertUtcToLocal(weatherData.sys.sunset),
      });
    }
  }, [weatherData]);

  return (
    <div className={styles.currentWeatherContainer}>
      <div className={styles.flexItems}>
        <img
          src={
            "http://openweathermap.org/img/wn/" +
            weatherData.weather[0].icon +
            "@2x.png"
          }
          alt="Icon"
        />
        <div className={styles.description}>
          {`${weatherData.main.temp} \u00b0 c`}
          <p>{weatherData.weather[0].description}</p>
        </div>
      </div>
      <span></span>
      <div className={styles.gridContainer}>
        <div>
          {`${weatherData.main.temp_max} \u00b0 c`}
          <p>Max temp</p>
        </div>
        <div>
          {weatherData.wind.speed}
          <p>Wind</p>
        </div>
        <div>
          {time.sunrise}
          <p>Sunrise</p>
        </div>
        <div>
          {`${weatherData.main.temp_min} \u00b0 c`}
          <p>Min temp</p>
        </div>
        <div>
          {weatherData.main.humidity}
          <p>Humidity</p>
        </div>
        <div>
          {time.sunset}
          <p>Sunset</p>
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
