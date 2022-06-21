import React,{useState} from "react";
import axios from 'axios';

import backgound from "../images/valentin-1.jpg"

function App(){

    var date = new Date().getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    var month= monthNames[new Date().getMonth()];
    var year = new Date().getFullYear();

    // Day

    const dayNames = ["MONDAY ", " TUESDAY ", " WEDNESDAY ", " THURSDAY ", " FRIDAY ", " SATURDAY "," SUNDAY"];
    var day = dayNames[new Date().getDay()];

    const [city,setCity] = useState("");
    const [data,setData] = useState({

        // temp
        temp: undefined,
        country: undefined,
        icon : undefined,
        main:undefined,
        //info
        description: undefined,
        temp_min: undefined,
        temp_max: undefined,
        humidity: undefined,
        wind: undefined,
        cloud:undefined,
        sunrise: undefined,
        sunset: undefined
        
        

    })
    
    const handleClick = () =>{
        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid={APIKey}")
        .then((response) => {
            setData({
                
                //temp
                temp: response.data.main.temp,
                country: response.data.sys.country,
                icon: response.data.weather[0].icon,
                main:response.data.weather[0].main,

                // info
                description: response.data.weather[0].description,
                temp_min: response.data.main.temp_min,
                temp_max: response.data.main.temp_max,
                humidity: response.data.main.humidity,
                wind:response.data.wind.speed,
                cloud:response.data.clouds.all,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset

                
            })
        })
    }
    console.log(data);
    
    return(
        <div className="container">
        <img className="Image" src={backgound} alt="background" width={"100%"} height={"100%"}/>
            <div className = "temp">
                <div className="temp-info">
                    <h2 className="country-name">Country {data.country}</h2>
                    <h1 className="temp-data">{data.temp} °C</h1>
                </div>
                <div className="location-time">
                    
                    <h2 style={{fontSize:"2.2rem",color: "#f2f8fd"}}>{city}</h2>
                    <h3 className="time">{day}, {date} {month} ' {year}</h3>
                </div>
                <div className="condition">
                    <img src = {"http://openweathermap.org/img/wn/"+data.icon+"@2x.png"} alt=""/>
                    <h3 style = {{color: "#f2f8fd",marginLeft:"2rem",marginTop:"1rem"}}>{data.main}</h3>
                </div>
            </div>
            <div className="info">
                <div className ="input">
                    <input type="text" className="inputField" placeholder = "Search location "value = {city} onChange={ (event) => {
                            setCity(event.target.value)
                        }
                    }/>
                    <button type = "submit"onClick={handleClick} > <i className="fas fa-search"></i></button>
                    
                </div>
                <h2 style = {{marginBottom:"4rem",fontSize:"1.9rem",color:"#f2f8fd"}}>Weather Details</h2>
                <div className="details">
                    <h3 className="detail-element">Description : {data.description} </h3>
                    <h3 className="detail-element">Min Temperature : {data.temp_min} °C</h3>
                    <h3 className="detail-element">Max Temperature : {data.temp_max} °C</h3>
                    <h3 className="detail-element">Humidity : {data.humidity} %</h3>
                    <h3 className="detail-element">Clouds : {data.cloud} %</h3>
                    <h3 className="detail-element">Wind : {data.wind} m/s</h3>                   
                </div>

            </div>

        </div>
    );
}

export default App;
