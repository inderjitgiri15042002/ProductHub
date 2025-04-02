import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <h1>PRODUCT STORE</h1>
        <FaShoppingCart className="cart-icon" />
      </Link>
      <div className="right">
        <Link to="/create">
          <button className="add">
            <IoMdAdd />
          </button>
        </Link>
        <button className="mode" onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? <MdLightMode /> : <MdDarkMode />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
