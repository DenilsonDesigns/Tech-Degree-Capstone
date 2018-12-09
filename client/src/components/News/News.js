import React, { Component } from "react";
import keys from "../../config/keys";
import NewsLink from "./NewsLink/NewsLink";

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(keys.newsKey);

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
        console.log(response);
        this.setState({
          newStories: response.articles
        });
      });
  }

  render() {
    const newsArticles = this.state.newStories;
    let links = newsArticles.map(link => {
      return (
        <NewsLink
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
// const GifList = props => {
//   const results = props.data;
//   let gifs = results.map(gif => <Gif key={gif.id} url={gif.url_c} />);
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <ul>{gifs}</ul>
//     </div>
//   );
// };

// const Gif = props => {
//   return (
//     <li>
//       <img src={props.url} alt="" />
//     </li>
//   );
// };
