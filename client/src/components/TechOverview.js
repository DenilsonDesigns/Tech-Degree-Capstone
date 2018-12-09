import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TechOverview extends Component {
  render() {
    return (
      <div>
        <h4>Major Tech Stocks</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <NavLink className="nav-link" to="/tech/aapl">
              Apple (AAPL)
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink className="nav-link" to="/tech/amzn">
              Amazon (AMZN)
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink className="nav-link" to="/tech/fb">
              Facebook (FB)
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink className="nav-link" to="/tech/goog">
              Google (GOOG)
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink className="nav-link" to="/tech/nflx">
              Netflix (NFLX)
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default TechOverview;
