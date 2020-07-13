/* eslint-disable import/named */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable require-jsdoc */
import React from 'react';
import './App.scss';
// eslint-disable-next-line import/no-named-as-default-member
import TempLocation from './components/TempLocation';
import Header from './components/Header';
import SearchLocation from './components/SearchLocation';
import WeatherDetails from './components/WeatherDetails';
import { DataContextProvider, DataContext } from './context/useWeather';
import PopularLocation from './components/PopularLocation';

function App() {
  return (
    <DataContextProvider>
      <div className="App">
        <DataContext.Consumer>
          {(context) => (
            <>
              <div className="weather-cont">
                <Header />
                <TempLocation />
              </div>

              <div
                className={`weather-details-cont ${
                  context.toggle ? 'side-nav' : ''
                }`}
              >
                <SearchLocation />
                <PopularLocation />
                <WeatherDetails />
              </div>
            </>
          )}
        </DataContext.Consumer>
      </div>
    </DataContextProvider>
  );
}

export default App;
