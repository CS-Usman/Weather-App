import React, { useEffect, useState } from "react";
import LocationAndTime from "./components/LocationAndTime";
import CurrentWeather from "./components/CurrentWeather";
import currentWeatherData from "./api/CurrentWeatherData";
import weatherForcastData from "./api/weatherForecastData";
import WeatherForecast from "./components/weatherForecast";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [forecast,setForecast] = useState("null");
  const [sendingRequest, setSendingRequest] = useState(false);

  const handleCity = (event) => {
    setCity(event.target.value);
  };
  
  // const getData = async() =>{
  //   try{
  //     const data = await currentWeatherData(city);
  //     setData(data);
  //     const forecastData = await weatherForcastData(city);
  //     setForecast(forecastData);
  //   }catch(err){
  //     console.log(err.message);
  //   }
  // }
  useEffect(()=>{
    const getData = async() =>{
      try{
        const data = await currentWeatherData(city);
        setData(data);
        const forecastData = await weatherForcastData(city);
        setForecast(forecastData);
      }catch(err){
        console.log(err.message);
      }
    }
    getData();
  },[sendingRequest])

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
            setSendingRequest(true);
            // getData();
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
