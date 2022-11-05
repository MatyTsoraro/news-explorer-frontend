import React from "react";

const MobileNavigationOverlay = (props) => {
  if (props.mobileWidth) {
    return (
      // mobile navigation overlay
      <div className="header__navigation-overlay">{props.children}</div>
    );
  }
  return props.children;
};

export default MobileNavigationOverlay;
