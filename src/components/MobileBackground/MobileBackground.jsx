import "./MobileBackground.css";
import mobileBackground from "../../images/bg-main-mobile.png";
import FrontCard from "../../components/FrontCard/FrontCard";
import BackCard from "../../components/BackCard/BackCard";

const MobileBackground = ({ inputField }) => {
  return (
    <div className="mobile-container">
      <div className="card-container">
        <FrontCard inputField={inputField} />
        <BackCard inputField={inputField} />
      </div>
      <img
        className="mobile-container--background-img"
        src={mobileBackground}
        alt="mobile background"
      />
    </div>
  );
};

export default MobileBackground;
