import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import "./App.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
=======
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import "./App.css";


import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
import About from "../About/About";
import Footer from "../Footer/Footer";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

import Preloader from "../Preloader/Preloader";

import NotFoundResults from "../NotFoundResults/NotFoundResults";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import SuccessfulPopup from "../SuccessfulPopup/SuccessfulPopup";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import newsApi from "../../utils/NewsApi";
import * as auth from "../../utils/auth";

function App() {
<<<<<<< HEAD
  const history = useHistory();
=======
  const navigate = useNavigate();  // Changed here
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6

  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("jwt"));

  const [cards, setCards] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [isRegistered, setIsRegistered] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState([]);
  const [isNewsCardListOpen, setIsNewsCardListOpen] = useState(false);
  const [onSavedArticlesPage, setOnSavedArticlesPage] = useState(false);
  const [isSuccessfulPopupOpen, setIsSuccessfulPopupOpen] = useState(false);
  const [hasResults, setHasResults] = useState(false);

  const location = useLocation().pathname.substring(1);
<<<<<<< HEAD
=======

>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  const [hasError, setHasError] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [showCards, setShowCards] = useState([]);
  const [savedCardsArray, setSavedCardsArray] = useState([]);

  // User token check
  useEffect(() => {
    if (token) {
      auth
<<<<<<< HEAD
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          history.push("/");
        })
        .catch((err) => console.log(err));
    }
  }, [history, token]);
=======
          .checkToken(token)
          .then((res) => {
            setLoggedIn(true);
            navigate("/");  // Changed here
          })
          .catch((err) => console.log(err));
    }
  }, [navigate, token]);  // Changed here
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6

  // GETting current user and articles if the user logged in
  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getCurrentUser(token), mainApi.getArticles(token)])
<<<<<<< HEAD
        .then(([user, articles]) => {
          setCurrentUser(user.data);
          setSavedArticles(articles.data);
        })
        .catch((err) => console.log(err));
