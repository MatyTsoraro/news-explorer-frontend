import React from "react";
import "./MainNotLoggedIn.css";

export const MainNotLoggedIn = () => {
    return (
        <div className="main-not-logged-in">
            <div className="div">
                <footer className="footer">
                    <p className="element-supersite">© 2021 Supersite, Powered by News API</p>
                    <div className="group">
                        <div className="group-2">
                            <div className="text-wrapper">Home</div>
                            <div className="text-wrapper-2">Practicum</div>
                        </div>
                    </div>
                    <div className="icon-github">
                        <img className="img" alt="Vector" src="vector.svg" />
                    </div>
                    <div className="social-fb">
                        <img className="img" alt="Iconmonstr facebook" src="iconmonstr-facebook-6.svg" />
                    </div>
                </footer>
                <div className="about-author">
                    <div className="comment-avatar-image" />
                    <p className="this-block-describes">
                        This block describes the project author. Here you should indicate your name, what you do, and which
                        development technologies you know.
                        <br />
                        <br />
                        You can also talk about your experience with Practicum, what you learned there, and how you can help
                        potential customers.
                    </p>
                    <div className="text-wrapper-3">About the author</div>
                </div>
                <div className="div-2">
                    <div className="div-2">
                        <div className="overlap">
                            <p className="what-s-going-on-in">What&#39;s going on in the world?</p>
                            <p className="p">Find the latest news on any topic and save them in your personal account.</p>
                            <div className="search-field">
                                <div className="overlap-group">
                                    <div className="button">
                                        <div className="text-wrapper-4">Search</div>
                                    </div>
                                    <div className="text-wrapper-5">Enter topic</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-logout">
                        <div className="div-wrapper">
                            <div className="text-wrapper-6">Sign in</div>
                        </div>
                        <div className="text-wrapper-7">Home</div>
                        <img className="vector-stroke" alt="Vector stroke" src="vector-stroke.svg" />
                        <div className="text-wrapper-8">NewsExplorer</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
