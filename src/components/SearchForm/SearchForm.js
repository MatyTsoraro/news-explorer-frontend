import React, { useState } from "react";
import "./SearchForm.css";
import newsApi from "../../utils/NewsApi";

const SearchForm = ({ setSearchKeyword, setIsNewsCardListOpen, updateArticles }) => {
  const [formInputValue, setFormInputValue] = useState("");

  function handleChange(evt) {
    setSearchKeyword(evt.target.value);
    setFormInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    console.log("handleSubmit triggered");
    evt.preventDefault();
    if (formInputValue) {
      newsApi.searchArticles(formInputValue).then(articles => {
        console.log("Before API call");
        if (articles) {
          console.log("Fetched articles:", articles);
          updateArticles(articles);
        }
        console.log("After API call");
      });
    }
    setIsNewsCardListOpen(true);
    setFormInputValue("");
  }

  return (
      <section className="search-form">
        <div className="search-form__overlay">
          <h1 className="search-form__title">What's going on in the world?</h1>
          <p className="search-form__description">
            Find the latest news on any topic and save them in your personal account.
          </p>
          <form className="search-form__search-overlay" onSubmit={handleSubmit} noValidate name="submit">
            <input
                className="search-form__input"
                placeholder="Enter topic"
                value={formInputValue}
                onChange={handleChange}
            ></input>
            <button className="search-form__button" type="submit">
              Search
            </button>
          </form>
        </div>
      </section>
  );
};

export default SearchForm;
