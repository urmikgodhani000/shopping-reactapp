import React from "react";
import { CartState } from "../context/Conetext";
import Filter from "./Filter";
import SingaleProd from "./SingaleProd";
import "../com/style.css";

export const Home = () => {
  const {
    state: { products },
    productState: { byStock, byFastdelivery, searchQ, sort },
  } = CartState();
  console.log({ byStock, byFastdelivery, searchQ, sort });

  const trsnafromProduct = () => {
    let sortedProducts = products;

    if (sort) {
      if (sort === "lowToHigh") {
        sortedProducts = sortedProducts.sort((a, b) => a.price - b.price);
      }

      if (sort === "HighToLow") {
        sortedProducts = sortedProducts.sort((a, b) => b.price - a.price);
      }
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastdelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (searchQ) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQ)
      );
    }

    return sortedProducts;
  };
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {trsnafromProduct().map((prod) => {
          return <SingaleProd prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};
