import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo">
      <p className="logo__text">NewsExplorer</p>
    </Link>
  );
}

export default Logo;
