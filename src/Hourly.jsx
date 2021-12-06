import React from 'react';

function Hourly({weather}) {
    return weather.location ? (
        <div className="hourly">
            <h3 id="forecastTitle">Today's Hourly Conditions in {weather.location.name}, {weather.location.region}</h3>
            <div className = "nthHour labels">
                <p>Time</p>
                <p>Conditions</p>
                <p>Temperature</p>
                <p>Feels Like</p>
                <p>Precipitation</p>
                <p>Amount</p>
                <p>Humidity</p>
            </div>
         {weather.forecast.forecastday[0].hour.map((hour)=>
            {return (
            <div className = "nthHour" key = {hour.time.substr(11, 5)}>
                <p>{hour.time.substr(11, 5)}</p>
                <div className = "hourlyConditions">
                <img src ={hour.condition.icon} alt = "hourly condition" className="hourlyIcon"></img>
                <p>{hour.condition.text}</p>
                </div>
                <p>{hour.temp_f}°F</p>
                <p>{hour.feelslike_f}°F</p>
                {hour.chance_of_snow > hour.chance_of_rain ? <p>{hour.chance_of_snow} %</p> : <p>{hour.chance_of_rain} %</p>}
                <p>{hour.precip_in} in</p>
                <p>{hour.humidity} %</p>
            </div>
            )}
         )}
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

export default Hourly;