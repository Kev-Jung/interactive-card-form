import "./MobileBackground.css";
import mobileBackground from "../../images/bg-main-mobile.png";
import FrontCard from "../../components/FrontCard/FrontCard";
import BackCard from "../../components/BackCard/BackCard";

const MobileBackground = () => {
  return (
    <div className="mobile-container">
      <img
        className="mobile-container--background"
        src={mobileBackground}
        alt="mobile background"
      />
      <FrontCard />
      <BackCard />
    </div>
  );
};

export default MobileBackground;
