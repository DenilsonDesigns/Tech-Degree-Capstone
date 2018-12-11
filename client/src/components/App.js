import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import * as actions from "../actions";
import Landing from "./Landing";
import "../css/index.css";
import MarketOverview from "./MarketOverview";
import TechOverview from "./TechOverview";
import StockProfile from "./StockProfile/StockProfile";
import News from "./News/News";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/news" component={News} />
              <Route exact path="/market-overview" component={MarketOverview} />
              <Route
                exact
                path="/market-overview/djia"
                render={props => (
                  <div className="row">
                    <MarketOverview />
                    <StockProfile {...props} ticker="djia" />
                  </div>
                )}
              />
              <Route
                exact
                path="/market-overview/spx"
                render={props => (
                  <div className="row">
                    <MarketOverview />
                    <StockProfile {...props} ticker="spx" />
                  </div>
                )}
              />
              <Route
                exact
                path="/market-overview/ndx"
                render={props => (
                  <div className="row">
                    <MarketOverview />
                    <StockProfile {...props} ticker="ndx" />
                  </div>
                )}
              />

              <Route exact path="/tech" component={TechOverview} />
              <Route
                exact
                path="/tech/aapl"
                render={props => (
                  <div className="row">
                    <TechOverview />
                    <StockProfile {...props} ticker="aapl" />
                  </div>
                )}
              />
              <Route
                exact
                path="/tech/amzn"
                render={props => (
                  <div className="row">
                    <TechOverview />
                    <StockProfile {...props} ticker="amzn" />
                  </div>
                )}
              />
              <Route
                exact
                path="/tech/fb"
                render={props => (
                  <div className="row">
                    <TechOverview />
                    <StockProfile {...props} ticker="fb" />
                  </div>
                )}
              />
              <Route
                exact
                path="/tech/goog"
                render={props => (
                  <div className="row">
                    <TechOverview />
                    <StockProfile {...props} ticker="goog" />
                  </div>
                )}
              />
              <Route
                exact
                path="/tech/nflx"
                render={props => (
                  <div className="row">
                    <TechOverview />
                    <StockProfile {...props} ticker="nflx" />
                  </div>
                )}
              />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
