import React from 'react';
import { DataContext } from '../context/useWeather';

class TempLocation extends React.Component {
    state = {
        deg: 22,
        location: 'Lagos',
        date: 'Fri, 10 Jun. 2020',
        time: '23:35',
        weatherData: ''
    }

    updateData= (data)=> {
        this.setState({weatherData:data})
    }

    render() {
        return (
            <DataContext.Consumer>
                {({ cityData })=> {
                    return (
                        <div className="weather-info">
                           <p className="degrees">
                           {Math.round(cityData.getTemperature())}
                           <sup id="deg">o</sup>
                           </p>
                           <div className="location-time">
                               <p className="location">{cityData.name}</p>
                               <p className="date"> {cityData.dateFormat() }</p>
                           </div>
                           <p className="weather"></p>
                       </div>
                    )
                }}
            </DataContext.Consumer>
        )
    }
}

export default TempLocation