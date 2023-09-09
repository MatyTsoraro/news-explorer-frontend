import React, { useEffect, useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

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
              />
            </li>
          ))}
        </ul>
        {!onSavedArticlesPage && (
          <button
            className="news-card-list__show-more-button"
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
