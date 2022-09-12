import React from 'react';
const convertDayAndTime = (listItem)=>{
  const dayName = listItem.dt * 1000;
  return new Date(dayName).toLocaleDateString('en-US',{weekday:"long"});
}
const time = text => text.slice(12,19);

function WeatherForecast({list}) {
    const forecastData = list;
  return (
    
    <div className='weatherForecastSection'>{forecastData.map((item,index) => (
      <div className key={index}>
        <p>{convertDayAndTime(item)}</p>
        <div>
          <img
            src={"http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png"}
            alt="Icon"
          />
          <p>{item.main.temp}</p>
        </div>
        
        <p>{time(item.dt_txt)}</p>
      </div>
    ))}</div>
  )
}

export default WeatherForecast;