import "./SearchResults.css";
import NewsCardList from "../NewsCardList/NewsCardList";

const SearchResults = () => {
  return (
    <div className="search-results">
      <div className="search-results__overlay">
        <h2 className="search-results__title">Search results</h2>
        <NewsCardList buttonType={"save"} />
        <button className="search-results__button">Show more</button>
      </div>
    </div>
  );
};

export default SearchResults;
