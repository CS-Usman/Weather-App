import React,{useState,useEffect} from "react";
let convertUtcToLocal = (utcTime) =>{
  let sec = utcTime * 1000;
  let date = new Date(sec);
  let localTime = date.toLocaleTimeString();
  return localTime
}

function CurrentWeather({weatherData}) {
  const [time, setTime] = useState({
    sunrise: "",
    sunset: ""
  });

  useEffect(() => {
    if (weatherData) {
      setTime({
        sunrise : convertUtcToLocal(weatherData.sys.sunrise),
        sunset: convertUtcToLocal(weatherData.sys.sunset)
      });
    }
  }, [weatherData]);
  
  return (
    <div>
        <div className="currentWeather">
        <img
          src={"http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"}
          alt="Icon"
        />
        {weatherData.main.temp} {weatherData.weather[0].description}
      </div>
      <div className="weatherDetails">
        <div>
          {weatherData.main.temp_max} Max temp {weatherData.wind.speed} Wind {time.sunrise} Sunrise
        </div>
        <div>
          {weatherData.main.temp_min} Min temp {weatherData.humidity} % Humidity {time.sunset}{" "}
          Sunset
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;