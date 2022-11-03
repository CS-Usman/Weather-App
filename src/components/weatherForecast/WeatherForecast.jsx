import React from "react";
import styles from "./weatherForecast.module.css";
const time = (text) => text.slice(12, 19);

function WeatherForecast({ list }) {
  const forecastData = list;
  return (
    <div className={styles.weatherForecastSection}>
      {forecastData.map((item, index) => (
        <div className={styles.items} key={index}>
          <p>{time(item.dt_txt)}</p>
          <div>
            <img
              src={
                "http://openweathermap.org/img/wn/" +
                item.weather[0].icon +
                "@2x.png"
              }
              alt="Icon"
            />
            <p>{`${item.main.temp} \u00b0 c`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WeatherForecast;
