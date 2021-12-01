import "./App.css";
import Forecast from "./Forecast";
import Header from "./Header"
import React, { useState } from "react";
// import { Route } from 'react-router-dom';

function App() {

  const initialZipState = "80501";
  const [zipState, setZipState] = useState(initialZipState);

  const handleSubmit = ev => {
    ev.preventDefault();
    setZipState(ev.target.value);
  }

  return (
    <div className ="app">
      <div className ="header">
        <Header zipFunc={handleSubmit}/>
      </div>
      <div className="Forecast">
        <Forecast zip={zipState}/>
      </div>
    </div>
  );
}

export default App;
