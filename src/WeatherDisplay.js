import React, {useState, useEffect} from 'react';

const WeatherDisplay = ({location}) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${location}&days=1&aqi=no&alerts=no`;
    const [weatherData, setWeatherData] = useState(null)
    const fetchWeatherData = () => {
        const localhour = parseInt(new Date().toLocaleString().split(" ")[1].slice(0,2))    
        fetch(url)
        .then(response => response.json())
        .then(data => {
            const fromNow = data.forecast.forecastday[0].hour.filter((hour) => {
                const hourTimeData = parseInt(hour.time.split(" ")[1].slice(0,2))
                return hourTimeData >= localhour
            })
            setWeatherData(fromNow)
        })
    }
    
    useEffect(() => {
        fetchWeatherData()
    })
    return (
        <>
            <div>
                <h2>Showing today's weather for {location}</h2>
            </div>
            <div>
                {weatherData && (
                    <table className="table table-striped table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Time</th>
                                <th scope="col">Summary</th>
                                <th scope="col">Temp</th>
                                <th scope="col">Chance of Rain</th>
                            </tr>
                        </thead>
                        <tbody>
                            {weatherData.map((hourlyData, i) => {
                            return <tr key={'hour_' + i}>
                                <td>{hourlyData.time.split(" ")[1]}</td>
                                <td><img src={`https:${hourlyData.condition.icon}`} alt={`${hourlyData.condition.text} icon`}/>{hourlyData.condition.text}</td>
                                <td>{Math.round(parseInt(hourlyData.temp_c))}</td>
                                <td>{Math.round(parseInt(hourlyData.chance_of_rain))}%</td>
                            </tr>
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    )
}

export default WeatherDisplay;