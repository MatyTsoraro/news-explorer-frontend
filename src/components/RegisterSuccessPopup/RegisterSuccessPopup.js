import Popup from "../Popup/Popup";

const RegisterSuccessPopup = ({ isOpen, openPopup }) => {
  return (
    <Popup
      isOpen={isOpen}
      isSuccess={true}
      popupTitle="Registration successfully completed!"
    >
      <>
        <button className="popup__link" onClick={openPopup}>
          Sign in
        </button>
      </>
    </Popup>
  );
};

export default RegisterSuccessPopup;
