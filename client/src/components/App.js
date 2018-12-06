import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const MarketOverview = () => <h2>Market Overview</h2>;
const StockProfile = () => <h2>StockProfile</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <div className="container">
            <Route exact path="/" component={Landing} />
            <Route path="/market-overview" component={MarketOverview} />
            <Route path="/stock-profile" component={StockProfile} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
