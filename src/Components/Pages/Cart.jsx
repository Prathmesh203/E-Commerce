import React from "react";
import { useGlobalContext } from "../../Context";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

function Cart() {
  const data = useGlobalContext();
  const products = data.Cart;
  // console.log(products);
  const navigate = useNavigate();
  const handleClick = (e, itemId) => {
    if (e.target.id === "+") {
      data.setCart(
        products.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else if (e.target.id === "-") {
      data.setCart(
        products.map((item) =>
          item.id === itemId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };
  const removeCart = (itemId)=>{
    return data.setCart(products.filter((item)=>item.id !== itemId))
  }
  useEffect(() => {
    data.setCart(products.filter((item) => item.quantity > 0));
  }, []);
  
  if (products.length === 0) {
    return (
      <div>
        <h1>Cart is Empty</h1>
      </div>
    );
  } else {
    return (
      <div className=" flex items-center justify-center h-[100vh] flex-col">
        <div className="flex justify-around  w-[80vw] mb-5 mt-5 border h-[5vh] items-center shadow-sm">
          <h1>product</h1>
          <h1>price</h1>
          <h1>quantity</h1>
          <h1 >sub total</h1>
          <h1>Delete</h1>
        </div>
        <div className="w-[80vw]  border border-black h-[70vh] overflow-y-auto bg-slate-50 ">
          <ul>
            {products.map((item) => (
              <li className="flex items-center justify-around border m-3 bg-white shadow-md z-10">
                <div>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "90px",
                      width: "90px",
                    }}
                  ></div>
                  {item.name}
                </div>
                <h1>{item.price}</h1>
                <div className="flex bg-[#db4444] gap-3 text-white rounded-md p-1">
                  <button onClick={(e) => handleClick(e, item.id)} id="-" className=" ">
                    -
                  </button>
                  <h1>{item.quantity}</h1>
                  <button onClick={(e) => handleClick(e, item.id)} id="+">
                    +
                  </button>
                </div>
                {item.price * item.quantity}
                    <button onClick={()=>removeCart(item.id)}><RiDeleteBinLine />
                    </button>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex justify-between w-[20vw] itemsd-center border border-black mt-5 rounded p-1">
          <h1>Total = </h1>
          <h1>{products.reduce((a, b) => a + b.price * b.quantity, 0)} /-</h1>
        </div>
        <button
          className="text-white bg-[#DB4444] p-2 rounded-lg mt-2  hover:bg-[#e65e5e] "
          onClick={() => navigate("/Order")}
        >
          Proceed To Order{" "}

        </button>
      </div>
    );
  }
}
export default Cart;
