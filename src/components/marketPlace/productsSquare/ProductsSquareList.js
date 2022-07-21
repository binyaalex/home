import React from "react";
import ProductsSquare from "./ProductsSquare";

const ProductsSquareList = () => {
  const ProductsListArr = [
    {
      img: "/images/marketPlace/product1.jpg",
      title: "Express cleaning of the apartment",
      price: "85$",
      link: "#",
      productKey: 1,
    },
    {
      img: "/images/marketPlace/product2.jpg",
      title: "General cleaning of the apartment",
      price: "100$",
      link: "#",
      productKey: 2,
    },
    {
      img: "/images/marketPlace/product3.jpg",
      title: "House cleaning after life with pets",
      price: "120$",
      link: "#",
      productKey: 3,
    },
    {
      img: "/images/marketPlace/product4.jpg",
      title: "Troubleshooting Wiring",
      price: "150$",
      link: "#",
      productKey: 4,
    },
  ];

  return (
    <div className="list_box_area d-flex justify-content-between flex-row-reverse row gx-4">
      {ProductsListArr.map((el, i) => {
        return (
          <ProductsSquare
            key={i}
            img={el.img}
            title={el.title}
            price={el.price}
            link={el.link}
            productKey={el.productKey}
          />
        );
      })}
    </div>
  );
};

export default ProductsSquareList;
