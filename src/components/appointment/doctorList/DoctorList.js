import React from "react";

import { Link } from "react-router-dom";

import "./DoctorList.css";

import DoctorListSqaure from "./doctorListSquare/DoctorListSquare";

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const DoctorList = () => {
  return (
    <div className="doctors_sec">
      <div className="container">
        <div className="doctors_area">
          <div className="doctor_heading align-center justify-between">
            <Link to={"/doctors"} className="align-center">
              לכל  הספרים
              <DoubleArrowIcon />
            </Link>
            <h3>: הספרים שלנו</h3>
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
