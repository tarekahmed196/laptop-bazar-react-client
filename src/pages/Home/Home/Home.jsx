import { Rating } from "@smastrom/react-rating";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import LaptopServices from "../LaptopServices/LaptopServices";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
        <title>Laptop Bazar | Home</title>
      </Helmet>
         <Banner></Banner>
         <Category></Category>
         <Products></Products>
         <LaptopServices></LaptopServices>
         <Reviews></Reviews>
         
        </div>
    );
};

export default Home;