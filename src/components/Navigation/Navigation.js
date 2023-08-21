import React from "react";
import "./Navigation.css";

export const Navigation = () => {
    return (
        <div className="navigation">
            <div className="overlap-group">
                <div className="text-signin">Sign in</div>
            </div>
            <div className="text-home">Home</div>
            <img className="vector-stroke" alt="Vector stroke" src="vector-stroke.svg" />
            <div className="text-wrapper-2">NewsExplorer</div>
        </div>
    );
};
