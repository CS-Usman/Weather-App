import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";
const currentWeatherData = async (city) => {
  try {
    let { data } = await axios.get(
      baseUrl + `q=${city}&units=metric&appid=${key}`
    );
    return data;
  } catch (err) {
    throw err;
  }
};
export default currentWeatherData;