=======
          .then(([user, articles]) => {
            setCurrentUser(user.data);
            setSavedArticles(articles.data);
          })
          .catch((err) => console.log(err));
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
    }
  }, [token, loggedIn]);

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    }
  }, [token]);

  // Determines if user is on the saved-articles page
  useEffect(() => {
    const savedArticlesPath = ["saved-articles"];
    if (savedArticlesPath.includes(location)) {
      setOnSavedArticlesPage(true);
    } else {
      setOnSavedArticlesPage(false);
    }
  }, [location]);

  // Closes the popup with the Escape button
  useEffect(() => {
    function handleEscapeClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keydown", handleEscapeClose);
    return () => document.removeEventListener("keydown", handleEscapeClose);
  }, []);

  // Saving an article and adds it to the array of articles
  function handleSaveArticle(data) {
    if (!savedArticles.find((obj) => obj.title === data.title)) {
      mainApi
<<<<<<< HEAD
        .saveArticle(data, searchKeyword, token)
        .then((res) => {
          if (res) {
            setSavedArticles((savedArticles) => [...savedArticles, res.data]);
            console.log("article got saved!");
          }
        })
        .catch((err) => console.log(err));
=======
          .saveArticle(data, searchKeyword, token)
          .then((res) => {
            if (res) {
              setSavedArticles((savedArticles) => [...savedArticles, res.data]);
              console.log("article got saved!");
            }
          })
          .catch((err) => console.log(err));
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
    } else {
      console.log("Sorry, but it is already got saved");
    }
  }

  // DELETE-ing article and removes it from the array
  function handleRemoveArticle(data) {
    let articleId;

    /* If on the homepage then find the corresponding saved article
<<<<<<< HEAD
     which matches the news API articleId, and if on the saved articles page 
=======
     which matches the news API articleId, and if on the saved articles page
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
     then simply saving the data id to the articleId */
    if (!onSavedArticlesPage) {
      if (savedArticles.find((obj) => obj.link === data.url)) {
        const article = savedArticles.find((obj) => {
          return obj.link === data.url;
        });
        articleId = article._id;
      } else {
        console.log("Sorry, this card does not exist!");
      }
    } else {
      articleId = data._id;
    }

    mainApi
<<<<<<< HEAD
      .removeArticle(articleId, token)
      .then((data) => {
        setSavedArticles(savedArticles.filter((obj) => obj._id !== data._id));
      })
      .catch((err) => console.log(err));
=======
        .removeArticle(articleId, token)
        .then((data) => {
          setSavedArticles(savedArticles.filter((obj) => obj._id !== data._id));
        })
        .catch((err) => console.log(err));
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  }

  function handleSearchSubmit(keyword) {
    setIsNewsCardListOpen(false);
    setIsLoading(true);
    newsApi
<<<<<<< HEAD
      .searchArticles(keyword)
      .then((res) => {
        setIsNewsCardListOpen(true);
        setCards(res);
        if (res.length === 0) {
          setHasResults(false);
        } else {
          setHasResults(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
=======
        .searchArticles(keyword)
        .then((res) => {
          setIsNewsCardListOpen(true);
          setCards(res);
          if (res.length === 0) {
            setHasResults(false);
          } else {
            setHasResults(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setHasError(true);
        })
        .finally(() => {
          setIsLoading(false);
        });
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  }

  function handleLogOut() {
    setLoggedIn(false);
    localStorage.removeItem("jwt");
<<<<<<< HEAD
    history.push("/");
=======
    navigate("/");  // Changed here
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  }

  function handleLogin() {
    setHasError(false);
    setLoggedIn(true);
    setIsSignInOpen(false);
  }

  function handleRegister() {
    setHasError(false);
    setIsSignUpOpen(false);
    setIsSuccessfulPopupOpen(true);
  }

  function handleSignInClick() {
    setHasError(false);
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
    setIsSuccessfulPopupOpen(false);
  }

  function handleSignUpClick() {
    setHasError(false);
    setIsSignUpOpen(true);
    setIsSignInOpen(false);
  }

  function handleRegisterSubmit(email, password, name) {
    auth
<<<<<<< HEAD
      .register(email, password, name)
      .then((res) => {
        if (res) {
          setIsRegistered(true);
          handleRegister();
        } else {
          setIsRegistered(false);
          setHasError(true);
        }
      })
      .catch((err) => {
        console.log(`This email is unavailable: ${err.message}`);
        setHasError(true);
      });
=======
        .register(email, password, name)
        .then((res) => {
          if (res) {
            setIsRegistered(true);
            handleRegister();
          } else {
            setIsRegistered(false);
            setHasError(true);
          }
        })
        .catch((err) => {
          console.log(`This email is unavailable: ${err.message}`);
          setHasError(true);
        });
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  }

  function handleLoginSubmit(email, password) {
    auth
<<<<<<< HEAD
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setToken(data.token);
          handleLogin();
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(`Incorrect email or password: ${err.message}`);
        setHasError(true);
      });
=======
        .login(email, password)
        .then((data) => {
          if (data.token) {
            localStorage.setItem("jwt", data.token);
            setToken(data.token);
            handleLogin();
            navigate("/");
          }
        })
        .catch((err) => {
          console.log(`Incorrect email or password: ${err.message}`);
          setHasError(true);
        });
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  }

  function closeAllPopups() {
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setIsSuccessfulPopupOpen(false);
  }

<<<<<<< HEAD
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header
          loggedIn={loggedIn}
          currentUser={currentUser}
          setLoggedIn={setLoggedIn}
          onSignInClick={handleSignInClick}
          setIsNewsCardListOpen={setIsNewsCardListOpen}
          setSearchKeyword={setSearchKeyword}
          onSavedArticlesPage={onSavedArticlesPage}
          onLogOut={handleLogOut}
        />
        <Switch>
          <Route exact path="/">
            <SearchForm
              onSearch={handleSearchSubmit}
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
              setIsNewsCardListOpen={setIsNewsCardListOpen}
            />
            {hasResults && isNewsCardListOpen && (
              <NewsCardList
                onSavedArticlesPage={onSavedArticlesPage}
                loggedIn={loggedIn}
                cards={cards}
                savedArticles={savedArticles}
                onSaveArticleClick={handleSaveArticle}
                onRemoveArticleClick={handleRemoveArticle}
                showCards={showCards}
                setShowCards={setShowCards}
                onSignInClick={handleSignInClick}
              />
            )}

            {isLoading && <Preloader />}
            {!hasResults && !isLoading && isNewsCardListOpen && (
              <NotFoundResults hasError={hasError} />
            )}
            <About />
          </Route>

          <ProtectedRoute path="/saved-articles" loggedIn={loggedIn}>
            <SavedNewsHeader
              currentUser={currentUser}
              savedArticles={savedArticles}
            />
            <NewsCardList
              onSavedArticlesPage={onSavedArticlesPage}
              loggedIn={loggedIn}
              savedArticles={savedArticles}
              setSavedArticles={setSavedArticles}
              token={token}
              showCards={showCards}
              setShowCards={setShowCards}
              savedCardsArray={savedCardsArray}
              setSavedCardsArray={setSavedCardsArray}
              onRemoveArticleClick={handleRemoveArticle}
            />
          </ProtectedRoute>
        </Switch>
        <SignIn
          isOpen={isSignInOpen}
          onClose={closeAllPopups}
          onSignUpClick={handleSignUpClick}
          onLoginSubmit={handleLoginSubmit}
          hasError={hasError}
        />
        <Register
          isOpen={isSignUpOpen}
          onClose={closeAllPopups}
          onSignInClick={handleSignInClick}
          onRegisterSubmit={handleRegisterSubmit}
          hasError={hasError}
        />
        <SuccessfulPopup
          isOpen={isSuccessfulPopupOpen}
          onClose={closeAllPopups}
          onSignInClick={handleSignInClick}
          isRegistered={isRegistered}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
=======
  function updateArticles(newArticles) {
    setCards(newArticles);
  }

  return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="App">
          <Header
              loggedIn={loggedIn}
              currentUser={currentUser}
              setLoggedIn={setLoggedIn}
              onSignInClick={handleSignInClick}
              setIsNewsCardListOpen={setIsNewsCardListOpen}
              setSearchKeyword={setSearchKeyword}
              onSavedArticlesPage={onSavedArticlesPage}
              onLogOut={handleLogOut}
          />
          <Routes>
            <Route path="/" element={
              <>
                <SearchForm
                    onSearch={handleSearchSubmit}
                    searchKeyword={searchKeyword}
                    setSearchKeyword={setSearchKeyword}
                    setIsNewsCardListOpen={setIsNewsCardListOpen}
                    updateArticles={updateArticles}
                />
                {hasResults && isNewsCardListOpen && (
                    <NewsCardList
                        onSavedArticlesPage={onSavedArticlesPage}
                        loggedIn={loggedIn}
                        cards={cards}
                        savedArticles={savedArticles}
                        onSaveArticleClick={handleSaveArticle}
                        onRemoveArticleClick={handleRemoveArticle}
                        showCards={showCards}
                        setShowCards={setShowCards}
                        onSignInClick={handleSignInClick}
                    />
                )}
                {isLoading && <Preloader />}
                {!hasResults && !isLoading && isNewsCardListOpen && (
                    <NotFoundResults hasError={hasError} />
                )}
                <About />
              </>
            } />

            <Route path="/saved-articles" element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedNewsHeader
                    currentUser={currentUser}
                    savedArticles={savedArticles}
                />
                <NewsCardList
                    onSavedArticlesPage={onSavedArticlesPage}
                    loggedIn={loggedIn}
                    savedArticles={savedArticles}
                    setSavedArticles={setSavedArticles}
                    token={token}
                    showCards={showCards}
                    setShowCards={setShowCards}
                    savedCardsArray={savedCardsArray}
                    setSavedCardsArray={setSavedCardsArray}
                    onRemoveArticleClick={handleRemoveArticle}
                />
              </ProtectedRoute>
            } />
          </Routes>

          <SignIn
              isOpen={isSignInOpen}
              onClose={closeAllPopups}
              onSignUpClick={handleSignUpClick}
              onLoginSubmit={handleLoginSubmit}
              hasError={hasError}
          />
          <Register
              isOpen={isSignUpOpen}
              onClose={closeAllPopups}
              onSignInClick={handleSignInClick}
              onRegisterSubmit={handleRegisterSubmit}
              hasError={hasError}
          />
          <SuccessfulPopup
              isOpen={isSuccessfulPopupOpen}
              onClose={closeAllPopups}
              onSignInClick={handleSignInClick}
              isRegistered={isRegistered}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  );
}

export default App;
