import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useProducts from "../../hooks/useProducts";

const Explore = () => {
  const [products] = useProducts();
  return (
    <div className="md:grid grid-cols-3 gap-4 ">
      <Helmet>
        <title>Laptop Bazar | Explore</title>
      </Helmet>
      {products.map((product) => (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-16">
          <a href="#">
            <img className="rounded-t-lg" src={product.image} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {product.description}
            </p>
            <div class="flex items-center justify-between mb-0 ">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;
