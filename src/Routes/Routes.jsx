import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../pages/Home/Home/Home";
import Explore from "../pages/Explore/Explore";
import LaptopHub from "../pages/LaptopHub/LaptopHub";
import Order from "../pages/Order/Order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: 'explore',
        element: <Explore></Explore>
      },
      {
        path: 'hub',
        element: <LaptopHub></LaptopHub>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
    ],
  },
]);
