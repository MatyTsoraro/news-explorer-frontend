import "./Footer.css";
import { NavLink } from "react-router-dom";
import facebookIcon from "../../images/facebook-icon.svg";
import githubIcon from "../../images/github-icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &copy; 2022 Supersite, Powered by News API
      </p>
      <div className="footer__overlay">
        <NavLink className="footer__homepage" to="/">
          Home
        </NavLink>
        <p className="footer__text">Practicum by Yandex</p>
        <div className="footer__link-overlay">
          <a className="footer__link" href="*">
            <img className="footer__icon" alt="GitHub Icon" src={githubIcon} />
          </a>
          <a className="footer__link" href="*">
            <img
              className="footer__icon"
              alt="Facebook Icon"
              src={facebookIcon}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
