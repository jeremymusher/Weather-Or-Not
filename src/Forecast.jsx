import React, { useState, useEffect } from "react";
import Current from './Current';
import ThreeDay from './ThreeDay';
import Hourly from './Hourly';
// import { Route } from "react-router";

function Forecast(props) {
    const [weather, setWeather] = useState(null);
    useEffect(() => {
      fetch(`https://api.weatherapi.com/v1/forecast.json?key=61fe33ab5ebe40fab45231457212211&q=${props.zip}&days=3&aqi=yes`)
        .then((res) => res.json())
        .then((json) => {
          setWeather(json);
        })
        .catch(console.error);
    }, []);
  
    return (
        weather &&
        <div>
            <Current weather={weather} />
            <ThreeDay weather={weather}/>
            <Hourly weather={weather}/>
        </div>
    );
}

export default Forecast;