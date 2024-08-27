import React, { useMemo } from "react";
import { useGlobalContext } from "../../Context";
import ItemsCard from "./ItemsCard";
import { useNavigate } from "react-router-dom";
import '../../App.css';

function Explore() {
  const { content } = useGlobalContext();
  const navigate = useNavigate();

  const getRandomItems = () => {
    const randomItems = [];
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * content.length);
      randomItems.push(content[randomIndex]);
    }
    return randomItems;
  };

  const randomData = useMemo(getRandomItems, [content]);

  return (
    <div className="explore flex items-center flex-col gap-10 w-full">
      <div
        className="imgbox bg-cover bg-center w-[1200px] h-[450px]"
        style={{ backgroundImage: `url("/Frame_600.png")` }}
      >
        <button
          className="w-[180px] h-[60px] bg-[#1be66c] rounded hover:bg-[#DB4444] text-white font-bold relative top-[78%] left-[4.9%]"
          onClick={() => navigate('/some-route')}
        >
          Buy Now!
        </button>
      </div>

      <div className="text-center">
        <h1 className='text-[#DB4444] text-3xl font-bold'>CATEGORIES</h1>
        <h1 className='text-5xl font-semibold'>Explore Our Products</h1>
      </div>

      <div className="productsgrid w-[90%] mx-auto grid grid-cols-4 gap-y-8">
        {randomData.map((item) => (
          <ItemsCard
            key={item.id}
            item={item.image}
            width="247px"
            height="250px"
            name={item.name}
            price={item.price}
            id={item.id}
            Favourite={true}
            Wishlist={true}
          />
        ))}
      </div>

      <div className='w-full grid place-items-center'>
        <button
          className='viewallbtn w-[30%] hover:scale-110 transition-transform text-white font-bold bg-[#DB4444] p-2 rounded-sm hover:bg-[#e65e5e]'
          onClick={() => navigate("/AllProducts")}
        >
          View All Products
        </button>
      </div>

      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="service flex gap-5 py-10 pb-20">
        <img src="/Frame701.png" alt="Service 1" />
        <img src="/Frame702.png" alt="Service 2" />
        <img src="/Frame704.png" alt="Service 3" />
      </div>
    </div>
  );
}

export default Explore;
