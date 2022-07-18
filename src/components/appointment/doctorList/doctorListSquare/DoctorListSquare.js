import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import StarIcon from '@mui/icons-material/Star';

const DoctorListSqaure = () => {
  const DoctorListArr = [
    {
      image: "/images/hospital/sapar1.jpg",
      title: "חנן לוי",
      // sub_title: "גניקולוגית",
      rating: "4.9",
      link: "/doctor",
    },
    {
      image: "/images/hospital/sapar2.jpg",
      title: "איתי מור",
      // sub_title: "מילדת",
      rating: "4.8",
      link: "/doctor",
    },
    {
      image: "/images/hospital/sapar3.jpg",
      title: "יונתן שי",
      // sub_title: "דולה",
      rating: "4.7",
      link: "/doctor",
    },
    {
      image: "/images/hospital/sapar4.jpg",
      title: "רועי דן",
      // sub_title: "אחות",
      rating: "4.6",
      link: "/doctor",
    },
    {
      image: "/images/hospital/sapar1.jpg",
      title: "איתי מור",
      // sub_title: "מילדת",
      rating: "4.8",
      link: "/doctor",
    },
  ];

  const slides = DoctorListArr.map((el, index) => (
    <div className="" key={index}>
      <Link to={"" + el.link + ""}>
        <div className="doctor_box">
          <div className="box_img">
            <img src={el.image} alt="doctor" className="doctor_box_img" />
          </div>
          <h6>{el.title}</h6>
          <p>{el.sub_title}</p>
          <div className="start_con">
            <span>{el.rating}</span>
            <StarIcon />
          </div>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={4}>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DoctorListSqaure;
