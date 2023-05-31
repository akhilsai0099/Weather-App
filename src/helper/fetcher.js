import axios from "axios";

const fetcher = async (city) => {
    const geocoderResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=0f690fb60d42aa91dcd2959c81b5fe8b`);
    const geocoderData = geocoderResponse.data;
    let filteredData = geocoderData;
    if (geocoderData.length > 1) {
        filteredData = geocoderData.filter((item) => {
            return item.country === "IN";
        })
    }
    console.log(geocoderData)
    const lat = filteredData[0]["lat"]
    const lon = filteredData[0]["lon"]
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_URL}`
    const weatherResponse = await axios.get(url)

    const selectedFields = {
        main: weatherResponse.data.main,
        weather: weatherResponse.data.weather,

    }
    return JSON.stringify(selectedFields);
}

export default fetcher;