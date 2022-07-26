import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GrayIcon from "./GrayIcon";
import "./Footer.css";
import { color } from "@mui/system";

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

const Footer = ({page}) => {
  // export default function Footer() {
  // const { t } = useTranslation();
  let color = 'var(--lightgreen)'
  if (page === 'home') {
    color = 'var(--green)'
  }

  return (
    <div>
      <footer className="footer">
        <div className="sosAndGray">
          <Link to='/' className="homeIconLink" style={{background: color}} >
            {/* <img className="sos" src="/images/footer/home.png" /> */}
            <HomeOutlinedIcon />
          </Link>
          <div className="grayIcons">
            {containerArr.map((el, i) => {
              return (
                <Link to={el.link} className="grayIconLink" key={i}>
                  <GrayIcon img={el.img} />
                </Link>
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

