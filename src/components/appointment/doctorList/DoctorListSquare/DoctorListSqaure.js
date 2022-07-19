import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import StarIcon from '@mui/icons-material/Star';

const DoctorListSqaure = () => {
  const DoctorListArr = [
    {
      image: "/images/specialists/specialists1.jpg",
      title: "Ed Tomas",
      position: "Cleaner",
      rating: "4.6",
      link: "#",
    },
    {
      image: "/images/specialists/specialists2.jpg",
      title: "Jack Smith",
      position: "Repairer",
      rating: "4.6",
      link: "#",
    },
    {
      image: "/images/specialists/specialists3.jpg",
      title: "Kate Ostin",
      position: "Cleaner",
      rating: "4.6",
      link: "#",
    },
    {
      image: "/images/specialists/specialists4.jpg",
      title: "Lola Brown",
      position: "Cleaner",
      rating: "4.6",
      link: "#",
    },
    {
      image: "/images/specialists/specialists5.jpg",
      title: "Colin Leonard",
      position: "Electrician",
      rating: "4.6",
      link: "#",
    },
  ];

  const slides =
    DoctorListArr.length > 0
      ? DoctorListArr.map((el, i) => (
          <div className="" key={i}>
            <Link to={el.link}>
              <div className="doctor_box">
                <div className="box_img">
                  <img src={el.image} alt="doctor" className="doctor_box_img" />
                </div>
                <h6>{el.title}</h6>
                <p>{el.position}</p>
                <div className="start_con">
                  <span>{el.rating}</span>
                  <StarIcon />
                </div>
              </div>
            </Link>
          </div>
        ))
      : "";

  return (
    <>
      <Swiper spaceBetween={0} slidesPerView={4}>
        {slides.length > 0
          ? slides.map((slideContent, index) => (
              <SwiperSlide key={index} virtualIndex={index}>
                {slideContent}
              </SwiperSlide>
            ))
          : ""}
      </Swiper>
    </>
  );
};

export default DoctorListSqaure;
