import axios from "axios";

const fetcher = async (city) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${import.meta.env.VITE_WEATHER_API_URL}`
    const weatherResponse = await axios.get(url)
    const selectedFields = {
        main: weatherResponse.data.main,
        weather: weatherResponse.data.weather,

    }
    return JSON.stringify(selectedFields);
}

export default fetcher;