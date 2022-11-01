import React, { useState } from "react";
import "./NewsCard.css";
import imgPlaceholder from "../../images/dog_image.png";

/* Card template
 * Taking data from the News API and places it in the right place.
 */

const NewsCard = ({
  buttonType,
  message,
  isLoggedIn,
  onSaveClick,
  onRemoveClick,
}) => {
  const [isShown, setIsShown] = useState("_hidden");

  switch (buttonType) {
    case "save":
      message = "Sign in to save articles";
      break;
    case "remove":
      message = "Remove from saved";
      break;
    default:
      message = "Sign in to save articles";
  }

  const handleRemoveClick = () => {
    console.log("It should be removed!");
    // onRemoveClick(cardData);
  };

  const handleSaveClick = () => {
    console.log("It saved!");
    // onSaveClick(cardData);
  };

  const cardPlaceholder = {
    image: imgPlaceholder,
    date: "November 4, 2020",
    title: "Everyone Needs a Special 'Sit Spot' in Nature",
    text: 'Ever since I read Richard Louv\'s influental book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...',
    source: "TreeHugger",
    key: "Nature",
  };

  return (
    <div className="news-card">
      <div className="news-card__overlay">
        <span className={`news-card__warning${isShown}`}>{message}</span>
        {/* <span className="news-card__keyword news-card__keyword_type_hidden">
          {cardPlaceholder.key}
        </span> */}
        {isLoggedIn ? (
          <button
            onClick={
              buttonType === "save" ? handleSaveClick : handleRemoveClick
            }
            onMouseEnter={() => {
              buttonType === "save" ? setIsShown("_hidden") : setIsShown("");
            }}
            onMouseLeave={() => setIsShown("_hidden")}
            className={`${buttonType}-button`}
          ></button>
        ) : (
          <button
            onMouseEnter={() => setIsShown("")}
            onMouseLeave={() => setIsShown("_hidden")}
            className={`${buttonType}-button`}
          ></button>
        )}

        <span
          className={
            buttonType === "remove"
              ? "news-card__keyword"
              : "news-card__keyword news-card__keyword_type_hidden"
          }
        >
          {cardPlaceholder.key}
        </span>

        <img
          className="news-card__img"
          alt="Card"
          src={cardPlaceholder.image}
        />
        <div className="news-card__text-overlay">
          <p className="news-card__date">{cardPlaceholder.date}</p>
          <p className="news-card__title">{cardPlaceholder.title}</p>
          <p className="news-card__text">{cardPlaceholder.text}</p>
          <p className="news-card__source">
            {cardPlaceholder.source.toUpperCase()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
