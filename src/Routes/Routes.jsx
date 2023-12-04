import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Main";
import Home from "../pages/Home/Home/Home";
import Explore from "../pages/Explore/Explore";
import LaptopHub from "../pages/LaptopHub/LaptopHub";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";

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
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ],
  },
]);
