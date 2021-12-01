import React, { useState, useEffect } from "react";
import Current from './Current';
import ThreeDay from './ThreeDay';
import Hourly from './Hourly';
// import { Route } from "react-router";

function Forecast(props) {
    useEffect(props.getApi, []);
  
    return (
        props.weather &&
        <div>
            <Current weather={props.weather} />
            <ThreeDay weather={props.weather}/>
            <Hourly weather={props.weather}/>
        </div>
    );
}

export default Forecast;