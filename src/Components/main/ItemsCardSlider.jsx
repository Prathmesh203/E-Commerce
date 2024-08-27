import React from "react";
import { CiHeart , CiShoppingCart,  } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { useGlobalContext } from "../../Context";
import { useRef } from "react";
import '../../App.css'


function ItemsCard({ item, width, height, name, Discount, price,id, Favourite,Wishlist,deleteItem }) {

const data = useGlobalContext();
// const ref = useRef();
const handleCart = ()=>{
  data.setCart([...data.Cart,{image:item,name:name,price:price,id:id,quantity:1}])
  // ref.current.textContent = ("added to cart")
}
const handleWishlist=()=>{
  data.setWishlist([...data.Wishlist,{image:item,name:name,price:price,id:id}])
}
const handleFavourite=()=>{
  data.setFavourite([...data.Favourite,{image:item,name:name,price:price,id:id}])
}
const handleDelete = ()=>{
  data.setFavourite(data.Favourite.filter((item)=>item.id !== id))
}
  return (
    <div className="productcard flex flex-col border w-[20vw] h-[50vh] items-center justify-center bg-[#F5F7F8] rounded-md pb-5 cursor-pointer">
         {Discount && (
        <h3 className="bg-[#DB4444] rounded-sm font-bold px-4 text-white text-center self-start">
          -{Discount}%
        </h3>
      )}
      <NavLink to={`/Product/${id}`}
        className=""
        style={{
          backgroundImage: `url(${item})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: width,
          height: height,
        }}
      ></NavLink>
      <button
        className="cartbtn py-2 px-6"
     onClick={handleCart}
    //  ref={ref}
      >
        Add To Cart
      </button>
   
      <h1 className="text-xl font-bold">{name}</h1>
      <h1 className="text-[#DB4444] text-lg font-semibold">&#8377; {price}/-</h1>
      <div className="flex gap-2">
        {" "}
        {Favourite && (
          <button
            className="p-2 bg-white grid place-items-center rounded-full transition-colors hover:text-white hover:bg-red-600"
            onClick={handleFavourite}
          >
            <i class="fa-regular fa-heart"></i>
          </button>
        )}
        {Wishlist && (
          <button
            className="p-2 bg-white grid place-items-center rounded-full transition-colors hover:text-white hover:bg-red-600"
            onClick={handleWishlist}
          >
            <i className="fas fa-eye"></i>
          </button>
        )}
        {
          deleteItem && <button
          className="text-xl  font-semibold border rounded-full bg-white p-1 hover:bg-[#DB4444]"
          onClick={handleDelete}
        >
        <MdDeleteOutline />

        </button>
        }
      </div>
    </div>
  );
}
export default ItemsCard;
