import React from "react";
import ServiceItem from './ServiceItem'
import ServiceListHeader from './ServiceListHeader'
// import doublearrow from "../../../assets/images/double-arrow.svg";
import service1 from "../../../assets/images/servicesList/service1.jpg";
import service2 from "../../../assets/images/servicesList/service2.jpg";
import service3 from "../../../assets/images/servicesList/service3.jpg";
import service4 from "../../../assets/images/servicesList/service4.jpg";
import service5 from "../../../assets/images/servicesList/service5.jpg";
// import Service2 from "../../../assets/images/serviceList/management.jpg";

import "./ServiceList.css";
import { Link } from "react-router-dom";

const ServiceList = () => {

  const serviceListArr = [
    {
      header: 'נקיון כניסה',
      price: 'חינם',
      par: 'כלול במחיר של תחזוקת הבית',
      img: service1,
    },
    {
      header: 'נקיון יסודי',
      price: '75$',
      par: `1:30`,
      img: service2,
    },
    {
      header: 'נקיון כללי של הדירה',
      price: '100$',
      par: `3:30`,
      img: service3,
    },
    {
      header: 'ניקוי מקצועי של כל מכשירי החשמל הביתיים',
      price: '50$',
      par: `3:15`,
      img: service4,
    },
    {
      header: 'שטיפת חלונות',
      price: '80$',
      par: `1:30`,
      img: service5,
    },
  ]

  return (
    <div className="service_list_sec">
      <div className="container">
        <div className="doctors_area services_area">
          <ServiceListHeader text='השירותים של יעל:' link='#' />
          <div className="service_box_area">
            {
              serviceListArr.map((el, i) => {
                return (
                  <ServiceItem 
                    header={el.header}
                    price={el.price}
                    par={el.par}
                    img={el.img}
                    key={i}
                  /> 
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;