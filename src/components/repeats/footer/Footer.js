import React, { useEffect, useState } from "react";

// import { Link } from "react-router-dom";
import GrayIcon from "./GrayIcon";
import "./Footer.css";

// import { useTranslation } from "react-i18next";


//This is for chatbot
// import ChatBot from "../../chat/ChatBot";

const containerArr = [
  {
    img: "/images/footer/tag.png",
    link: "",
  },
  {
    img: "/images/footer/bell.png",
    link: "",
  },
  {
    img: "/images/footer/user.png",
    link: "",
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
            <img className="sos" src="/images/footer/home.png" />
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
        <div class="mainChat">
          <img class="chat" src="/images/footer/chat.png"/>
        </div>
{/* 
        <ChatBot>

        </ChatBot> */}
      </footer>
    </div>
  );
}

export default Footer

