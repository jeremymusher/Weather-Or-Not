import React from "react";

function Current({weather}) {
  return (
    weather.location ?
    <div className="current">
      <div className="currentConditions">
      <h3 id="forecastTitle">
        Current Weather Conditions in {weather.location.name}, {weather.location.region}
      </h3>
      <div className = "cards">
      <div className="currentInfo" id="temps">
        <div className = "currentTemp">
          <h1>{weather.current.temp_f}°F</h1>
        </div>
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
        <h3>Chance of Rain {weather.forecast.forecastday[0].day.daily_chance_of_rain}%</h3>
        <h3>Humidity {weather.current.humidity}%</h3>
      </div>
      </div>
      </div>
    </div>
  : <div className="current"><h1>Sorry no location found with that postal code. Please try again with another location.</h1></div>
  );
}

export default Current;
