import "./SavedNews.css";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

const SavedNews = ({ userName }) => {
  const placeholder = "Grace";

  /* Probably the keywords going to be array */
  const placeholderData = {
    savedArticles: 5,
    keywords: "Nature, Yellowstone and 2 others",
  };

  return (
    <div className="saved-news">
      {/* <Header isLoggedIn={true} colorLogo={"black"} colorText={"black"} /> */}
      <div className="saved-news__text-overlay">
        <p className="saved-news__title">Saved articles</p>
        <p className="saved-news__saved">
          {placeholder || userName}, you have {placeholderData.savedArticles}{" "}
          saved articles
        </p>
        <p className="saved-news__keywords">
          By keywords: <b>{placeholderData.keywords}</b>
        </p>
      </div>
      <div className="saved-news__news-overlay">
        <div className="saved-news__cards">
          <NewsCard buttonType={"remove"} />
          <NewsCard buttonType={"remove"} />
          <NewsCard buttonType={"remove"} />
          <NewsCard buttonType={"remove"} />
          <NewsCard buttonType={"remove"} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SavedNews;
