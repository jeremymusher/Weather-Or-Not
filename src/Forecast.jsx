import React, { useState, useEffect } from "react";
import Current from './Current';
import ThreeDay from './ThreeDay';
import Hourly from './Hourly';
import { Route } from "react-router";

function Forecast({weather, getApi}) {
    useEffect(getApi, []);
  
    return (
        weather &&
        <div className = "forecast">
            <Route exact path = "/" render ={(props) => (<Current {...props} weather={weather} />)} />
            <Route exact path = "/threeday" render ={(props) => (<ThreeDay {...props} weather={weather} />)} />
            <Route exact path = "/hourly" render ={(props) => (<Hourly {...props} weather={weather} />)} />
        </div>
    );
}

export default Forecast;