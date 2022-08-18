import "./FormSubmit.css";
import checkMark from "../../images/icon-complete.svg";
import Button from "../Button/Button";

const FormSubmit = ({ setFormSubmitted }) => {
  return (
    <div className="completed-form">
      <img className="check-mark-img" src={checkMark} alt="check mark" />
      <div className="completed-form-prompt">
        <h2>Thank You!</h2>
        <p>We've added your card details</p>
      </div>
      <Button setFormSubmitted={setFormSubmitted} text="Continue" />
    </div>
  );
};

export default FormSubmit;
