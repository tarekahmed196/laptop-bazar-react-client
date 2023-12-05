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
import DashBoard from "../components/DashBoard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageProducts from "../pages/Dashboard/ManageProducts/ManageProducts";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";

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
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'allusers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: 'manageProducts',
        element: <AdminRoute><ManageProducts></ManageProducts></AdminRoute>
      }
    ]
  }
]);
