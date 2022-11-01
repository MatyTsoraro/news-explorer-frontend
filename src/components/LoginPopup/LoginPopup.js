import PopupWithForm from "../PopupWithForm/PopupWithForm";

const Login = ({ isOpen, openPopup, onClose }) => {
  return (
    <PopupWithForm
      isOpen={isOpen}
      popupTitle="Sign in"
      buttonText="Sign in"
      linkText="Sign up"
      openPopup={openPopup}
      formName="login"
      onClose={onClose}
    />
  );
};

export default Login;
