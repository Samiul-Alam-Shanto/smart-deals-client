import React, { use } from "react";
import { Link, NavLink } from "react-router";
import AuthContext from "../Authentication/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Logout Successful");
      })
      .catch((error) => console.log(error));
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/all-products">All Products</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">SmartDeals</a>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt={user.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-linear-to-b from-[#1a2419] to-[#151a14] mt-1 z-1 p-2 shadow  rounded-b-xl w-52 text-white "
            >
              <li>
                <Link className="justify-between hover:bg-[#7fb069]">
                  {user.displayName}
                </Link>
              </li>
              <li>
                <button onClick={handleLogOut} className="hover:bg-[#7fb069]">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            {" "}
            <Link to="/login" className="btn btn-outline border-purple-500">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
