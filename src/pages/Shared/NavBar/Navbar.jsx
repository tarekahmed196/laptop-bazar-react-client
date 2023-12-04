import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const NavBar = () => {
  const {user, logOut} = useContext(AuthContext)

  const handleLogOut =()=>{
      logOut()
      .then(()=>{})
      .catch(error => console.log(error));
  }

    const navOptions = <>
          <li>
            <a><Link to="/">Home</Link> </a>
          </li>
          <li>
            <a><Link to="/explore">Explore</Link> </a>
          </li>
          <li>
            <a><Link to="/hub">Laptop Hub</Link> </a>
          </li>
          <li>
            <a><Link to="/order/hp">Order Laptop</Link> </a>
          </li>
          <li>
            <a><Link to="/secret">Secret</Link> </a>
          </li>
          
          {
            user ?
            <>
            <span className="text-white" > {user?.displayName} </span>
            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></>: <><li>
            <a><Link to="/login">Login</Link> </a>
          </li></>
          }
          
    </>
  return (
    <div className="navbar max-w-screen-xl fixed z-10 bg-black text-white opacity-50"> 
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <Link to="/"><img className="w-1/2" src="/logo.png" alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu bg-black menu-horizontal px-1">
          {navOptions}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Search</a>
      </div>
    </div>
  );
};

export default NavBar;
