import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
<<<<<<< HEAD
import LinkedInIcon from "../../images/icons/linkedin-icon.svg";
import InstagramIcon from "../../images/icons/instagram-icon.svg";
import GithubIcon from "../../images/icons/github-icon.svg";
=======
import FacebookIcon from "../../images/facebook-icon.svg";
import GithubIcon from "../../images/github-icon.svg";
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
<<<<<<< HEAD
          &copy; 2022 Supersite, Powered by News API
=======
          &copy; 2023 Supersite, Powered by News API
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
        </p>
        <nav className="footer__navigation">
          <div className="footer__links">
            <NavLink className="footer__link" to="/">
              Home
            </NavLink>
            <a
              className="footer__link"
<<<<<<< HEAD
              href="https://practicum.com/en-isr/"
=======
              href="https://practicum.com/"
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
              target="_blank"
              rel="noreferrer"
            >
              Practicum
            </a>
          </div>
          <div className="footer__social">
            <a
<<<<<<< HEAD
              href="https://github.com/Chen-Abudi"
=======
              href="https://github.com/MatyTsoraro"
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__icon footer__icon_type_github"
                src={GithubIcon}
                alt="Github Icon"
              />
            </a>
            <a
<<<<<<< HEAD
              href="https://www.linkedin.com/in/chen-abudi/"
=======
              href="https://www.facebook.com/maty.tsoraro/"
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
              target="_blank"
              rel="noreferrer"
            >
              <img
<<<<<<< HEAD
                className="footer__icon footer__icon_type_linkedin"
                src={LinkedInIcon}
                alt="LinkedIn Icon"
              />
            </a>

            <a
              href="https://www.instagram.com/calibased23/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footer__icon footer__icon_type_instagram"
                src={InstagramIcon}
                alt="Instagram Icon"
=======
                className="footer__icon footer__icon_type_facebook"
                src={FacebookIcon}
                alt="Facebook Icon"
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
              />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
