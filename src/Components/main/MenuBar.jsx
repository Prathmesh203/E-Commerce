import React from "react";

import { Link } from "react-router-dom";

import '../../App.css'

function MenuBar() {
 

  return (
    <div className="category-menu w-[25%] flex justify-center items-start p-6 border-r border-r-slate-300">
      <ul className="cursor-pointer w-full">
        <li className=" hover:bg-[#f07878] hover:text-white font-semibold text-center h-[30px]  flex items-center justify-between hover:scale-105 transition-transform">
         <Link to={`/FilteredProducts/${"women's fashion"}`}> Women's fashion</Link> <span><i className="fa-solid fa-caret-right"></i></span>
        </li>
        <li className="hover:bg-[#f07878] hover:text-white font-semibold text-center h-[30px]  flex items-center justify-between hover:scale-105 transition-transform">
          <Link to={`/FilteredProducts/${"men's fashion"}`}>Men's fashion</Link> <span><i className="fa-solid fa-caret-right"></i></span>
        </li>
        <li className="hover:bg-[#f07878] hover:text-white font-semibold text-center h-[30px]  flex items-center justify-between  hover:scale-105 transition-transform">
        <Link to={`/FilteredProducts/${"electronics"}`}>Electronics</Link> <span><i className="fa-solid fa-caret-right"></i></span>
        </li>
        <li className="hover:bg-[#f07878] hover:text-white font-semibold text-center h-[30px]  flex items-center justify-between hover:scale-105 transition-transform">
        <Link to={`/FilteredProducts/${"sports"}`}>Sports</Link> <span><i className="fa-solid fa-caret-right"></i></span> 
        </li>
        <li className="hover:bg-[#f07878] hover:text-white font-semibold text-center h-[30px]  flex items-center justify-between  hover:scale-105 transition-transform">
        <Link to={`/FilteredProducts/${"medicine"}`}>Medicine</Link> <span><i className="fa-solid fa-caret-right"></i></span> 
        </li>
        <li className="hover:bg-[#f07878] hover:text-white font-semibold text-center h-[30px]  flex items-center justify-between hover:scale-105 transition-transform">
        <Link to={`/FilteredProducts/${"groceries"}`}>Groceries</Link> <span><i className="fa-solid fa-caret-right"></i></span>
        </li>
      </ul>
    </div>
  );
}

export default MenuBar;
