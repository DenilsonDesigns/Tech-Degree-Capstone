import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import * as actions from "../actions";
import Landing from "./Landing";

const MarketOverview = () => <h2>Market Overview</h2>;
const StockProfile = () => <h2>StockProfile</h2>;

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
              <Route path="/market-overview" component={MarketOverview} />
              <Route path="/stock-profile" component={StockProfile} />
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
