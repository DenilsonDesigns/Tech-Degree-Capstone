const fetch = require("node-fetch");
const keys = require("../config/keys");

const newsKey = keys.newsKey;
const stockKey = keys.stockKey;

const NewsAPI = require("newsapi");
const newsapi = new NewsAPI(newsKey);

module.exports = app => {
  //route to get news stories
  app.get("/api/news", async (req, res) => {
    let response = await newsapi.v2.topHeadlines({
      q: "stock market",
      category: "business",
      language: "en"
    });
    res.send(response);
  });

  //get stock data
  app.get("/api/stock/:ticker", async (req, res) => {
    let response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${
        req.params.ticker
      }&apikey=${stockKey}`
    );
    response = await response.json();
    res.send(response);
  });
};
