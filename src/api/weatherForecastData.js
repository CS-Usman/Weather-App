import axios from "axios";
const key = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?";
const weatherForcastData = async (city) => {
  try {
    const { data } = await axios.get(
      baseUrl + `q=${city}&units=metric&cnt=3&appid=${key}`
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export default weatherForcastData;
