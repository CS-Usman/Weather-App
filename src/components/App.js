import React,{useState} from "react";

function App(){

    var date = new Date().getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    var month= monthNames[new Date().getMonth()];

    // Day

    const dayNames = ["MONDAY ", " TUESDAY ", " WEDNESDAY ", " THURSDAY ", " FRIDAY ", " SATURDAY "," SUNDAY"];
    var day = dayNames[new Date().getDay()];

    let[city,setCity] = useState("");
    let[data,setData] = useState({

        // weather main data
        city:undefined,
        country:undefined,
        icon:undefined,
        temp:undefined,
        description:undefined,
        
        // weather details
        temp_max:undefined,
        wind:undefined,
        sunrise:undefined,
        temp_min:undefined,
        rain_probability:undefined,
        sunset:undefined
    });


    const handleCity = (event) =>{
        setCity(event.target.value);
    }

    // reterieving data from api
    const handleClick = () => {

        // fetching for current weather 

        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=c01cd62b4d4b1c48b8273aae277e9771")
        .then(response => response.json())
        .then(response => {
            setData({
                city:response.name,
                country:response.sys.country,
                icon:response.weather[0].icon,
                temp:response.main.temp,
                description:response.weather[0].description,

                // setting weather details
                temp_max:response.main.temp_max,
                wind:response.wind.speed,
                sunrise:response.sys.sunrise,
                temp_min:response.main.temp_min,
                rain_probability:response.main.humidity,
                sunset:response.sys.sunset

            })
        })

        // fetching weather for Hourly
        fetch("https://pro.openweathermap.org/data/2.5/forecast/hourly?q="+city+"&appid=c01cd62b4d4b1c48b8273aae277e9771")
        .then(response => response.json())
        .then(response => console.log(response));

    };
             
    // console.log(data);
    // converting sunrise and sunset
    // let sunriseInLocalTime = new Date();
    // sunriseInLocalTime.setUTCHours(data.sunrise);


                        
                        
    
    return(
        <div>
            <div>
                <div className="locationTime">
                    {city}, {data.country}
                    {day} {date} {month}
                </div>
                <div >
                    <input type="text" placeholder="Search Location" value= {city} onChange ={handleCity}/>
                    <button onClick={handleClick}>Search</button>
                </div>
            </div>
            <div>
                <div className="currentWeather">
                    <img src = {"http://openweathermap.org/img/wn/"+data.icon+"@2x.png"} alt=""/>
                    {data.temp} {data.description}
                </div>
                <div className="weatherDetails">
                    <div>
                        {data.temp_max} Max temp {data.wind} Wind {data.sunrise} Sunrise
                    </div>
                    <div>
                        {data.temp_min} Min temp {data.rain_probability} % Rain {data.sunset} Sunset
                    </div>
                </div>
            </div>
            <div className="weatherForecast">

            </div>
        </div>
    );
}

export default App;
