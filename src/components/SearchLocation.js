/* eslint-disable react/jsx-filename-extension */
/* eslint-disable require-jsdoc */
import React from "react";
import { DataContext } from "../context/useWeather";

class SearchLocation extends React.Component {
  state = {
    inputValue:''
  }


  render() {
    return (
      <DataContext.Consumer>
        {(context)=>{
          return(
            <div className="enter-location">
              <button type="button" onClick={() => context.toggleBtn()} className="close-btn">X</button>
              <input type="text"  onChange={(e)=> this.setState({inputValue: e.target.value})} value={this.state.inputValue} placeholder="Another location" />
              <button type="button" onClick={()=>{
                context.getWeatherInfo(this.state.inputValue);
                this.setState({inputValue: ''})
              }}>search</button>
            </div>
          )
        }}
      </DataContext.Consumer>
    );
  }
}

export default SearchLocation;
