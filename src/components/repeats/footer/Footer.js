import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
import GrayIcon from "./GrayIcon";
import "./Footer.css";

// import { useTranslation } from "react-i18next";


//This is for chatbot
// import ChatBot from "../../chat/ChatBot";

const containerArr = [
  {
    img: "/images/footer/home.png",
    link: "/",
  },
  {
    img: "/images/footer/club2.png",
    link: "/club",
  },
  {
    img: "/images/footer/list.png",
    link: "/mybaby",
  },
  {
    img: "/images/footer/book.png",
    link: "/appointment",
  },
  {
    img: "/images/footer/shopping_cart.png",
    link: "/marketplace",
  },
];

const Footer = () => {
  // export default function Footer() {
  // const { t } = useTranslation();

  return (
    <div>
      <footer className="footer">
        <div className="sosAndGray">
          <a>
            <img className="sos" src="/images/footer/sos.png" />
          </a>
          <div className="grayIcons">
            {containerArr.map((el, i) => {
              return (
                <a className="grayIconLink" key={i}>
                  <GrayIcon img={el.img} />
                </a>
              );
            })}
          </div>
        </div>
{/* 
        <ChatBot>

        </ChatBot> */}
      </footer>
    </div>
  );
}

export default Footer

