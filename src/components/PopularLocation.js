import React from "react";
import { DataContext } from "../context/useWeather";

let counter = 1;
class PopularLocation extends React.Component {
  state = {
    loc: ["Lagos", "New York", "London", "Tokyo"]
  }

  keyGen(){
    const key = this.state.loc.length + counter++;
    return key
  }
  render() {
    return (
      <DataContext.Consumer>
        {(context) => {
          return (
            <ul className="suggested-location">
              {this.state.loc.map((loc) => {
                return <li key={this.keyGen()} onClick={() => context.getWeatherInfo(loc)}>{loc}</li>;
              })}
            </ul>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default PopularLocation;
