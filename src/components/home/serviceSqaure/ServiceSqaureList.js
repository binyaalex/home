import React from "react";
import ServiceSqaure from "./ServiceSqaure";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link } from "react-router-dom";

const ServiceSqaureList = () => {
  const serviceListArr = [
    {
      image: "/images/home/service1.jpg",
      title: "Entrance cleaning",
      timing: "Monday, Thursday 08:00 am",
      link: "#",
    },
    {
      image: "/images/home/service2.jpg",
      title: "Elevator maintenance",
      timing: "First thursday of the month",
      link: "#",
    },
    {
      image: "/images/home/service3.jpg",
      title: "Garbage removal",
      timing: "Daily at 18:00 pm",
      link: "#",
    },
    {
      image: "/images/home/service4.jpg",
      title: "Complex security",
      timing: "24/7",
      link: "#",
    },
  ];

  return (
    <>
      <div className="servicesHeading">
        <Link to={"#"} className="downArrow">
          <KeyboardDoubleArrowDownIcon />
          View all
        </Link>
        <h3>My Home Services</h3>
      </div>
      <div className="serviceSqaureList">
        {serviceListArr.map((el, i) => {
          return (
            <ServiceSqaure
              link={el.link}
              image={el.image}
              title={el.title}
              timing={el.timing}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default ServiceSqaureList;
