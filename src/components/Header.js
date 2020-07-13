/* eslint-disable import/named */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable require-jsdoc */
import React from 'react';
import { DataContext } from '../context/useWeather';

function Header() {
  return (
    <DataContext.Consumer>
      {(context) => (
        <div className="header">
          <h1>
            The weather App - v
            {context.version}
          </h1>
          {/* -----------MOBILE BUTTON  ----------*/}
          <nav>
            <button
              type="button"
              onClick={() => context.toggleBtn()}
              className="menu-btn"
            >
              menu
            </button>
          </nav>
        </div>
      )}
    </DataContext.Consumer>
  );
}

export default Header;
