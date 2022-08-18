import frontCard from "../../images/bg-card-front.png";
import "./FrontCard.css";
import cardLogo from "../../images/card-logo.svg";

const FrontCard = () => {
  return (
    <div className="front-card--container" alt="front credit card image">
      <img className="front-card--img" src={frontCard} alt="" />
      <div className="front-card--info">
        <img className="card-logo" src={cardLogo} alt="card logo" />
        <p className="card-number">0000 0000 0000 0000</p>
        <div className="user-info">
          <p>Jane Appleseed</p>
          <p>00/00</p>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
