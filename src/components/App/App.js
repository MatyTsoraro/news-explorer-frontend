import React, { useState } from "react";
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <div className="App">
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
                <Header colorLogo={"black"} colorText={"black"} />
                <SavedNews />
              </ProtectedRoute>
            }
          />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
