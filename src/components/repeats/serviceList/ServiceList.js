import React from "react";
import ServiceItem from './ServiceItem'
import ServiceListHeader from './ServiceListHeader'
// import doublearrow from "../../../assets/images/double-arrow.svg";
import Service1 from "../../../assets/images/servicesList/consultation.jpg";
// import Service2 from "../../../assets/images/serviceList/management.jpg";

import "./ServiceList.css";
import { Link } from "react-router-dom";

const ServiceList = () => {

  const serviceListArr = [
    {
      header: 'יעוץ אונליין',
      price: '50$',
      par: 'התקשרי לרופאה שלך בכל זמן',
      img: Service1,
    },
    {
      header: 'ניהול הריון',
      price: '100$',
      par: `פגישות רופא, בדיקות, אולטרסאונד וכדו'`,
      img: Service1,
    },
  ]

  return (
    <div className="service_list_sec">
      <div className="container">
        <div className="doctors_area services_area">
          <ServiceListHeader text='השירותים שלנו:' link='#' />
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