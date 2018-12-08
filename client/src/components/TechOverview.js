import React, { Component } from "react";

import keys from "../config/keys";

class TechOverview extends Component {
  constructor() {
    super();
    this.state = {
      aapl: [],
      goog: [],
      fb: []
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.aapl.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  componentDidMount() {
    const AAPL_CALL = fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=${
        keys.stockKey
      }`
    );
    const GOOG_CALL = fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=GOOG&apikey=${
        keys.stockKey
      }`
    );
    const FB_CALL = fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=FB&apikey=${
        keys.stockKey
      }`
    );

    AAPL_CALL.then(res => {
      return res.json();
    }).then(resData => {
      this.setState({
        aapl: resData["Global Quote"]
      });
    });

    GOOG_CALL.then(res => {
      return res.json();
    }).then(resData => {
      this.setState({
        goog: resData["Global Quote"]
      });
    });

    FB_CALL.then(res => {
      return res.json();
    }).then(resData => {
      this.setState({
        fb: resData["Global Quote"]
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Market Overview</h2>
        <div className="row">
          <div className="card mr-3">
            <h4 className="card-header">Symbol: AAPL</h4>
            <h4>Price: {Number(this.state.aapl["05. price"]).toFixed(2)}</h4>
            <h4>Volume {this.state.aapl["06. volume"]}</h4>
            <h4>Change: {this.state.aapl["10. change percent"]}</h4>
          </div>
          <div className="card mr-3">
            <h4 className="card-header">Symbol: GOOG</h4>
            <h4>Price: {Number(this.state.goog["05. price"]).toFixed(2)}</h4>
            <h4>Volume {this.state.goog["06. volume"]}</h4>
            <h4>Change: {this.state.goog["10. change percent"]}</h4>
          </div>
          <div className="card mr-3">
            <h4 className="card-header">Symbol: FB</h4>
            <h4>Price: {Number(this.state.fb["05. price"]).toFixed(2)}</h4>
            <h4>Volume {this.state.fb["06. volume"]}</h4>
            <h4>Change: {this.state.fb["10. change percent"]}</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default TechOverview;
