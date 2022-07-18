import React, { useRef, useState } from "react";
import Head from "../repeats/head/Head";
import Footer from "../repeats/footer/Footer";

import "./Doctors.css";

import OpenRound from "../repeats/opensquare/OpenRound";

import Filter from "./filter/Filter";

const Doctors = () => {
  const [showfilter, setShowfilter] = useState(false);

  const [showdrp, setShowdrp] = useState(false);

  const [showshortdrp, setShowshortdrp] = useState(false);

  const messagesEndRef = useRef();

  const messagesEndRef1 = useRef();

  const scrollToBottom = () => {
    messagesEndRef1.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const doctorsArr = [
    {
      img: "/images/doctors/doctor1.jpg",
      firstName: 'דניאל כהן',
      position: "מנקה",
      link: "/fordoctors",
    },
    {
      img: "/images/doctors/doctor2.jpg",
      firstName: 'יעל כהן',
      position: "שיפוצניקית",
      link: "/fordoctors",
    },
    {
      img: "/images/doctors/doctor3.jpg",
      firstName: 'איתי ערד',
      position: "שרברב",
      link: "/fordoctors",
    },
    {
      img: "/images/doctors/doctor4.jpg",
      firstName: 'חיה אזולאי',
      position: "מנקה",
      link: "/fordoctors",
    },
    {
      img: "/images/doctors/doctor5.jpg",
      firstName: 'אבי גינזבורג',
      position: "מנקה",
      link: "/fordoctors",
    },
    {
      img: "/images/doctors/doctor6.jpg",
      firstName: 'הלן מאיר',
      position: "מנקה",
      link: "/fordoctors",
    },
    {
      img: "/images/doctors/doctor7.jpg",
      firstName: 'מאיר ברנר',
      position: "מאבטח",
      link: "/fordoctors",
    },
    {
      img: "/images/doctors/doctor8.jpg",
      firstName: 'סיון דוידוף',
      position: "חשמלאית",
      link: "/fordoctors",
    },
  ];

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="רופאים" />
          <div className="doctorsPage">
            <div className="SearchDiv" ref={messagesEndRef}>
              <div className="Search">
                <img className="SearchImg" src="/images/doctors/search.png" />
                <input
                  placeholder="חפשי לפי שם"
                  type="search"
                  className="SearchInput"
                />
              </div>
              <img
                className="searchStar"
                onClick={() => {
                  setShowfilter(!showfilter);
                  if (showfilter) {
                    scrollToTop();
                  } else {
                    scrollToBottom();
                  }
                }}
                src="/images/doctors/filter.png"
              />
            </div>

            <Filter
              showfilter={showfilter}
              setShowfilter={setShowfilter}
              scrollToTop={scrollToTop}
              scrollToBottom={scrollToBottom}
              showdrp={showdrp}
              setShowdrp={setShowdrp}
              showshortdrp={showshortdrp}
              setShowshortdrp={setShowshortdrp}
              messagesEndRef1={messagesEndRef1}
            />

            <div className="staffSquaresDiv">
              {doctorsArr.map((el, i) => {
                return (
                  <OpenRound
                    key={i}
                    img={el.img}
                    firstName={el.firstName}
                    position={el.position}
                    link={el.link}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Doctors;