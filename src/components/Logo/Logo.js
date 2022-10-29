import "Logo.css";
import { Link } from "react-router-dom";
import logo from "../../images/newsexplorer-white_logo.png";

function Logo() {
  return (
    <Link to="/">
      <p className="logo">NewsExplorer</p>
    </Link>
  );
}

export default Logo;
