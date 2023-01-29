import axios from "axios";

export async function fetchWeather(city, setError) {
  console.log(process.env);
  // console.log(process.env.REACT_APP_WEATHER_API_KEY);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

  try {
    const response = await axios.get(url);
    setError("");
    console.log(response.data);
    return response.data;
    
  } catch (error) {
    setError("City Not Found!");
    return error;
  }
}



/*
import axios from "axios";

export async function fetchWeather(city, setError) {
  // console.log(process.env.REACT_APP_WEATHER_API_KEY);
  // const REACT_APP_WEATHER_API_KEY = 'a02057c7789cbbaf775719bed27c552f'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`;

  try {
    const response = await axios.get(url);
    setError("");
    return response.data
  } catch (error) {
    setError("City Not Found!");
    return error;
  }
}
*/ 