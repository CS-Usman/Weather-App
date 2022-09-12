import React, { useState } from "react";
import LocationAndTime from "./components/LocationAndTime";
import CurrentWeather from "./components/CurrentWeather";
import currentWeatherData from "./api/CurrentWeatherData";
import weatherForcastData from "./api/weatherForecastData";
import WeatherForecast from "./components/weatherForecast";

import "./css/weatherForecast.css";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [request, setRequest] = useState(false);

  const handleCity = (event) => {
    setCity(event.target.value);
  };

  const handleClick = ()=>{
    setRequest(true);
    getData();
  }

  const getData = async() =>{
    console.log(request);
    try{
      if(request){
        const data = await currentWeatherData(city);
        setData(data);
        const forecastData = await weatherForcastData(city);
        setForecast(forecastData);
      }
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <div>
      <div>
        <LocationAndTime city={city} />
        <div>
          <input
            type="text"
            placeholder="Search Location"
            value={city}
            onChange={handleCity}
          />
          <button onClick={handleClick}>Search</button>
          {data !== null ? <CurrentWeather weatherData={data} /> : null}
        </div>
      </div>
      <div>
        {forecast !== null ? <WeatherForecast list={forecast.list} /> : null}
      </div>
    </div>
  );
}

export default App;