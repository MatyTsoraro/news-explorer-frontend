import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function ScrollToTop() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollToTop;
