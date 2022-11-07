import { BASE_URL } from "./constants";

// class Auth {
//   constructor({ baseUrl, headers }) {
//     this.baseUrl = baseUrl;
//     this.headers = headers;
//   }

function processResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`An error just occurred: ${res.status}`);
  }
}

export function register(email, password, name) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  })
    .then((res) => {
      return processResponse(res);
    })
    .then((res) => {
      return res;
    });
}

export function login(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return processResponse(res);
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      } else {
        return;
      }
    });
}

export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      return processResponse(res);
    })
    .then((data) => data);
}
// }

// const BASE_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://api.chen23-around-us.students.nomoredomainssbs.ru"
//     : "http://localhost:3000";

// export const auth = new Auth({
//   baseUrl: BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
