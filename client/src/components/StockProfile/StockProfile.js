import React, { Component } from "react";
import Spinner from "./../UI/Spinner";
import axios from "axios";

class StockProfile extends Component {
  state = {
    loading: false,
    stockInFocus: []
  };
  h;
  componentDidMount() {
    this.setState({
      loading: true
    });

    let path = "/api/stock/" + this.props.ticker;
    console.log(path);
    axios
      .get(path)
      .then(res => {
        // console.log(res.data);
        return res.data;
      })
      .then(resData => {
        console.log(resData);
        this.setState({
          stockInFocus: resData["Global Quote"],
          loading: false
        });
      })
      .catch(err => {
        console.log("Error retrieving stock data");
        this.setState({ loading: false });
      });
  }

  render() {
    if (this.state.stockInFocus === undefined) {
      console.log("Returning error msg");
      return (
        <div>
          <h4>Error retrieving data, API limit reached</h4>
        </div>
      );
    } else {
      if (this.state.loading) {
        return <Spinner />;
      } else {
        return (
          <div className="col-md-4 stockcard">
            <div className="card mr-3">
              <div className="card-title stocktitle">
                <h4 className="card-header" style={{ color: "white" }}>
                  Symbol: {this.props.ticker.toUpperCase()}
                </h4>
              </div>
              <h4>
                Price: {Number(this.state.stockInFocus["05. price"]).toFixed(2)}
              </h4>
              <h4>
                Volume:{" "}
                {Number(this.state.stockInFocus["06. volume"]).toLocaleString()}
              </h4>
              <h4>Change: {this.state.stockInFocus["10. change percent"]}</h4>
              <button type="button" className="btn btn-outline-info">
                <a
                  href={`http://bigcharts.marketwatch.com/quickchart/quickchart.asp?symb=${
                    this.props.ticker
                  }&insttype=&freq=&show=`}
                >
                  View Chart
                </a>
              </button>
            </div>
          </div>
        );
      }
    }
  }
}

export default StockProfile;
