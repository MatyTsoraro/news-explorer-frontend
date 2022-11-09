import { BASE_URL } from "./constants";

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  _processResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`An error just occurred: ${res.status}`);
    }
  }

  // When the user logs in or logs out, update the user token in the request header.
  //   updatedAuthUserToken = (token) => {
  //     this.headers = { ...this.headers, authorization: `Bearer ${token}` };
  //   };

  //   getCurrentUser() {
  //     return fetch(`${this.baseUrl}/users/me`, {
  //       method: "GET",
  //       headers: this.headers,
  //     }).then(this._processResponse);
  //   }

  getCurrentUser(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._processResponse(res);
    });
  }

  //   getArticles() {
  //     return fetch(`${this.baseUrl}/articles`, {
  //       method: "GET",
  //       headers: this.headers,
  //     }).then(this._processResponse);
  //   }

  getArticles(token) {
    return fetch(`${this.baseUrl}/articles`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._processResponse(res);
    });
  }

  saveArticle(data, searchKeyword, token) {
    // Grabbing most keys from data
    const {
      title,
      description: text,
      publishedAt: date,
      url: link,
      urlToImage: image,
    } = data;
    // Grabbing source from data object
    const source = data.source.name;
    // Grabbing keyword from the first letter that capitalized
    const keyword =
      searchKeyword.charAt(0).toUpperCase() + searchKeyword.slice(1);

    return fetch(`${this.baseUrl}/articles`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then((res) => {
      return this._processResponse(res);
    });
  }

  removeArticle(id, token) {
    return fetch(`${this.baseUrl}/articles/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return this._processResponse(res);
    });
  }
}

const mainApi = new Api({ baseUrl: BASE_URL });

export default mainApi;
