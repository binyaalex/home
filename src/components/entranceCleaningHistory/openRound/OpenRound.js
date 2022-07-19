import "./OpenRound.css";
import { Link } from "react-router-dom";

const OpenRound = (props) => {
  return (
    <div className="entranceCleaningHistoryOpenRound">
      <div className="imgAndText">
        <img className="openRoundImg" src={props.img} alt="aa" />
        <div className="openRoundText">
          <h1 className="openRoundTextH">{props.title}</h1>
          <p className="openRoundTextP">{props.desc}</p>
        </div>
      </div>
      <div className="entranceCleaningHistoryBtn">
          <Link to={props.link} className={props.class}>Review</Link>
      </div>
    </div>
  );
};

export default OpenRound;
