import React from "react";

import { Link } from "react-router-dom";
import doubleArrow from "../../assets/images/icons/green/double_arrow_right.png";

import Head from '../repeats/head/Head';
import ServiceList from "../repeats/serviceList/ServiceList";

import "./AboutSpesialist.css";
//components
import Review from "../repeats/review/Review";
//images
import star from "../../assets/images/icons/star-icon-green.png";
import review1 from "../../assets/images/review/review1.jpg";
import review2 from "../../assets/images/review/review2.jpg";
import review3 from "../../assets/images/review/review3.jpg";

const AboutSpesialist = () => {

  const reviewList = [  
    {
      writerName: 'דני קורן',
      date: '11 מאי 2022',
      rating: '5.0',
      text: 'מנקה מעולה! ניקתה את כל הדירה אחרי אירוח.',
      img: review1,
    },
    {
      writerName: 'טל קרמר',
      date: '7 מאי 2022',
      rating: '4.0',
      text: '',
      img: review2,
    },
    {
      writerName: 'יונתן ספקטור',
      date: '1 מאי 2022',
      rating: '5.0',
      text: '',
      img: review3,
    },
  ]

  return (
    <>
      <div className="PageDad">
        <div className="doctor_pages rtl">
          <Head text='יעל כהן' />
          <div className="doctor_banner">
            <div className="banner_content">
              <h1>יעל כהן</h1>
              <h6>מנקה</h6>
              <div className="doctor_heading align-center justify-between all_review_section">
                <small>
                  <img src={star} alt="" />
                  4.6 (1435 ביקורות){" "}
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
                {
                  reviewList.map((el, i) => {
                    return (
                      <Review 
                        writerName={el.writerName}
                        date={el.date}
                        rating={el.rating}
                        text={el.text}
                        img={el.img}
                        key={i}
                      /> 
                    )
                  })
                }
                  {/* <div className="service_box rating_box">
                    <div className="box_con review_box">
                      <div className="box_heading d-flex align-center justify-between row-r">
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
                      <div className="box_heading d-flex align-center justify-between row-r">
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
                  </div> */}
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
