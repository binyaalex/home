import React from "react";
import { Link } from "react-router-dom";
import "./SpecialistsList.css";
import SpecialistsListSqaure from "./specialistsListSquare/SpecialistsListSqaure";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const SpecialistsList = () => {
  return (
    <div className="specialistsListSec">
        <div className="specialistsArea">
          <div className="specialistsHeading">
            <Link to={"#"} className="downArrow">
              <KeyboardDoubleArrowDownIcon />
              View all
            </Link>
            <h3>Our Specialists</h3>
          </div>
          <div className="row specialistsBoxArea">
            <SpecialistsListSqaure />
          </div>
      </div>
    </div>
  );
};

export default SpecialistsList;
