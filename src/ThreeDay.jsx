import React from "react";

function ThreeDay({ weather }) {
  return weather.location ? (
    <div className="threeday">
    <div className = "currentConditions">
    <h3 id="currentTitle">Three Day Outlook for {weather.location.name}, {weather.location.region}</h3>
      <div className="cards">
        {weather.forecast.forecastday.map((item) => (
          <div className="currentInfo">
            <h2 key={item.date}>{item.date}</h2>
            <img src={item.day.condition.icon} alt="today's conditions"></img>
            <h3>{item.day.condition.text}</h3>
            <h3>High {item.day.maxtemp_f}°F</h3>
            <h3>Low {item.day.mintemp_f}°F</h3>
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
