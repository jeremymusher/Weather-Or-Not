import React from "react";

function ThreeDay({ weather }) {
  return weather.location ? (
    <div className="threeday">
    <div className = "currentConditions">
    <h3 id="forecastTitle">Three Day Outlook for {weather.location.name}, {weather.location.region}</h3>
      <div className="cards">
        {weather.forecast.forecastday.map((item) => (
          <div className="currentInfo daily" key={item.date}>
            <h1>{item.date.substr(5, 5)}</h1>
            <img src={item.day.condition.icon} alt="today's conditions"></img>
            <h2>{item.day.condition.text}</h2>
            <div className = "dayByDay">
              <div className = "highLow">
                <h3>High {item.day.maxtemp_f}°F</h3>
                <h3>Low {item.day.mintemp_f}°F</h3>
            </div>
            {weather.forecast.forecastday[0].day.daily_chance_of_snow > 0 ? (
              <h3>
                Chance of Snow{" "}
                {weather.forecast.forecastday[0].day.daily_chance_of_snow}%
              </h3>
            ) : null}
            <h3>
              Chance of Rain{" "}
              {weather.forecast.forecastday[0].day.daily_chance_of_rain}%
            </h3>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  ) : (
    <div className="current">
      <h1>
        Sorry no location found with that postal code. Please try again with
        another location.
      </h1>
    </div>
  );
}

export default ThreeDay;
