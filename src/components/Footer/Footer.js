import React from "react";
import "./style.css";
export const Footer = () => {
    return (
        <div className="footer">
            <p className="element-supersite">© 2021 Supersite, Powered by News API</p>
            <div className="group">
                <div className="div">
                    <div className="text-wrapper">Home</div>
                    <div className="text-wrapper-2">Practicum</div>
                </div>
            </div>
            <div className="icon-github">
                <img className="img" alt="Vector" src="vector.svg" />
            </div>
            <div className="social-fb">
                <img className="img" alt="Iconmonstr facebook" src="facebook-icon.svg" />
            </div>
        </div>
    );
};
export default Footer;
