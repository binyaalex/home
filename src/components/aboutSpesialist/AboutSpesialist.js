import React from "react";

import review1 from "../../assets/images/reviewImg.png";
// import review2 from "../../../assets/images/review2.png";

import { Link } from "react-router-dom";
import doubleArrow from "../../assets/images/icons/green/double_arrow_right.png";

import Head from '../repeats/head/Head';
import ServiceList from "../repeats/serviceList/ServiceList";

import "./AboutSpesialist.css";

import star from "../../assets/images/icons/star-icon-green.png";

const AboutSpesialist = () => {
  return (
    <>
      <div className="PageDad">
        <div className="doctor_pages rtl">
          <Head text='יעל כהן' />
          <div className="doctor_banner">
            <div className="banner_content">
              <h1>ד"ר חנה לוי</h1>
              <h6>גניקולוגית</h6>
              <div className="doctor_heading align-center justify-between all_review_section">
                <small>
                  <img src={star} alt="" />
                  4.9 (1000 ביקורות){" "}
                </small>
              </div>
            </div>
          </div>
          
          <ServiceList />

          <div className="review_rating_sec">
            <div className="container">
              <div className="doctors_area">
                <div className="review_heading d-flex align-center justify-between">
                  <Link to="#" className="d-flex align-center">
                    <img src={doubleArrow} alt="double-arrow" />
                    לכל הביקורות{" "}
                  </Link>
                  <h3>ביקורות וציונים</h3>
                </div>
                <div className="service_box_area">
                  <div className="service_box rating_box">
                    <div className="box_con review_box">
                      <div className="box_heading d-flex align-center justify-between row-reverse">
                        <span>11 Feb 2022</span>
                        <h4>גיל קורסי</h4>
                      </div>
                      <span className="star">
                        5.0 <img src={star} alt="" />
                      </span>
                      <div className="price d-flex align-center justify-between">
                        <p>
                          בזכות חנה יש לנו תינוק בריא! היא ניהלה את כל ההריון
                          ועזרה לנו להתאושש לאחר מכן
                        </p>
                      </div>
                    </div>
                    <div className="box_round_img">
                      <img src={review1} alt="Online" />
                    </div>
                  </div>
                  <div className="service_box rating_box">
                    <div className="box_con review_box">
                      <div className="box_heading d-flex align-center justify-between row-reverse">
                        <span>28 Jan 2022</span>
                        <h4>סיון ששון</h4>
                      </div>
                      <span className="star">
                        5.0 <img src={star} alt="" />
                      </span>
                      <div className="price d-flex align-center justify-between">
                        <p>
                          בזכות העזרה של ד"ר חנה לוי הצלחתי להיכנס להריון, תודה
                          רבה חנה
                        </p>
                      </div>
                    </div>
                    <div className="box_round_img">
                      <img src={review1} alt="Online" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSpesialist;
