import "./PopupWithForm.css";
import Popup from "../Popup/Popup";

const PopupWithForm = ({
  isOpen,
  popupTitle,
  buttonText,
  linkText,
  openPopup,
  formName,
  onClose,
}) => {
  //   return (
  //     <div className="popup">
  //       <div className="popup__overlay">
  //         {/* <h2 className="popup__title">{popupTitle}</h2> */}
  //       </div>
  //     </div>
  //   );
  return (
    <Popup
      isOpen={isOpen}
      popupTitle={popupTitle}
      //   isButton={true}
      buttonText={buttonText}
      linkText={linkText}
      openPopup={openPopup}
      onClose={onClose}
    >
      <form name={formName}>
        <div className="popup-form__input-overlay">
          <label className="popup-form__input-label" aria-label="email">
            Email
          </label>
          <input
            className="popup-form__input"
            id="signin-email"
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="popup-form__input-overlay">
          <label className="popup-form__input-label" aria-label="password">
            Password
          </label>
          <input
            className="popup-form__input"
            id="password"
            type="password"
            placeholder="Enter password"
          />
        </div>
        {formName === "register" ? (
          <div className="popup-form__input-overlay popup-form__input-overlay_type_username">
            <label className="popup-form__input-label" aria-label="username">
              Username
            </label>
            <input
              className="popup-form__input"
              // id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
        ) : (
          ""
        )}
      </form>
      <button className="popup-form__button">{buttonText}</button>
      <p className={`popup-form__text`}>
        or{" "}
        <button className="popup-form__link" onClick={openPopup}>
          {linkText}
        </button>
      </p>
    </Popup>
  );
};

export default PopupWithForm;
