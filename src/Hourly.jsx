import React from 'react';

function Hourly({weather}) {
    return (
        <div className="hourly">
         {weather.forecast.forecastday[0].hour.map((hour)=>
            {return (
            <div className = "nthHour">
                <h2>{hour.time.substr(11, 5)}</h2>
                <img src ={hour.condition.icon} alt = "hourly condition" className="hourlyIcon"></img>
                <h2>{hour.condition.text}</h2>
                <h2>{hour.temp_f}°F</h2>
                <h2>{hour.feelslike_f}°F</h2>
                {hour.chance_of_snow >= hour.chance_of_rain ? <h2>{hour.chance_of_snow}%</h2> : <h2>{hour.chance_of_rain}</h2>}
                <h2>{hour.precip_in}in</h2>
                <h2>{hour.humidity}%</h2>
            </div>
            )}
         )}
        </div>
    );
}

export default Hourly;