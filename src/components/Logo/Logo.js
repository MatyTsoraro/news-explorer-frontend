import "./Logo.css";
import { Link } from "react-router-dom";

function Logo({ colorLogo }) {
  return (
    <Link to="/" className="logo">
      <p className={`logo__text logo__text_${colorLogo}`}>NewsExplorer</p>
    </Link>
  );
}

export default Logo;
