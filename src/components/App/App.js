import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
// import NotFound from "../NotFound/NotFound";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <SearchForm>
        <Header isLoggedIn={isLoggedIn} />
      </SearchForm>
      <About />
      <Footer />
    </div>
  );
}

export default App;
