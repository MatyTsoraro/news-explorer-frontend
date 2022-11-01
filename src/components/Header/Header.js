import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = ({
  isLoggedIn,
  colorLogo,
  colorText,
  openSigninPopup,
  userName,
}) => {
  return (
    <div className="header">
      <div className="header__overlay">
        <Logo colorLogo={colorLogo} />
        <Navigation
          isLoggedIn={isLoggedIn}
          colorText={colorText}
          openSigninPopup={openSigninPopup}
        />
      </div>
    </div>
  );
};

export default Header;
