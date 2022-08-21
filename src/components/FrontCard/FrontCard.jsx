import frontCard from "../../images/bg-card-front.png";
import "./FrontCard.css";
import cardLogo from "../../images/card-logo.svg";

const FrontCard = ({ inputField }) => {
  return (
    <div className="front-card--container" alt="front credit card image">
      <img className="front-card--img" src={frontCard} alt="" />
      <div className="front-card--info">
        <img className="card-logo" src={cardLogo} alt="card logo" />
        <p className="card-number">
          {inputField.cardNumber.length > 0
            ? inputField.cardNumber
            : "0000 0000 0000 0000"}
        </p>
        <div className="user-info">
          <p>
            {inputField.name.length > 0 ? inputField.name : "Jane Appleseed"}
          </p>
          <p>
            {inputField.month.length > 0 ? inputField.month : "00"}/
            {inputField.year.length > 0 ? inputField.year : "00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
