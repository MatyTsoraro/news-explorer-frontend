import React from "react";
import "./NotFoundResults.css";
<<<<<<< HEAD
import NotFoundImage from "../../images/icons/not-found_icon.svg";

const NotFoundResults = (hasError) => {
=======
import NotFoundImage from "../../images/not-found_icon.svg";

const NotFoundResults = () => {
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  return (
    <section className="not-found">
      <div className="not-found__overlay">
        <img
          className="not-found__image"
          src={NotFoundImage}
          alt="A sad face"
        />
        <h3 className="not-found__title">Nothing found</h3>
        <p className="not-found__description">
<<<<<<< HEAD
          {hasError
            ? "Sorry, but nothing matched your search terms."
            : "Sorry, something went wrong during the request, the server might be down or there is an issue with connection. Please, try again later."}
=======
          Sorry, but nothing matched your search terms.
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
        </p>
      </div>
    </section>
  );
};

export default NotFoundResults;
