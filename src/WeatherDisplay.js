import React, {useState, useEffect} from 'react';

const WeatherDisplay = ({location}) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHERAPI_KEY}&q=${location}&days=1&aqi=no&alerts=no`;
    const [weatherData, setWeatherData] = useState(null)
    const [dataError, setDataError] = useState(null)
    useEffect(() => {
        const fetchWeatherData = () => {
            setDataError(null)
            const localhour = parseInt(new Date().toLocaleString().split(" ")[1].slice(0,2))
            
            fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data["error"]) {
                    setDataError(data["error"])
                    return
                }
                const fromNow = data.forecast.forecastday[0].hour.filter((hour) => {
                    const hourTimeData = parseInt(hour.time.split(" ")[1].slice(0,2))
                    return hourTimeData >= localhour
                    })
                setWeatherData(fromNow)
            })
         }
        fetchWeatherData()
    }, [url])
    return (
        <>
            <div>
                {(!dataError && weatherData) && (
                    <>
                        <div>
                            <h2>Showing today's weather for {location}</h2>
                        </div>
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
                    </>
                )}
            </div>
            {dataError && (
                <h2>😞 Something went wrong. Can't get weather for {location}</h2>
            )}
        </>
    )
}

export default WeatherDisplay;