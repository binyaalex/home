import React from "react";
import { Link } from "react-router-dom";
import Footer from "../repeats/footer/Footer";
import Head from "../repeats/head/Head";
import "./Home.css";
import filterIcon from "../../assets/images/icons/Filter.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import CategorySquareList from "./categorySquare/CategorySquareList";
import ServiceSqaureList from "./serviceSqaure/ServiceSqaureList";
import PaidServiceSqaureList from "./paidServiceSqaure/PaidServiceSqaureList";
import addBtn from "../../assets/images/icons/addBtn.jpg";
import BlogSqaureList from "./blogSquare/BlogSquareList";
import SpecialistsList from "../repeats/specialistsList/SpecialistsList";
import Search from "../repeats/search/Search";

const Home = () => {
  return (
    <>
      <div className="PageDad">
        <div className="page">
          <Head text="בית" />
          <main className="homePage rtl">
            <Search />

            <section className="categoryArea">
              {/* Category Swiper */}
              <CategorySquareList />
              {/* Category Swiper */}
            </section>

            <section className="servicesArea">
              {/* Service */}
              <ServiceSqaureList />
              {/* Service */}
            </section>

            <section className="paidServicesArea">
              {/* Paid Service */}
              <PaidServiceSqaureList />
              {/* Paid Service */}
            </section>

            <Link to='/specialists' className="orderServiceArea">
              <div className="orderServiceBtnDiv">
                <div className="btnHeading">
                  <div className="textArea">
                    <p>הזמן שירות</p>
                  </div>
                  <img className="addBtnImg" src={addBtn} alt="add-btn" />
                </div>
              </div>
            </Link>

            <section className="blogArea">
              {/* Blog Swiper */}
              <BlogSqaureList />
              {/* Blog Swiper */}
            </section>

            <section className="specialistsArea">
              {/* Specialists Swiper */}
              <SpecialistsList />
              {/* Specialists Swiper */}
            </section>
          </main>
          <Footer page='home' />
        </div>
      </div>
    </>
  );
};

export default Home;
