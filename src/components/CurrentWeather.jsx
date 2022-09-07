import React from "react";

function CurrentWeather(props) {
  let weatherData = props.data;
  
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
          {weatherData.main.temp_max} Max temp {weatherData.wind.speed} Wind {weatherData.sys.sunrise} Sunrise
        </div>
        <div>
          {weatherData.main.temp_min} Min temp {weatherData.humidity} % Rain {weatherData.sys.sunset}{" "}
          Sunset
        </div>
      </div>
    </div>
  );
}
export default CurrentWeather;
