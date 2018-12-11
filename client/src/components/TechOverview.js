import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class TechOverview extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h4 style={{ textAlign: "center" }}>Major Tech Stocks</h4>

        <ul className="list-group">
          <li className="list-group-item hover-list">
            <NavLink className="nav-link list-text" to="/tech/aapl">
              Apple (AAPL)
            </NavLink>
          </li>
          <li className="list-group-item hover-list">
            <NavLink className="nav-link list-text" to="/tech/amzn">
              Amazon (AMZN)
            </NavLink>
          </li>
          <li className="list-group-item hover-list">
            <NavLink className="nav-link list-text" to="/tech/fb">
              Facebook (FB)
            </NavLink>
          </li>
          <li className="list-group-item hover-list">
            <NavLink className="nav-link list-text" to="/tech/goog">
              Google (GOOG)
            </NavLink>
          </li>
          <li className="list-group-item hover-list">
            <NavLink className="nav-link list-text" to="/tech/nflx">
              Netflix (NFLX)
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default TechOverview;
