import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import imgCover from "../../images/cover.jpg"
import imgDell from "../../images/dell.jpg"
import imgAsus from "../../images/asus.jpg"
import imgSamsung from "../../images/samsung.jpg"
import LaptopCategory from "../LaptopCategory/LaptopCategory";
import useProducts from "../../hooks/useProducts";

const LaptopHub = () => {
    const [products] = useProducts();
    const hp = products.filter(product=> product.category === 'hp');
    const dell = products.filter(product=> product.category === 'dell');
    const asus = products.filter(product=> product.category === 'asus');
    const samsung = products.filter(product=> product.category === 'samsung');
    const mac = products.filter(product=> product.category === 'mac');
  return (
    <div>
      <Helmet>
        <title>Laptop Bazar | Laptop Hub</title>
      </Helmet>
      
      <LaptopCategory items={hp} img={imgCover} title={'hp'} ></LaptopCategory>
      <LaptopCategory items={dell} img={imgDell} title={'dell'} ></LaptopCategory>
      <LaptopCategory items={asus} img={imgAsus} title={'asus'} ></LaptopCategory>
      <LaptopCategory items={samsung} img={imgSamsung} title={'samsung'} ></LaptopCategory>
      <LaptopCategory items={mac} img={imgSamsung} title={'mac'} ></LaptopCategory>
    </div>
  );
};

export default LaptopHub;
