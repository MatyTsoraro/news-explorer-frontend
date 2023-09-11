import { useEffect } from "react";
<<<<<<< HEAD
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const notListen = history.listen(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    return () => {
      notListen();
    };
  }, [history]);
=======
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6

  return null;
}

<<<<<<< HEAD
export default withRouter(ScrollToTop);
=======
export default ScrollToTop;
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
