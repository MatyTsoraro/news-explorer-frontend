import React, { useEffect, useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
<<<<<<< HEAD
import { NUMBER_CARDS } from "../../utils/constants";

const NewsCardList = ({
  onSavedArticlesPage,
  loggedIn,
  cards,
  savedArticles,
  showCards,
  setShowCards,
  onSaveArticleClick,
  onRemoveArticleClick,
  savedCardsArray,
  setSavedCardsArray,
  onSignInClick,
}) => {
  const [next, setNext] = useState(3);
  const [isButtonHidden, setIsButtonHidden] = useState(false);

  /* It starts with 3 new cards (on saved article page, 
    it will show all cards) */
  useEffect(() => {
    if (!onSavedArticlesPage) {
      setShowCards(cards?.slice(0, 3));
    }
  }, [cards, onSavedArticlesPage, setShowCards]);

  useEffect(() => {
    if (onSavedArticlesPage) {
      setSavedCardsArray(savedArticles);
    }
  }, [onSavedArticlesPage, savedArticles, setSavedCardsArray]);

  /* Shows only the button show more, while the number of 
  cards are shown is smaller than the total */
  useEffect(() => {
    if (showCards?.length < cards?.length) {
      setIsButtonHidden(false);
    } else {
      setIsButtonHidden(true);
    }
  }, [showCards?.length, cards?.length]);

  /* On every each click, adds 3 cards to the variable 'next' 
  and increases the value by 3 */
  function handleShowMoreCards() {
    setShowCards(cards.slice(0, next + NUMBER_CARDS));
    setNext(next + NUMBER_CARDS);
  }

  return onSavedArticlesPage ? (
    <section className="news-card-list news-card-list_saved-articles">
      <div className="news-card-list__overlay">
        <ul className="news-card-list__card-grid news-card-list__card-grid_saved-articles">
          {savedCardsArray?.map((newscard) => (
            <li className="news-card-list__card" key={newscard._id}>
              <NewsCard
                data={newscard}
                onSavedArticlesPage={onSavedArticlesPage}
                loggedIn={loggedIn}
                onRemoveArticleClick={onRemoveArticleClick}
                savedArticles={savedArticles}
=======

const NewsCardList = ({ onSavedArticlesPage, loggedIn, cards }) => {  // <-- Changed articles to cards
  const [showCards, setShowCards] = useState([]);
  const [next, setNext] = useState(3);  // Added this state for pagination

  useEffect(() => {
    if (!onSavedArticlesPage) {
      setShowCards(cards.slice(0, 3));
    } else {
      setShowCards(cards);
    }
  }, [onSavedArticlesPage, cards]);

  function handleShowMoreCards() {
    setShowCards(cards.slice(0, next + 3));  // <-- Use cards instead of articles
    setNext(next + 3);
  }


  return (
    <section
      className={`news-card-list ${
        onSavedArticlesPage && "news-card-list_saved-articles"
      }`}
    >
      <div className="news-card-list__overlay">
        {!onSavedArticlesPage && (
          <h3 className="news-card-list__title">Search results</h3>
        )}
        <ul
          className={`news-card-list__card-grid ${
            onSavedArticlesPage && "news-card-list__card-grid_saved-articles"
          }`}
        >
          {showCards.map((newscard) => (
            <li className="news-card-list__card" key={newscard._id}>
              <NewsCard
                key={newscard._id}
                data={newscard}
                onSavedArticlesPage={onSavedArticlesPage}
                loggedIn={loggedIn}
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
              />
            </li>
          ))}
        </ul>
<<<<<<< HEAD
      </div>
    </section>
  ) : (
    <section className="news-card-list">
      <div className="news-card-list__overlay">
        <h3 className="news-card-list__title">Search results</h3>
        <ul className="news-card-list__card-grid">
          {showCards?.map((newscard, index) => (
            <li className="news-card-list__card" key={index}>
              <NewsCard
                data={newscard}
                onSavedArticlesPage={onSavedArticlesPage}
                loggedIn={loggedIn}
                onSaveArticleClick={onSaveArticleClick}
                onRemoveArticleClick={onRemoveArticleClick}
                savedArticles={savedArticles}
                onSignInClick={onSignInClick}
              />
            </li>
          ))}
        </ul>
        {!onSavedArticlesPage && !isButtonHidden && (
          <button
            className={`news-card-list__show-more-button`}
=======
        {!onSavedArticlesPage && (
          <button
            className="news-card-list__show-more-button"
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
            onClick={handleShowMoreCards}
          >
            Show more
          </button>
        )}
      </div>
    </section>
  );
};

export default NewsCardList;
