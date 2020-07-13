import React from 'react';
import t from 'prop-types';
import getCityInfo from '../libs/getWeather'
import weatherFactory from'../libs/weatherFactory'

export const DataContext = React.createContext();



export class DataContextProvider extends React.Component {
    state = {
        toggle: false,
        search: "",
        cords: { longitude: 0, latitude: 0 },
        cityData: weatherFactory({})
    }

    toggleBtn(){
        this.setState({...this.state, toggle: !this.state.toggle})
    }

    // METHOD FOR GETTING WEATHER DATA WITH CITY NAME
    getWeatherInfo(city) {
        const getData = (data) => {
            this.setState({ cityData: weatherFactory(data) })
        }
        getCityInfo(city, getData);
    }

    // METHOD FOR GETTING WEATHER DATA WITH GEOLOCATION API
    getGeolocation() {
        if (navigator.geolocation)
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            const data = (weatherData) => {
                this.setState({ ...this.state, cityData: weatherFactory(weatherData) })
            }

            getCityInfo("", data, latitude, longitude);
        });
    }

    componentDidMount() {
        this.getGeolocation();
    }
    
    
    render() {
        //this.getWeatherInfo('london');
        const { cityData } = this.state;
        return  (
            <DataContext.Provider value={{ 
                version: "1.24",
                cityData, 
                getWeatherInfo: this.getWeatherInfo.bind(this) ,
                toggleBtn: this.toggleBtn.bind(this),
                toggle: this.state.toggle
            }}>
                {this.props.children}.
                
            </DataContext.Provider>
        )
    }
}

DataContextProvider.propTypes = {
    children: t.node.isRequired
}
