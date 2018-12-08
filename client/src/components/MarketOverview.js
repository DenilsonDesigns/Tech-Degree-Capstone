import React, { Component } from "react";

import keys from "../config/keys";

class MarketOverview extends Component {
  constructor() {
    super();
    this.state = {
      djia: [],
      spx: [],
      ndx: []
    };
  }

  componentDidMount() {
    const DJIA_CALL = fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=DJIA&apikey=${
        keys.stockKey
      }`
    );
    const SPX_CALL = fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPX&apikey=${
        keys.stockKey
      }`
    );
    const NDX_CALL = fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NDX&apikey=${
        keys.stockKey
      }`
    );

    DJIA_CALL.then(res => {
      return res.json();
    }).then(resData => {
      this.setState({
        djia: resData["Global Quote"]
      });
    });

    SPX_CALL.then(res => {
      return res.json();
    }).then(resData => {
      this.setState({
        spx: resData["Global Quote"]
      });
    });

    NDX_CALL.then(res => {
      return res.json();
    }).then(resData => {
      this.setState({
        ndx: resData["Global Quote"]
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Market Overview</h2>
        <div className="row">
          <div className="card mr-3">
            <h4 className="card-header">Symbol: DJIA</h4>
            <h4>Price: {Number(this.state.djia["05. price"]).toFixed(2)}</h4>
            <h4>Volume {this.state.djia["06. volume"]}</h4>
            <h4>Change: {this.state.djia["10. change percent"]}</h4>
          </div>
          <div className="card mr-3">
            <h4 className="card-header">Symbol: SPX</h4>
            <h4>Price: {Number(this.state.spx["05. price"]).toFixed(2)}</h4>
            <h4>Volume {this.state.spx["06. volume"]}</h4>
            <h4>Change: {this.state.spx["10. change percent"]}</h4>
          </div>
          <div className="card mr-3">
            <h4 className="card-header">Symbol: NDX</h4>
            <h4>Price: {Number(this.state.ndx["05. price"]).toFixed(2)}</h4>
            <h4>Volume {this.state.ndx["06. volume"]}</h4>
            <h4>Change: {this.state.ndx["10. change percent"]}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketOverview;
