import React from "react";
import { PiDressLight } from "react-icons/pi";
import { PiShirtFoldedLight } from "react-icons/pi";
import { FaTv } from "react-icons/fa";
import { MdOutlineSportsTennis } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { MdStorefront } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryButton from "./CategoryButton";
import { NavLink } from "react-router-dom";
function Categories() {
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="categories flex flex-col gap-10 ">
      <div className="w-[90%] m-auto p-2">
           <h1 className='text-[#DB4444] text-3xl font-extrabold'>CATEGORIES</h1>

      <h1 className=" text-4xl font-semibold text-[#17153B]">Browse By Category</h1>
      </div>
      <div className="mx-auto w-[90%]" >
        <Slider {...settings}
        className="">
          <CategoryButton>
           <NavLink to={"/FilteredProducts/women's fashion"} className="flex flex-col items-center justify-center transition-transform hover:scale-110">
           <PiDressLight />
           <span className=" font-semibold text-lg">Women's</span>
           </NavLink>
          </CategoryButton>
          <CategoryButton>
            <NavLink to={"/FilteredProducts/men's fashion"} className="flex flex-col items-center justify-center transition-transform hover:scale-110">
          <PiShirtFoldedLight />
          <span className=" font-semibold text-lg">Men's</span>
          </NavLink>
          </CategoryButton>
          <CategoryButton>
            <NavLink to={"/FilteredProducts/electronics"} className="flex flex-col items-center justify-center transition-transform hover:scale-110">
            <FaTv />
            <span className=" font-semibold text-lg">Electronics</span>
            </NavLink>
          </CategoryButton>
          <CategoryButton>
          <NavLink to={"/FilteredProducts/sports"} className="flex flex-col items-center justify-center transition-transform hover:scale-110">
           
            <MdOutlineSportsTennis />
            <span className=" font-semibold text-lg">Sports</span>
            </NavLink>
          </CategoryButton>
          <CategoryButton>
          <NavLink to={"/FilteredProducts/medicine"} className="flex flex-col items-center justify-center transition-transform hover:scale-110">
           
            <AiOutlineMedicineBox />
            <span className=" font-semibold text-lg">Medicine</span>
          </NavLink>
          </CategoryButton>
          <CategoryButton>
          <NavLink to={"/FilteredProducts/groceries"} className="flex flex-col items-center justify-center transition-transform hover:scale-110">
            <MdStorefront />
            <span className=" font-semibold text-lg">Groceries</span>
          </NavLink>
          </CategoryButton>
        </Slider>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
    </div>
  );
}

export default Categories;
