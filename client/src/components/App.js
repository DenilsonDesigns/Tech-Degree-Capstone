import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import * as actions from "../actions";
import Landing from "./Landing";
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
                render={props => <StockProfile {...props} ticker="djia" />}
              />
              <Route
                exact
                path="/market-overview/spx"
                render={props => <StockProfile {...props} ticker="spx" />}
              />
              <Route
                exact
                path="/market-overview/ndx"
                render={props => <StockProfile {...props} ticker="ndx" />}
              />

              <Route exact path="/tech" component={TechOverview} />
              <Route
                exact
                path="/tech/aapl"
                render={props => <StockProfile {...props} ticker="aapl" />}
              />
              <Route
                exact
                path="/tech/amzn"
                render={props => <StockProfile {...props} ticker="amzn" />}
              />
              <Route
                exact
                path="/tech/fb"
                render={props => <StockProfile {...props} ticker="fb" />}
              />
              <Route
                exact
                path="/tech/goog"
                render={props => <StockProfile {...props} ticker="goog" />}
              />
              <Route
                exact
                path="/tech/nflx"
                render={props => <StockProfile {...props} ticker="nflx" />}
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
