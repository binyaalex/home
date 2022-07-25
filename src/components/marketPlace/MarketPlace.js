import React from "react";
import { Link } from "react-router-dom";
import Head from "../repeats/head/Head";
import Footer from "../repeats/footer/Footer";
import "./MarketPlace.css";
import filterIcon from "../../assets/images/icons/Filter.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import CollectiveMeetingSqaureList from "./collectiveMeetingSqaure/CollectiveMeetingSqaureList";
import ProductsSquareList from "./productsSquare/ProductsSquareList";
import BestDealsSquareList from "./bestDealsSquare/BestDealsSquareList";
import TabBtn from "./tabBtnMenu/TabBtn";

const MarketPlace = () => {
  const tabsBtnsArr = [
    {
      text: "הכל",
    },
    {
      text: "נקיון",
    },
    {
      text: "חשמל",
    },
    {
      text: "שיפוצים",
    },
    {
      text: "אינסטלציה",
    },
  ];

  const active = (e) => {
    const choosen = e.target.parentElement;
    const options = document.querySelectorAll(".tabsMenuLi");
    for (let i = 0; i < options.length; i++) {
      options[i].classList.remove("active");
    }
    choosen.classList.add("active");
  };

  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="מרכז מסחרי" />
          <main className="marketPlacePage rtl">
            <section className="searchSec">
              <div className="searchArea">
                <Link to={"#"} className="filterIcon">
                  <img src={filterIcon} alt="filter" />
                </Link>
                <Link to={"#"} className="locationIcon">
                  <LocationOnIcon />
                </Link>
                <div className="searchForm">
                  <SearchIcon className="SearchImg" />
                  <input
                    type="search"
                    name="search"
                    id="search"
                    className="inputSearch"
                    placeholder="חיפוש"
                  />
                </div>
              </div>
            </section>

            <section className="collectiveMeetingArea">
              {/* Collective Meeting Swiper */}
              <CollectiveMeetingSqaureList />
              {/* Collective Meeting Swiper */}
            </section>

            <section className="service_list_sec">
              <div className="tabs">
                <ul id="tabs-nav" className="tabsMenu list-unstyled">
                  {tabsBtnsArr.map((el, i) => {
                    return (
                      <TabBtn active={active} text={el.text} key={i} i={i} />
                    );
                  })}
                </ul>
                {/* <!-- END tabs-nav --> */}
                <div id="tabs-content">
                  <div id="tab1" className="tab-content">
                    <ProductsSquareList />
                  </div>
                </div>
                {/* <!-- END tabs-content --> */}
              </div>
            </section>

            <section className="service_list_sec best_deals_sec">
              <h3>שירותים פופלרים</h3>
              <div className="tabs">
                <div id="tabs-content">
                  <div id="tab1" className="tab-content">
                    <BestDealsSquareList />
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MarketPlace;
