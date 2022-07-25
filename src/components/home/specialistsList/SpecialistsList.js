import React from "react";
import "./SpecialistsList.css";
import SpecialistsListSqaure from "./specialistsListSquare/SpecialistsListSqaure";

const SpecialistsList = () => {
  return (
    <div className="specialistsListSec">
        <div className="specialistsArea">
          <div className="specialistsHeading">
            <h3>המומחים שלנו</h3>
          </div>
          <div className="row specialistsBoxArea">
            <SpecialistsListSqaure />
          </div>
      </div>
    </div>
  );
};

export default SpecialistsList;
