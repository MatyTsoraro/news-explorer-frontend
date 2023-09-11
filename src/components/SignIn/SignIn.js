import React, { useEffect } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
<<<<<<< HEAD
import useFormValidation from "../../hooks/useFormValidation";

const SignIn = ({
  isOpen,
  onClose,
  onLoginSubmit,
  onSignUpClick,
  hasError,
}) => {
  const { values, handleChange, errors, isValid, handleFormReset } =
    useFormValidation();
=======
import FormValidation from "../../utils/FormValidation";
import "./SignIn.css";

const SignIn = ({ isOpen, onClose, onLoginSubmit, onSignUpClick }) => {
  const { values, handleChange, errors, isValid, handleFormReset } =
    FormValidation();
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6

  // When form is open, resets it
  useEffect(() => {
    handleFormReset();
  }, [isOpen, handleFormReset]);

  function handleSubmit(evt) {
    evt.preventDefault();
<<<<<<< HEAD
    onLoginSubmit(values.email, values.password);
=======
    onLoginSubmit();
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
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
<<<<<<< HEAD
=======

>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
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
<<<<<<< HEAD
          minLength="8"
=======
          minLength="5"
>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
          maxLength="30"
          required
        />
        <p className="popup__error" id="input-password-error">
          {errors.password || ""}
        </p>
      </div>
<<<<<<< HEAD
      {hasError && (
        <p className="popup__error popup__error_type_form">
          Incorrect email or password
        </p>
      )}
=======

>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
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
<<<<<<< HEAD
        <span className="popup__link" onClick={onSignUpClick}>
          Sign up
        </span>
=======
        <button className="popup__link" onClick={onSignUpClick}>
          Sign up
        </button>

>>>>>>> 74710acca71b6ac8c291ef03f806de9f8a564fe6
      </p>
    </PopupWithForm>
  );
};

export default SignIn;
