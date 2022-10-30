import "./SearchForm.css";

const SearchForm = ({ handleSubmit, children }) => {
  return (
    <div className="search-form">
      {children}
      <div className="search-form__overlay">
        <h1 className="search-form__title">What's going on in the world?</h1>
        <p className="search-form__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form name="search" onSubmit={handleSubmit}>
          <div className="search-form__bar">
            <input
              className="search-form__input"
              placeholder="Enter topic"
              type="text"
            ></input>
            <button
              className="search-form__button"
              id="search-button"
              type="search"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
