<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./SavedNewsHeader.css";

const SavedNewsHeader = ({ currentUser, savedArticles }) => {
  const [keywordArray, setKeywordArray] = useState([]);

  useEffect(() => {
    // Taking keywords from article objects
    const allKeywordsArray = savedArticles.map((value) => value.keyword);

    allKeywordsArray.map(
      (keyword) => keyword.charAt(0).toUpperCase() + keyword.substr(1)
    );

    // Counting the occurrence of each keyword inside the array
    var countKeywords = allKeywordsArray.reduce(function (keyword, value) {
      keyword[value] = (keyword[value] || 0) + 1;
      return keyword;
    }, {});

    // Sorting the keywords by the occurrence
    var sortedArray = Object.keys(countKeywords).sort(function (a, b) {
      return countKeywords[b] - countKeywords[a];
    });
    setKeywordArray(sortedArray);
  }, [savedArticles]);

=======
import React from "react";
import "./SavedNewsHeader.css";
import savedArticles from "../../utils/savedArticles";

const SavedNewsHeader = () => {
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  return (
    <section className="saved-news">
      <div className="saved-news__content">
        <p className="saved-news__title">Saved articles</p>
        <h1 className="saved-news__heading">
<<<<<<< HEAD
          {currentUser.name}, you have {savedArticles.length} saved articles
=======
          Maty, you have {savedArticles.length} saved articles
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
        </h1>
        <p className="saved-news__keywords">
          By keywords:{" "}
          <span className="saved-news__keywords-bold">
<<<<<<< HEAD
            {keywordArray.length > 3
              ? `${keywordArray[0]}, ${keywordArray[1]}, and ${
                  keywordArray.length - 2
                } others`
              : keywordArray.join(", ")}
=======
            Nature, Yellowstone, and 2 other
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
          </span>
        </p>
      </div>
    </section>
  );
};

export default SavedNewsHeader;
