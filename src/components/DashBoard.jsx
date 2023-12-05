import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBook,
  FaFirstOrderAlt,
  FaHome,
  FaProductHunt,
  FaResolving,
  FaShoppingCart,
  FaUser,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart();

  // const isAdmin = true;
  const [isAdmin] = useAdmin()

  return (
    <div className="drawer lg:drawer-open ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full  text-base-content bg-[#D1A054]">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUtensils></FaUtensils>Add an Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageProducts">
                  <FaBook></FaBook>Manage Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUser></FaUser>All Users
                </NavLink>
              </li>
              
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome>User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservations">
                  <FaResolving></FaResolving>Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet></FaWallet>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaShoppingCart></FaShoppingCart>My Cart{" "}
                  <span className="badge badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}
          {/* Sidebar content here */}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/hub">
              <FaProductHunt></FaProductHunt>Our Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/hp">
              <FaFirstOrderAlt></FaFirstOrderAlt>Order Laptop
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
