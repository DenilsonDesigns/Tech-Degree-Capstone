import React, { Component } from "react";
import keys from "../../config/keys";
import NewsLink from "./NewsLink/NewsLink";

const apiKey = keys.newsKey || process.env.NEW_KEY;
console.log(apiKey);
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(apiKey);

class News extends Component {
  state = {
    newStories: [],
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    newsapi.v2
      .topHeadlines({
        q: "stock market",
        category: "business",
        language: "en"
      })
      .then(response => {
        this.setState({
          newStories: response.articles
        });
      });
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
