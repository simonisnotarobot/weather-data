import React, {useState, useEffect} from 'react';

console.log(process.env.REACT_APP_WEATHERAPI_KEY)
const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=Manchester&days=1&aqi=no&alerts=no`;



const WeatherDisplay = () => {
    const [weatherData, setWeatherData] = useState(null)
    const fetchWeatherData = () => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setWeatherData(data.forecast.forecastday[0].hour)
        })
    }

    useEffect(() => {
        fetchWeatherData()
    }, [])
    return (
        <div>
            <h2>Today's Weather</h2>
            {weatherData && (
                <ul>{weatherData.map((hourlyData, i) => {
                    return <li key={'hour_' + i}>{hourlyData.time.split(" ")[1]}: {hourlyData.condition.text}</li>
                })}</ul>
                
    )}

        </div>
    )
}

export default WeatherDisplay;