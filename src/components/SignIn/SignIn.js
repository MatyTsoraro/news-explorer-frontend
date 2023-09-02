import React, { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import FormValidation from "../../utils/FormValidation";
import "./SignIn.css";

const SignIn = ({ isOpen, onClose, onLoginSubmit, onSignUpClick }) => {
  const { values, handleChange, errors, isValid, handleFormReset } =
    FormValidation();

  // When form is open, resets it
  useEffect(() => {
    handleFormReset();
  }, [isOpen, handleFormReset]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onLoginSubmit();
  }

  return (
    <PopupWithForm
      name="login"
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="popup__input-overlay">
        <label className="popup__input-label" htmlFor="email-input">
          Email
        </label>
        <input
          className="popup__input"
          type="email"
          id="login-email"
          autoComplete="on"
          placeholder="Enter email"
          name="email"
          onChange={handleChange}
          value={values.email || ""}
          required
        />
        <p className="popup__error" id="input-email-error">
          {errors.email || ""}
        </p>
      </div>

      <div className="popup__input-overlay">
        <label className="popup__input-label" htmlFor="password-input">
          Password
        </label>
        <input
          className="popup__input"
          type="password"
          id={`password-login`}
          autoComplete="on"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
          value={values.password || ""}
          minLength="5"
          maxLength="30"
          required
        />
        <p className="popup__error" id="input-password-error">
          {errors.password || ""}
        </p>
      </div>

      <button
        className={`popup__submit-button ${
          isValid ? "popup__submit-button_active" : ""
        }`}
        type="submit"
        aria-label="Sign in"
        disabled={!isValid}
      >
        Sign in
      </button>
      <p className="popup__signin-register">
        or{" "}
        <button className="popup__link" onClick={onSignUpClick}>
          Sign up
        </button>

      </p>
    </PopupWithForm>
  );
};

export default SignIn;
