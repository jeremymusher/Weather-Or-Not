import React from "react";

function Current({weather}) {

  return (
    <div>
      <h1>Current Test</h1>
      <h3>Showing the weather for {weather.location.name}, {weather.location.region}</h3>
      <h3>It is currently {weather.current.temp_f}°F</h3>
    </div>
  );
}

export default Current;
