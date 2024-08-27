import React, { useState } from "react";
// import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [isNavbar, setisNavbar] = useState(false);
  return (
    <>
      <nav
        className={`${
          isNavbar
            ? "flex absolute flex-col w-[70vw] py-10  bg-white h-[50vh] z-10  top-0"
            : "flex  gap-10 justify-around border sticky  top-0 h-[10vh] items-center bg-white z-10 text-[#17153B] py-10 px-10 "
        }`}
      >
        <i
          className="fa-solid fa-bars text-[#17153B] hidden menu-logo text-xl font-extrabold"
          onClick={() => setisNavbar(!isNavbar)}
        ></i>
        <h1 className="font-extrabold text-3xl ml-5 px-12 max-[985px]:ml-0">
          <i className="fa-solid fa-shop text-[#DB4444] "></i> ShopEase
        </h1>
        <div
          className={`max-[600px]:flex-col ${
            !isNavbar && "max-[600px]:hidden"
          } flex justify-between items-center flex-grow`}
        >
          {/* <i className="x-mark fa-regular fa-circle-xmark self-end mr-10 text-2xl font-semibold hidden" onClick={()=>(setisNavbar(false))}></i> */}
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              ` hover:text-[#DB4444] font-bold text-lg transition-colors  ${
                isActive ? "text-[#DB4444]" : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/Contact"}
            className={({ isActive }) =>
              `  hover:text-[#DB4444] font-bold text-lg transition-colors ${
                isActive ? "text-[#DB4444]" : ""
              }`
            }
          >
            Contact
          </NavLink>
          <NavLink
            to={"/About"}
            className={({ isActive }) =>
              ` hover:text-[#DB4444] font-bold text-lg transition-colors ${
                isActive ? "text-[#DB4444]" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/Signup"}
            className={({ isActive }) =>
              `  hover:text-[#DB4444] font-bold text-lg transition-colors ${
                isActive ? "text-[#DB4444]" : ""
              }`
            }
          >
            Signup
          </NavLink>
          <div className="border-2 rounded-md hover:border-red-400 flex justify-center bg-slate-50 gap-3 px-5 py-2 items-center hover:scale-110 transition-transform">
            <input
              type="text"
              placeholder="what are you looking for"
              className="bg-slate-50 focus:outline-none "
            />
            <button
              className={({ isActive }) =>
                `hover:text-[#DB4444] font-bold ${
                  isActive ? "text-[#DB4444]" : ""
                }`
              }
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <NavLink
            to={"/Favourite"}
            className={({ isActive }) =>
              `hover:text-[#DB4444] font-bold text-lg transition-colors ${
                isActive ? "text-[#DB4444]" : ""
              } text-xl hover:scale-125 transition-transform`
            }
          >
            <i className="fa-regular fa-heart"></i>
          </NavLink>
          <NavLink
            to={"/Cart"}
            className={({ isActive }) =>
              `hover:text-[#DB4444] font-bold text-lg transition-colors ${
                isActive ? "text-[#DB4444]" : ""
              } text-xl hover:scale-125 transition-transform`
            }
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
