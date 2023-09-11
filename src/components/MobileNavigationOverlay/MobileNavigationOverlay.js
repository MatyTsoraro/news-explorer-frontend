import React from "react";

const MobileNavigationOverlay = (props) => {
  if (props.mobileWidth) {
<<<<<<< HEAD
    return <div className="header__navigation-overlay">{props.children}</div>;
=======
    return (
      // mobile navigation overlay
      <div className="header__navigation-overlay">{props.children}</div>
    );
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
  }
  return props.children;
};

export default MobileNavigationOverlay;
