import React, { useState } from "react";
import "./SearchForm.css";
import newsApi from "../../utils/NewsApi";

const SearchForm = ({ setSearchKeyword, setIsNewsCardListOpen }) => {
  const [formInputValue, setFormInputValue] = useState("");

  function handleChange(evt) {
    setSearchKeyword(evt.target.value);
    setFormInputValue(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (formInputValue) {
      newsApi.searchArticles(formInputValue).then(articles => {
        if (articles) {
          // Update the state with the fetched articles
          // You might need to pass a function from a parent component to do this
        }
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
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form
          className="search-form__search-overlay"
          onSubmit={handleSubmit}
          noValidate
          name="submit"
        >
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
