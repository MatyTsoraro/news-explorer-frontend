import "./Navigation.css";
import { NavLink } from "react-router-dom";

import whiteIcon from "../../images/button-white_icon.svg";
import blackIcon from "../../images/button-black_icon.svg";

const Navigation = ({ isLoggedIn, userName, colorText }) => {
  const placeholderUser = "Grace";

  const textInWhite = {
    signInButton: "navigation__button",
    homeButton: "navigation__homepage",
    savedArticles: "navigation__saved-articles",
  };

  const textInBlack = {
    signInButton: "navigation__button_type_page",
    homeButton: "navigation__homepage_type_page",
    savedArticles: "navigation__saved-articles_type_page",
  };

  // const textInWhiteSelected = {
  //   homeButton: "navigation__homepage navigation__homepage_type_selected",
  //   savedArticles: "navigation__saved-articles_type_selected",
  // };

  // const textInBlackSelected = {
  //   homeButton: "navigation__homepage_type_selected-page",
  //   savedArticles: "navigation__saved-articles_type_selected-page",
  // };

  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <ul className="navigation__overlay navigation__overlay_type_signedin">
          <li className="navigation__link">
            <NavLink
              className={
                colorText === "black"
                  ? `${textInWhite.homeButton} ${textInBlack.homeButton}`
                  : `${textInWhite.homeButton}`
              }
              to="/"
              aria-label="navigation link"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className={
                colorText === "black"
                  ? `${textInWhite.savedArticles} ${textInBlack.savedArticles}`
                  : `${textInWhite.savedArticles}`
              }
              to="/saved-news"
              aria-label="navigation link"
            >
              Saved articles
            </NavLink>
          </li>
          <li>
            <button
              className={
                colorText === "black"
                  ? `${textInWhite.signInButton} ${textInBlack.signInButton}`
                  : `${textInWhite.signInButton}`
              }
            >
              {placeholderUser || userName}
              <img
                className="navigation__button-img"
                alt="logout"
                src={colorText === "black" ? blackIcon : whiteIcon}
              />
            </button>
          </li>
        </ul>
      ) : (
        <ul className="navigation__overlay">
          <li className="navigation__link">
            <NavLink
              className={
                colorText === "black"
                  ? `${textInWhite.homeButton} ${textInBlack.homeButton}`
                  : `${textInWhite.homeButton}`
              }
              to="/"
              aria-label="navigation link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <button
              className={
                colorText === "black"
                  ? `${textInWhite.signInButton} ${textInBlack.signInButton}`
                  : `${textInWhite.signInButton}`
              }
            >
              Sign in
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
