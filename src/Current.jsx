import React from "react";

function Current({weather}) {
  return (
    <div className="current">
      <h1>Current Test</h1>
      <div className="currentConditions">
      <h3 id="currentTitle">
        Current Weather Conditions in {weather.location.name}, {weather.location.region}
      </h3>
      <div className = "cards">
      <div className="currentInfo" id="temps">
        <h1>{weather.current.temp_f}°F</h1>
        <h2>High {weather.forecast.forecastday[0].day.maxtemp_f}°F</h2>
        <h2>Low {weather.forecast.forecastday[0].day.mintemp_f}°F </h2>
        <h3>Feels Like {weather.current.feelslike_f}°F</h3>
      </div>
      <div className ="currentInfo" id="conditions">
        <img src={weather.current.condition.icon} alt="current conditions"/>
        <h2>{weather.current.condition.text}</h2>
        <h3>Cloud Cover {weather.current.cloud}%</h3>
      </div>
      <div className="currentInfo" id="windAndRain">
        <h3>Wind {weather.current.wind_dir} {weather.current.wind_mph}mph</h3>
        <h3>Wind Gusts {weather.current.gust_mph}mph</h3>
        {weather.forecast.forecastday[0].day.daily_chance_of_snow > 0 ? <h3>Chance of Snow {weather.forecast.forecastday[0].day.daily_chance_of_snow}%</h3> : null}
        {weather.forecast.forecastday[0].day.daily_chance_of_rain > 0 ? <h3>Chance of Rain {weather.forecast.forecastday[0].day.daily_chance_of_rain}%</h3> : null}
      </div>
      </div>
      </div>
    </div>
  );
}

export default Current;
