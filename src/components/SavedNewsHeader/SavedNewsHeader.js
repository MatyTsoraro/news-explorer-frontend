import React from "react";
import "./SavedNewsHeader.css";
import savedArticles from "../../utils/savedArticles";

const SavedNewsHeader = () => {
  return (
    <section className="saved-news">
      <div className="saved-news__content">
        <p className="saved-news__title">Saved articles</p>
        <h1 className="saved-news__heading">
          Maty, you have {savedArticles.length} saved articles
        </h1>
        <p className="saved-news__keywords">
          By keywords:{" "}
          <span className="saved-news__keywords-bold">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    </section>
  );
};

export default SavedNewsHeader;
