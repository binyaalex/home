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
          <Head text="Evenflo Pivot Travel System" />
          <ProductDetailsSquareList />
        </section>

        <div className="productdetail_image_text_div">
          <p className="productdetail_p1">
            עגלת התינוק החדישה ביותר <br />
            גם מושב בטיחות וגם עגלה במוצר אחד
          </p>
          <h3 className="productdetail_p2">315$</h3>
        </div>

        <div className="productdetail_about_div">
          <h3 className="productdetail_about_div_h1">על המוצר</h3>
          <p>
            מערכת נסיעות גמישה לתינוקות - המערכת היא שילוב של עגלה ומושב לרכב עם
            מקסימום בטיחות מושב בטיחות לתינוק הפונה לאחור ובסיס אזור בטוח הכולל
            מוט נגד ריבאונד מושקע באביזרים ידידותיים להורים ולילדים.
          </p>{" "}
          <br />
          <p>
            רב תכליתי וקל משקל: שילוב מושב ועגלה לרכב זה כולל מסגרת מודולרית עם
            6 מצבים. המצב ההפיך מאפשר לתינוקך לפנות פנימה או החוצה, בעוד שמכסות
            העגלה מתחמקים ממסגרת מושב תינוק למושב עגלה או מצב עגלה בקלות.
          </p>{" "}
          <br />
          <p>
            העברת מושב בטיחות לתינוקות קלה: שילוב מושב ועגלה זה תוכנן עם בסיס
            להישאר ברכב המאפשר חיבור מהיר ובטוח של מושב בטיחות לתינוק מעגלה לרכב
            ולהיפך.
          </p>{" "}
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
                הוסיפי לעגלה
              </Link>
              <Link to={"/paynow"} className="buy_now_btn">
                שלמי עכשיו
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
