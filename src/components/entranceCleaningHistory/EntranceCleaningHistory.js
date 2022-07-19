import React from "react";
import Head from "../repeats/head/Head";
import Footer from "../repeats/footer/Footer";
import "./EntranceCleaningHistory.css";
import Banner from "./banner/Banner";
import OpenRound from "./openRound/OpenRound";
import downArrow from "../../assets/images/icons/downArrow.jpg";

const EntranceCleaningHistory = () => {

    const entranceCleaningHistoryArr = [
      {
        img: "/images/entranceCleaning/entranceCleaning1.jpg",
        title: "Monday 9 May",
        desc: "Your cleaner – Kate Ostin",
        link: "#",
        class: "reviewColorGreen"
      },
      {
        img: "/images/entranceCleaning/entranceCleaning1.jpg",
        title: "Thursday 12 May",
        desc: "Your cleaner – Lola Brown",
        link: "#",
        class: "reviewColorGreen"
      },
      {
        img: "/images/entranceCleaning/entranceCleaning1.jpg",
        title: "Monday 16 May",
        desc: "Your cleaner – Ed Tomas",
        link: "#",
        class: "reviewColorGreen"
      },
      {
        img: "/images/entranceCleaning/entranceCleaning1.jpg",
        title: "Thursday 19 May",
        desc: "Your cleaner – Kate Ostin",
        link: "#",
        class: "reviewColorWhite"
      },
      {
        img: "/images/entranceCleaning/entranceCleaning1.jpg",
        title: "Monday 23 May",
        desc: "Your cleaner – Scott Lee",
        link: "#",
        class: "reviewColorWhite"
      },
      {
        img: "/images/entranceCleaning/entranceCleaning1.jpg",
        title: "Thursday 26 May",
        desc: "Your cleaner – Lola Brown",
        link: "#",
        class: "reviewColorWhite"
      },
    ];

  return (
    <div className="PageDad">
      <div className="page">
        <Head text="Entrance Cleaning" />
        <main className="entranceCleaningHistory">
          <Banner />
          <div className="entranceCleaningHistoryPage">
            <div className="titleDiv">
                <p className="titleP">HISTORY OF ENTRANCE CLEANING</p>
                <img src={downArrow} className="arrowImg" alt="arrow" />
            </div>
            <div className="staffSquaresDiv">
              {entranceCleaningHistoryArr.length > 0
                ? entranceCleaningHistoryArr.map((el, i) => {
                    return (
                      <OpenRound
                        img={el.img}
                        title={el.title}
                        desc={el.desc}
                        link={el.link}
                        class={el.class}
                        key={i}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default EntranceCleaningHistory;
