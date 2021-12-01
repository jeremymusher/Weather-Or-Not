import React from "react";

function Current({ weather }) {
  return (
    <div className="current">
      <h1>Current Test</h1>
      <h3>Showing the weather for {weather.location.name},{" "}{weather.location.region}</h3>
      <div className="temps">
        <h1>{weather.current.temp_f}°F</h1>
        <h3>High: {weather.forecast.forecastday[0].day.maxtemp_f}°F</h3>
        <h3>Low: {weather.forecast.forecastday[0].day.mintemp_f}°F </h3>
        <h5>Feels like {weather.current.feelslike_f}°F</h5>
      </div>
      <h6></h6>
      <h6></h6>
    </div>
  );
}

export default Current;
