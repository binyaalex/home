import React from "react";
import { Link } from "react-router-dom";
import PaidServiceSqaure from "./PaidServiceSqaure";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

const PaidServiceSqaureList = () => {
  const paidServiceArr = [
    {
      img: "/images/home/paidService1.jpg",
      title: "Cleaning",
      link: "#",
    },
    {
      img: "/images/home/paidService2.jpg",
      title: "Electric",
      link: "#",
    },
    {
      img: "/images/home/paidService3.jpg",
      title: "Repair",
      link: "#",
    },
    {
      img: "/images/home/paidService4.jpg",
      title: "Plumbing",
      link: "#",
    },
    {
      img: "/images/home/paidService5.jpg",
      title: "Laundry",
      link: "#",
    },
    {
      img: "/images/home/paidService6.jpg",
      title: "Garbage",
      link: "#",
    },
    {
      img: "/images/home/paidService7.jpg",
      title: "Moving",
      link: "#",
    },
    {
      img: "/images/home/paidService8.jpg",
      title: "Complex",
      link: "#",
    },
    {
      img: "/images/home/paidService9.jpg",
      title: "Entrance",
      link: "#",
    },
  ];

  return (
    <>
      <div className="paidServicesHeading">
        <Link to={"#"} className="downArrow">
          <KeyboardDoubleArrowDownIcon />
          View all
        </Link>
        <h3>My Home Services</h3>
      </div>
      <div className="paidServiceSqaureList">
        {paidServiceArr.map((el, i) => {
          return (
            <PaidServiceSqaure
              img={el.img}
              title={el.title}
              link={el.link}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default PaidServiceSqaureList;
