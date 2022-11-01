import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
// import NotFound from "../NotFound/NotFound";
import About from "../About/About";
// import SearchResults from "../SearchResults/SearchResults";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

// import PopupWithForm from "../PopupWithForm/PopupWithForm";
import RegisterPopup from "../RegisterPopup/RegisterPopup";
import LoginPopup from "../LoginPopup/LoginPopup";
import RegisterSuccessPopup from "../RegisterSuccessPopup/RegisterSuccessPopup";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  // Popups
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const closeAllPopups = () => {
    setIsRegisterOpen(false);
    setIsSuccessOpen(false);
    setIsLoginOpen(false);
  };

  useEffect(() => {
    function handleEscapeClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }

    document.addEventListener("keydown", handleEscapeClose);

    return () => document.removeEventListener("keydown", handleEscapeClose);
  }, []);

  return (
    <div className="App">
      {/* <PopupWithForm isOpen={true} /> */}
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SearchForm>
                  <Header
                    isLoggedIn={isLoggedIn}
                    openSigninPopup={() => setIsRegisterOpen(true)}
                    colorLogo={"white"}
                    colorText={""}
                  />
                </SearchForm>
                <About />
                <Footer />
              </>
            }
          />
          <Route
            exact
            path="/saved-news"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Header
                  isLoggedIn={isLoggedIn}
                  openSigninPopup={() => setIsRegisterOpen(true)}
                  colorLogo={"black"}
                  colorText={"black"}
                />
                <SavedNews />
              </ProtectedRoute>
            }
          />
        </Routes>
        <RegisterPopup
          isOpen={isRegisterOpen}
          openPopup={() => {
            setIsRegisterOpen(false);
            setIsLoginOpen(true);
          }}
          onClose={closeAllPopups}
        />
        <LoginPopup
          isOpen={isLoginOpen}
          openPopup={() => {
            setIsLoginOpen(false);
            setIsRegisterOpen(true);
          }}
          onClose={closeAllPopups}
        />
        <RegisterSuccessPopup
          isOpen={isSuccessOpen}
          openPopup={() => {
            setIsSuccessOpen(false);
            setIsLoginOpen(true);
          }}
          onClose={closeAllPopups}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
