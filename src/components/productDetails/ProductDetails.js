import React from "react";

import { Link } from "react-router-dom";
import "./ProductDetails.css";

import bar from "../../assets/images/productDetails/22.jpg";
import Head from "./head/Head";
import ProductDetailsSquareList from "./ProductDetailsSquare/ProductDetailsSquareList";

const ProductDetails = () => {
  return (
    <div className="PageDad">
      <div className="productdetail_pages rtl">
        <section className="productdetail_image_sec">
          <Head text="תחזוקה לבית - החברה המובילה בתחום" />
          <ProductDetailsSquareList />
        </section>

        <div className="productdetail_image_text_div">
          <p className="productdetail_p1">
            נקיון יסודי של הדירה
          </p>
          <h3 className="productdetail_p2">85$</h3>
        </div>

        <div className="productdetail_about_div">
          <h3 className="productdetail_about_div_h1">על השירות</h3>
          <p>
          גם אלו מכם שגרים בדירה זקוקים לעזרה מדי פעם. לא משנה מה מצב חייך, מגיע לך מנוחה.
          </p>{" "}
          {/* <br /> */}
          <p>
          הדבר האחרון שתרצו לעשות הוא לחזור הביתה מיום ארוך ולהתחיל לנקות.
          </p>{" "}
          {/* <br /> */}
          <p>
          שירותי ניקיון הדירות שלנו הם הפתרון המושלם.
          </p>{" "}
          <p>
          הנקיון כולל:
          </p>
          <p>
          - ניקוי רצפות
          </p>
          <p>
          - ניקוי רטוב
          </p>
          <p>
          - ציוד ניקוי
          </p>
          <p>
          - שטיפת כלים
          </p>
          <p>
          - הוצאת זבל
          </p>
        </div>

        <div className="productdetail_card">
          <div className="productdetail_card_div">
            <p className="productdetail_card_text">8.0</p>
            <p className="productdetail_card_subtext">מתוך 10</p>
          </div>
        </div>

        <div className="productdetail_rating">
          <h5>ביקורות</h5>
          <div className="productdetail_star_list">
            <img className="ratingimg" src={bar} alt="bar" />

            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>

            <br />
            <img className="ratingimg" src={bar} alt="bar" />

            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>

            <br />
            <img className="ratingimg" src={bar} alt="bar" />

            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>

            <br />
            <img className="ratingimg" src={bar} alt="bar" />

            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>

            <br />
            <img className="ratingimg" src={bar} alt="bar" />

            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>

            <br />
            <p className="productdetail_rating_p">248 ביקורות</p>
          </div>
        </div>

        <div className="box_btn">
          <div className="container">
            <div className="btn_area">
              <Link to={"/bills"} className="buy_now_btn add_to_card_btn">
                הוסף לעגלה
              </Link>
              <Link to={"/paynow"} className="buy_now_btn">
                שלם עכשיו
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
