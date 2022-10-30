import "./NotFound.css";
import notFoundIcon from "../../images/not-found_image.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__overlay">
        <img
          className="not-found__icon"
          alt="Not Found Icon"
          src={notFoundIcon}
        />
        <p className="not-found__title">Nothing found</p>
        <p className="not-found__subtitle">
          Sorry, but the search terms you've
        </p>
        <p className="not-found__subtitle">
          entered did not match to anything.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
