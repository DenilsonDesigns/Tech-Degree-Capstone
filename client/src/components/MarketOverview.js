import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MarketOverview extends Component {
  render() {
    return (
      <div className="col-md-6">
        <h4 style={{ textAlign: "center" }}>Major Stock Indices</h4>
        <ul className="list-group">
          <li className="list-group-item hover-list">
            <NavLink className="nav-link list-text" to="/market-overview/djia">
              Dow Jones Industrial Average (DJIA)
            </NavLink>
          </li>
          <li className="list-group-item hover-list">
            <NavLink className="nav-link list-text" to="/market-overview/spx">
              S&P 500 (SPX)
            </NavLink>
          </li>
          <li className="list-group-item hover-list">
            <NavLink className="nav-link list-text" to="/market-overview/ndx">
              NASDAQ (NDX)
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default MarketOverview;
