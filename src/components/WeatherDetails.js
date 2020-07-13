import React from 'react'
import { DataContext } from '../context/useWeather'

class WeatherDetails extends React.Component {
    state = {
        cloudy: 100,
        humidity: 91,
        wind: 1.2
    }

    render (){
        return (
            <DataContext.Consumer>
                {({cityData})=>{
                    return (
                        <div className="weather-details">
                            <p>Weather Details</p>
                            <p>Cloudy <span>{cityData.getCloud()}%</span> </p>
                            <p>Humidity <span>{cityData.getHumidity()}%</span></p>
                            <p>Wind <span>{cityData.getWindSpeed()}km/h</span></p>
                        </div>
                    )
                }}
            </DataContext.Consumer>
        )
    }
}

export default WeatherDetails