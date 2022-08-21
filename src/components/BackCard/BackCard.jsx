import "./BackCard.css";
import backCard from "../../images/bg-card-back.png";

const BackCard = ({ inputField }) => {
  return (
    <div className="back-card--container">
      <img className="back-card--img" src={backCard} alt="credit card back" />
      <p className="cvc">
        {inputField.cvc.length > 0 ? inputField.cvc : "000"}
      </p>
    </div>
  );
};

export default BackCard;
