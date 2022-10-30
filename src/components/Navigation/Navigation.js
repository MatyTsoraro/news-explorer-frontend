import "./Navigation.css";
import { NavLink } from "react-router-dom";

import whiteIcon from "../../images/button-white_icon.svg";
// import blackIcon from "../../images/button-black_icon.svg";

const Navigation = ({ isLoggedIn, userName }) => {
  const placeholderUser = "Grace";

  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <ul className="navigation__overlay navigation__overlay_type_signedin">
          <li className="navigation__link">
            <NavLink
              className="navigation__homepage navigation__homepage_type_selected"
              to="/"
              aria-label="navigation link"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              className="navigation__saved-articles"
              to="/saved-news"
              aria-label="navigation link"
            >
              Saved articles
            </NavLink>
          </li>
          <li>
            <button className="navigation__button">
              {placeholderUser || userName}
              <img
                className="navigation__button-img"
                alt="logout"
                src={whiteIcon}
              />
            </button>
          </li>
        </ul>
      ) : (
        <ul className="navigation__overlay">
          <li className="navigation__link">
            <NavLink
              className="navigation__homepage navigation__homepage_type_selected"
              to="/"
              aria-label="navigation link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <button className="navigation__button">Sign in</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
