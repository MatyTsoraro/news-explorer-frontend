import PopupWithForm from "../PopupWithForm/PopupWithForm";

const Register = ({ isOpen, openPopup, onClose }) => {
  return (
    <PopupWithForm
      isOpen={isOpen}
      popupTitle="Sign up"
      buttonText="Sign up"
      linkText="Sign in"
      openPopup={openPopup}
      formName="register"
      onClose={onClose}
    />
  );
};

export default Register;
