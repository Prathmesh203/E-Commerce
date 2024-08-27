import React, { useState } from 'react'
import Slider from 'react-slick'
import data from '../../slidebar.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'

function ImageSlider() {

  const image = data;
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    slide: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: current => setActiveIndex(current),  
    customPaging: i => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: activeIndex === i ? "#DB4444" : "#363738", 
          border: activeIndex === i ? "1px solid white" : "transparent", 
          display: "inline-block",
          margin: "4px",
          position: "relative",
          bottom: "30px",
        }}
      ></div>
    ),
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "transparent ",
          // color: "DB4444"
         
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "10px",
    //       height: "10px",
    //       color: "DB4444",
    //       border: "2px solid transparent",
    //       borderRadius: "50%",
    //       backgroundColor: "#363738",
    //      position: "relative",
    //      bottom: "20px",
         
    //     }}
    //   >
        
    //   </div>
    // ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <Slider {...settings} className="w-[75%]">
      {image.map((d) => (
        <ul key={d.name}>
          <li>
          <div
                className="border rounded mx-auto"
                style={{
                  backgroundImage: `url(${d.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  width: "700px",
                  height: "334px",
                }}
              ></div>
          </li>
        </ul>
      ))}
    </Slider>
  )
}

export default ImageSlider