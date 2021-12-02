import "./App.css";
import Forecast from "./Forecast";
import Header from "./Header"
import React, { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  const getApi = () => {
    let searchedZip = localStorage.getItem("zipCode");
    if (searchedZip == null) {
    searchedZip = "80501"
    }
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=61fe33ab5ebe40fab45231457212211&q=${searchedZip}&days=3&aqi=yes`)
    .then((res) => res.json())
    .then((json) => {
      setWeather(json);
    })
    .catch(console.error);
  }
  
  const handleSubmit = ev => {
    ev.preventDefault();
    let zip = ev.target.firstChild.value;
    localStorage.setItem("zipCode", zip);
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
