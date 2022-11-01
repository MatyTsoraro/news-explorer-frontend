import "./Popup.css";

const Popup = ({
  isOpen,
  popupTitle,
  //   isButton,
  //   buttonText,
  //   linkText,
  //   openPopup,
  //   popupType,
  children,
  isSuccess,
  onClose,
}) => {
  return (
    // <div className={`popup ${isOpen && "popup_open"}`}>
    // <div className="popup popup_receptive">
    <div className={`popup ${isOpen && "popup_receptive"}`}>
      <div className="popup__overlay">
        <button className="popup__close-button" onClick={onClose} />
        <h2
          className={
            isSuccess
              ? "popup__title popup__title_type_success"
              : "popup__title"
          }
        >
          {popupTitle}
        </h2>
        {children}
        {/* {isButton ? (
          <button className="popup__button">{"button" || buttonText}</button>
        ) : (
          ""
        )}

        <p className={`popup__text ${popupType}`}>
          or{" "}
          <button className="popup__link" onClick={openPopup}>
            {"link" || linkText}
          </button>
        </p> */}
      </div>
    </div>
  );
};

export default Popup;
