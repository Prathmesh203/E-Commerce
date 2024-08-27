import React, { useMemo, useCallback } from 'react';
import { useGlobalContext } from '../../Context';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ItemsCardSlider from '../main/ItemsCardSlider';
import ItemsCard from './ItemsCard';
import { useNavigate } from 'react-router-dom';

function DiscountSlider() {
  const data = useGlobalContext();
  const navigate = useNavigate();
  const images = data.content;

  const { discountedImages, discount } = useMemo(() => {
    const discounted = [];
    const discounts = [];
    for (let i = 0; i < 7; i++) {
      const randomImageIndex = Math.floor(Math.random() * images.length);
      discounted.push(images[randomImageIndex]);
      const randomDiscount = Math.floor(Math.random() * (80 - 15 + 1) + 15);
      discounts.push(randomDiscount);
    }
    return { discountedImages: discounted, discount: discounts };
  }, [images]);

  const handleViewAllClick = useCallback(() => {
    navigate("/AllProducts");
  }, [navigate]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="w-[90%] mx-auto h-[50vh]">
        {discountedImages.map((img, index) => (
          <ul key={img.id}>
            <li>
              <ItemsCard
                item={img.image}
                width="247px"
                height="250px"
                name={img.name}
                Discount={discount[index]}
                price={img.price}
                id={img.id}
                Favourite={true}
                Wishlist={true}
              />
            </li>
          </ul>
        ))}
      </Slider>
      <div className="w-full grid place-items-center mt-10 max-[480px]:mt-20  ">
        <button
          className="viewallbtn w-[30%] text-white bg-[#DB4444] p-2 font-bold rounded-sm hover:bg-[#d33939] hover:scale-110 transition-transform"
          onClick={handleViewAllClick}
        >
          View All Products
        </button>
      </div>
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </>
  );
}

export default DiscountSlider;
