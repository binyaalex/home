import "./OpenRound.css";
import { Link } from "react-router-dom";
import star from "../../../assets/images/icons/star-icon-green.png";

const OpenRound = (props) => {
  return (
    <div className="openRound">
      <div className="imgAndText">
        <img
          className="openRoundImg"
          src={props.profileImage ? props.profileImage : "/images/doctors/doctor1.jpg"}
        />
        <div className="openRoundText">
          <h1 className="openRoundTextH">{props.firstName ? props.firstName : "חנה לוי"}</h1>
          <div className="openRoundTextP">
            {props.position ? props.position : "גינקולוג"}
          </div>
          <div className="starSection">
            <img className="starImg" src={star} alt="" />
            <p>
              {props.rating ? props.rating : "4.9"} (
              {props.review ? props.review : "1435 ביקורות"})
            </p>
          </div>
        </div>
      </div>
      <div className="doctorsbtn">
        <Link className="about" to={"/doctor"}>
          אודות
        </Link>
        <Link className="appointment" to={"/appointment"}>
          פגישה
        </Link>
      </div>
    </div>
  );
};

export default OpenRound;
