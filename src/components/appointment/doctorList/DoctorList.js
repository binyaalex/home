import React from "react";
// import arrow from "../../../assets/images/icons/double_arrow_down.png";
import { Link } from "react-router-dom";
import "./DoctorList.css";
import DoctorListSqaure from "./DoctorListSquare/DoctorListSqaure";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const DoctorList = () => {
  return (
    <div className="doctors_sec">
      <div className="container">
        <div className="doctors_area">
          <div className="doctor_heading align-center justify-between">
            <Link to={"#"} className="downArrow">
              <KeyboardDoubleArrowDownIcon />
              View all
            </Link>
            <h3>Our Specialists</h3>
          </div>
          <div className="row doctor_box_area">
            <DoctorListSqaure />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
