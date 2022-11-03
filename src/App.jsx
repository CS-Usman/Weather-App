import React, { useState } from "react";

import LocationAndTime from "./components/locationAndTime/LocationAndTime";
import CurrentWeather from "./components/currentWeather/CurrentWeather";
import WeatherForecast from "./components/weatherForecast/WeatherForecast";

import currentWeatherData from "./api/CurrentWeatherData";
import weatherForcastData from "./api/weatherForecastData";

import styles from "./App.module.css";

import { CiSearch } from "react-icons/ci";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [request, setRequest] = useState(false);

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleClick = () => {
    setRequest(true);
    getData();
  };

  const getData = async () => {
    console.log(request);
    try {
      if (request) {
        const data = await currentWeatherData(city);
        setData(data);
        const forecastData = await weatherForcastData(city);
        setForecast(forecastData);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={styles.App}>
      <div className={styles.topContainer}>
        <div>
          <LocationAndTime city={city} />
        </div>
        <div>
          <input
            type="text"
            placeholder="London..."
            value={city}
            onChange={handleCity}
          />
          <button onClick={handleClick}>
            <CiSearch size={25} />
          </button>
        </div>
      </div>
      {data !== null ? <CurrentWeather weatherData={data} /> : null}
      <div class={styles.forecastContainer}>
        {forecast !== null ? <WeatherForecast list={forecast.list} /> : null}
      </div>
    </div>
  );
}

export default App;
