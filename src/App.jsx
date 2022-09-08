import React, { useState } from "react";
import LocationAndTime from "./components/LocationAndTime";
import CurrentWeather from "./components/CurrentWeather";
import currentWeatherData from "./api/CurrentWeatherData";
import weatherForcastData from "./api/weatherForecastData";
import WeatherForecast from "./components/weatherForecast";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [forecast,setForecast] = useState("null");
  const handleCity = (event) => {
    setCity(event.target.value);
  };
  
  const getData = async() =>{
    try{
      const data = await currentWeatherData(city);
      const forecastData = await weatherForcastData(city);
      setForecast(forecastData)
      setData(data);
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
          <button onClick={() => {
            getData();
          }}>Search</button>
          {data!==null ? <CurrentWeather data={data} />:null}
        </div>
      </div>
      <div>
        {forecast !== null ? <WeatherForecast list={forecast.list}/>:null}
      </div>
      <div className="weatherForecast"></div>
    </div>
  );
}

export default App;
