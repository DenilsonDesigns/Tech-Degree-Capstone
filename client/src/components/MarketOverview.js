import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MarketOverview extends Component {
  render() {
    return (
      <div>
        <h4>Major Stock Indices</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <NavLink className="nav-link" to="/market-overview/djia">
              Dow Jones Industrial Average (DJIA)
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink className="nav-link" to="/market-overview/spx">
              S&P 500 (SPX)
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink className="nav-link" to="/market-overview/ndx">
              NASDAQ (NDX)
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default MarketOverview;
