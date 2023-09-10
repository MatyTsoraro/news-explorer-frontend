import React, { useEffect, useState } from "react";
import "./SavedNewsHeader.css";

const SavedNewsHeader = ({ currentUser, savedArticles }) => {
 const [keywordArray, setKeywordArray] = useState([]);

 useEffect(() => {
  if (Array.isArray(savedArticles)) {
   const allKeywordsArray = savedArticles.map((value) => value.keyword);
   allKeywordsArray.map(
    (keyword) => keyword.charAt(0).toUpperCase() + keyword.substr(1)
   );

   var countKeywords = allKeywordsArray.reduce(function (keyword, value) {
    keyword[value] = (keyword[value] || 0) + 1;
    return keyword;
   }, {});

   var sortedArray = Object.keys(countKeywords).sort(function (a, b) {
    return countKeywords[b] - countKeywords[a];
   });
   setKeywordArray(sortedArray);
  }
 }, [savedArticles]);

 return (
  <section className="saved-news">
   <div className="saved-news__content">
    <p className="saved-news__title">Saved articles</p>
    <h1 className="saved-news__heading">
     {currentUser ? `${currentUser.name},` : "User,"} you have{" "}
     {Array.isArray(savedArticles) ? savedArticles.length : 0} saved articles
    </h1>
    <p className="saved-news__keywords">
     By keywords:{" "}
     <span className="saved-news__keywords-bold">
      {keywordArray.length > 3
       ? `${keywordArray[0]}, ${keywordArray[1]}, and ${
          keywordArray.length - 2
         } others`
       : keywordArray.join(", ")}
     </span>
    </p>
   </div>
  </section>
 );
};

export default SavedNewsHeader;
