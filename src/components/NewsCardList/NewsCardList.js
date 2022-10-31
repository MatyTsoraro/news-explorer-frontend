import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardList = () => {
  return (
    <div className="card-list">
      <div className="card-list__overlay">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
};

export default NewsCardList;
