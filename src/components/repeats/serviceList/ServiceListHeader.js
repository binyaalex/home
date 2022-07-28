import "./ServiceListHeader.css";
import { Link } from "react-router-dom";

import doubleArrow from "../../../assets/images/icons/green/double_arrow_right.png";

const ServiceListHeader = ({ text, text2, link }) => {
  return (
    <div
      className="service_heading d-flex align-center justify-between"
      id="serviceListHeader"
    >
      <Link to={link}>
        <img
          className="departmensHeaderImg"
          src={doubleArrow}
        />
        לכל השירותים
      </Link>
      <h3>{text}</h3>
    </div>
  );
};

export default ServiceListHeader;
