import { useEffect } from "react";
import { withRouter } from "react-router-dom";

function ScrollToTop({ history }) {
  useEffect(() => {
    const notListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      notListen();
    };
  }, [history]);

  return null;
}

export default withRouter(ScrollToTop);
