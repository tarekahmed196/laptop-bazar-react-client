import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import BestItems from "./BestItems";
import useProducts from "../../../hooks/useProducts";
import LaptopCard from "../../../components/LaptopCard/LaptopCard";

const Products = () => {
  const [products] = useProducts();

  const topSells = products.filter(
    (product) => product.category === "top-sell"
  );

  return (
    <section className="mb-12">
      <SectionTitle
        heading={"Top Selling Laptops"}
        subHeading={"From Our Products"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-4">
        {topSells.slice(0, 6).map((item) => (
          <LaptopCard key={item._id} item={item}></LaptopCard>
        ))}
      </div>
    </section>
  );
};

export default Products;
