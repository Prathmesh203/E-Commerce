import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../../Context';
import { useState } from 'react';
import {CiShoppingCart} from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Product() {
  const context = useGlobalContext();
  
  const navigate = useNavigate();  
  const Products = context.content;
  const {id} = useParams();
//  console.log(Products);
  const item = Products.find((item) => item.id == id);
  const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (amount) => {
        if (quantity + amount > 0) {
            setQuantity(quantity + amount);
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-between p-6">
            <div className="flex flex-col gap-4 md:w-1/2">
                <div 
                    className="bg-cover bg-center w-full h-96" 
                    style={{ backgroundImage: `url(${item.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center"
                     }}
                ></div>
            </div>

            <div className="flex flex-col md:w-1/2 mt-8 md:mt-0 md:pl-8">
                <h1 className="text-5xl font-semibold">{item.name}</h1>
                <h2 className="text-2xl font-bold text-red-600 mt-4">&#8377; {item.price}</h2>
                {/* Product Description */}
                <p className="text-gray-700 mt-4 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iusto illo ducimus cumque dolor saepe, quidem placeat! Veniam reprehenderit esse ullam voluptatibus possimus dolores expedita quis sint alias molestias. Libero, assumenda error consequuntur, expedita possimus dolorum consectetur optio consequatur architecto beatae illo provident debitis doloremque. Eos ut labore pariatur eveniet.</p>
                <div className="flex items-center mt-6 ">
                    <button 
                        onClick={() => handleQuantityChange(-1)} 
                        className="py-2 px-3 border transition-colors hover:bg-[#db4444] hover:text-white rounded-md font-bold"
                    >
                        -
                    </button>
                    <span className="px-4 font-semibold">{quantity}</span>
                    <button 
                        onClick={() => handleQuantityChange(1)} 
                        className="py-2 px-3 border transition-colors  hover:bg-[#db4444] hover:text-white rounded-md font-bold"
                    >
                        +
                    </button>
                </div>

                <div className="flex mt-8">
                    <button className="bg-[#db4444] hover:bg-white hover:text-slate-400 border hover:border-[#db4444] text-white px-4 font-semibold rounded mr-4 hover:scale-105 transition-transform text-center" onClick={()=> {context.setCart([...context.Cart, {image:item.image,name:item.name,price:item.price,id:item.id,quantity:quantity}]), navigate("/Order")}}>Buy Now</button>
                    <button className=" text-gray-700 px-6 py-3 border border-[#db4444] rounded text-2xl bg-white hover:bg-[#db4444] hover:font-bold hover:text-white hover:scale-105 transition-transform" onClick={()=> {context.setCart([...context.Cart, {image:item.image,name:item.name,price:item.price,id:item.id,quantity:quantity}]), navigate("/Cart")}}><CiShoppingCart /></button>
                </div>

               
                <div className="mt-6">
                    <p className="text-gray-700 text-xl">Free Delivery</p>
                    <p className="text-gray-700 text-lg">Return Delivery</p>
                </div>
            </div>
        </div>
    );
}

export default Product