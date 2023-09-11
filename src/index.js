import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./utils/ScrollToTop";
import App from "./components/App/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
=======
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.StrictMode>
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
