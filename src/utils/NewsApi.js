import { API_KEY, PROXY_URL, NUMBER_ARTICLES } from "./constants";

const today = new Date();
const weekAgo = new Date(
  today.getFullYear(),
  today.getMonth(),
  today.getDate() - 7
);

class NewsApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _processResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`An error just occurred: ${res.status}`);
    }
  }

  searchArticles(keyword) {
    return fetch(
      `${
        this._baseUrl
      }?q=${keyword}&from=${weekAgo.toISOString()}&to=${today.toISOString()}&language=en&sortBy=relevancy&pageSize=${NUMBER_ARTICLES}&apiKey=${API_KEY}`
    )
      .then((res) => this._processResponse(res))
      .then((res) => res.articles);
  }
}

const newsApi = new NewsApi({
  baseUrl: PROXY_URL,
  headers: { "Content-Type": "application/json" },
});

export default newsApi;
