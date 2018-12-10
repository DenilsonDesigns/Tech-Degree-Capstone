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

    // axios.get("/api/news").then(res => {
    //   console.log(res);
    //   this.setState({
    //     newStories: res.data.articles
    //   });
    // });

    let path = "/api/stock/" + this.props.ticker;
    console.log(path);
    axios
      .get(path)
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(resData => {
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
          <div>
            <div className="card mr-3">
              <h4 className="card-header">
                Symbol: {this.props.ticker.toUpperCase()}
              </h4>
              <h4>
                Price: {Number(this.state.stockInFocus["05. price"]).toFixed(2)}
              </h4>
              <h4>
                Volume{" "}
                {Number(this.state.stockInFocus["06. volume"]).toLocaleString()}
              </h4>
              <h4>Change: {this.state.stockInFocus["10. change percent"]}</h4>
            </div>
          </div>
        );
      }
    }
  }
}

export default StockProfile;
