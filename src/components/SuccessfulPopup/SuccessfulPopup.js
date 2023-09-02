import React from "react";
import "./SuccessfulPopup.css";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SuccessfulPopup = (props) => {
  return (
    <PopupWithForm
      name="success"
      title="Registration successfully completed!"
      isOpen={props.isOpen}
      onClose={props.onClose}
      isLoading={props.isLoading}
    >
      <p className="popup__link-signin" onClick={props.onSignInClick}>
        Sign in
      </p>
    </PopupWithForm>
  );
};

export default SuccessfulPopup;
