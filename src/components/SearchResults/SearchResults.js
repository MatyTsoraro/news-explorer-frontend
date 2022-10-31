import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = () => {
  return (
    <div className="search-results">
      <div className="search-results__overlay">
        <h3 className="search-results__title">Search results</h3>
        <NewsCardList />
        <button className="search-results__button">Show more</button>
      </div>
    </div>
  );
};

export default SearchResults;
