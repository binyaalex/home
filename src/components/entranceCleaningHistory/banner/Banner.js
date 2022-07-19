import React from "react";
import banner from "../../../assets/images/entranceCleaning/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className="entranceCleaningHistoryBanner">
        <img
          src={banner}
          alt="cleaning"
          className="bannerImg"
        />
        <div className="bannerContent">
          <h1 className="w-100">Monday, Thursday 08:00 am</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;