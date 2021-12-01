import "./App.css";
import Forecast from "./Forecast";
import Header from "./Header"
import React, { useState } from "react";
// import { Route } from 'react-router-dom';

function App() {

  const initialZipState = {value: "80501"};
  const [zipState, setZipState] = useState(initialZipState);
  const [weather, setWeather] = useState(null);

  const getApi = () => {
    // localStorage.setItem("zipCode", zipState.value)
    // let searchedZip = localStorage.getItem("zipCode");
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=61fe33ab5ebe40fab45231457212211&q=${zipState.value}&days=3&aqi=yes`)
    .then((res) => res.json())
    .then((json) => {
      setWeather(json);
    })
    .catch(console.error);
  }
  
  const handleSubmit = ev => {
    ev.preventDefault();
    setZipState({value: ev.target.firstChild.value});
    console.log(zipState)
    getApi();
  }

  return (
    <div className ="app">
        <Header zipFunc={handleSubmit} getApi={getApi}/>
        <Forecast getApi={getApi} weather={weather}/>
    </div>
  );
}

export default App;
