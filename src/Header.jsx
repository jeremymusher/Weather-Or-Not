import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className ="header">
      <form onSubmit={props.zipFunc} className = "form">
        <input type="text" placeholder="Search Using Postal Code" />
        <button type="submit">Search</button>
      </form>
      <div className = "buttons">
      <Link to="/">
        <button className="homeButton">
          <h3>Current Conditions</h3>
        </button>
      </Link>
      <Link to="/hourly">
        <button className="hourlyButton">
          <h3>Hourly Forecast</h3>
        </button>
      </Link>
      <Link to="/threeday">
        <button className="threedayButton">
          <h3>Three Day Outlook</h3>
        </button>
      </Link>
      </div>
    </div>
  );
}

export default Header;
