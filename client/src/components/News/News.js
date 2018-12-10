import React, { Component } from "react";
import NewsLink from "./NewsLink/NewsLink";
import axios from "axios";

class News extends Component {
  state = {
    newStories: [],
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    axios.get("/api/news").then(res => {
      this.setState({
        newStories: res.data.articles
      });
    });
    // newsapi.v2
    //   .topHeadlines({
    //     q: "stock market",
    //     category: "business",
    //     language: "en"
    //   })
    //   .then(response => {
    //     this.setState({
    //       newStories: response.articles
    //     });
    //   });
  }

  render() {
    const newsArticles = this.state.newStories;
    let links = newsArticles.map((link, index) => {
      return (
        <NewsLink
          key={index}
          link={link.url}
          description={link.description}
          imageURL={link.urlToImage}
          title={link.title}
        />
      );
    });

    return (
      <div>
        <h3>Latest Market News</h3>
        <div className="card-columns">
          <div>{links}</div>
        </div>
      </div>
    );
  }
}

export default News;
