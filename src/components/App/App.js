import React, { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NotFoundResults from "../NotFoundResults/NotFoundResults";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SuccessfulPopup from "../SuccessfulPopup/SuccessfulPopup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState([]);
  const [isNewsCardListOpen, setIsNewsCardListOpen] = useState(false);
  const [onSavedArticlesPage, setOnSavedArticlesPage] = useState(false);
  const [isSuccessfulPopupOpen, setIsSuccessfulPopupOpen] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const location = useLocation().pathname.substring(1);

  useEffect(() => {
    const savedArticlesPath = ["saved-articles"];
    if (savedArticlesPath.includes(location)) {
      setOnSavedArticlesPage(true);
    } else {
      setOnSavedArticlesPage(false);
    }
  }, [location]);

  useEffect(() => {
    function handleEscapeClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keydown", handleEscapeClose);
    return () => document.removeEventListener("keydown", handleEscapeClose);
  }, []);

  useEffect(() => {
    if (searchKeyword) {
      setHasResults(true);
    } else {
      setHasResults(false);
    }
  }, [searchKeyword]);

  function handleLogin() {
    setLoggedIn(true);
    setIsSignInOpen(false);
  }

  function handleRegister() {
    setIsSignUpOpen(false);
    setIsSuccessfulPopupOpen(true);
  }

  function handleSignInClick() {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
    setIsSuccessfulPopupOpen(false);
  }

  function handleSignUpClick() {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  }

  function closeAllPopups() {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setIsSuccessfulPopupOpen(false);
  }

  return (
    <div className="App">
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        onSignInClick={handleSignInClick}
        setIsNewsCardListOpen={setIsNewsCardListOpen}
        setSearchKeyword={setSearchKeyword}
        onSavedArticlesPage={onSavedArticlesPage}
      />
      <Switch>
        <Route exact path="/">
          <SearchForm
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            setIsNewsCardListOpen={setIsNewsCardListOpen}
          />
          <NewsCardList
            onSavedArticlesPage={onSavedArticlesPage}
            loggedIn={loggedIn}
          />
          {!hasResults && isNewsCardListOpen && <NotFoundResults />}
          <About />
        </Route>

        <ProtectedRoute path="/saved-articles" loggedIn={loggedIn}>
          <SavedNewsHeader />
          <NewsCardList
            onSavedArticlesPage={onSavedArticlesPage}
            loggedIn={loggedIn}
          />
        </ProtectedRoute>
      </Switch>
      <SignIn
        isOpen={isSignInOpen}
        onClose={closeAllPopups}
        onSignUpClick={handleSignUpClick}
        onLoginSubmit={handleLogin}
      />
      <Register
        isOpen={isSignUpOpen}
        onClose={closeAllPopups}
        onSignInClick={handleSignInClick}
        onRegisterSubmit={handleRegister}
      />
      <SuccessfulPopup
        isOpen={isSuccessfulPopupOpen}
        onClose={closeAllPopups}
        onSignInClick={handleSignInClick}
      />
      <Footer />
    </div>
  );
}

export default App;
