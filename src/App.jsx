import React, { useState ,useEffect} from "react";
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
      setData(data);
    }catch(err){
      console.log(err.message);
    }
  }
  
  const getForecastData = async()=>{
    try{
      const forecastData = await weatherForcastData(city);
      setForecast(forecastData)
    }catch(err){
      console.log(err.message);
    }
  }
  useEffect(()=>{
    getData();
    getForecastData();
  },[])
  // console.log(data);
  // converting sunrise and sunset
  // let sunriseInLocalTime = new Date();
  // sunriseInLocalTime.setUTCHours(data.sunrise);

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
            getForecastData();
          }}>Search</button>
          {data!==null ? <CurrentWeather data={data} />:null}
        </div>
      </div>
      <div>
        {forecast !== null ? <WeatherForecast list={forecast.list}/>:null}
      </div>
      {/* <div>
        <div className="currentWeather">
          <img
            src={"http://openweathermap.org/img/wn/" + data.icon + "@2x.png"}
            alt=""
          />
          {data.temp} {data.description}
        </div>
        <div className="weatherDetails">
          <div>
            {data.temp_max} Max temp {data.wind} Wind {data.sunrise} Sunrise
          </div>
          <div>
            {data.temp_min} Min temp {data.rain_probability} % Rain{" "}
            {data.sunset} Sunset
          </div>
        </div>
      </div> */}
      <div className="weatherForecast"></div>
    </div>
  );
}

export default App;
