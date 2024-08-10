"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ScrollingImages = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = [
        "https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/369264/pexels-photo-369264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/369264/pexels-photo-369264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ];
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="hidden lg:block absolute top-1/2 left-2 transform -translate-y-1/2 z-10 p-2 md:p-5 bg-[#FF0000] text-white text-2xl md:text-3xl rounded-full hover:bg-red-700"
        onClick={onClick}
      >
        <IoIosArrowBack />
      </button>
    );
  };

  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <button
        type="button"
        className="hidden lg:block absolute top-1/2 right-2 transform -translate-y-1/2 z-10 p-2 md:p-5 bg-[#FF0000] text-white text-2xl md:text-3xl rounded-full hover:bg-red-700"
        onClick={onClick}
      >
        <IoIosArrowForward />
      </button>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%", // Ensures that the image in the center appears fully, and the adjacent images are partially visible
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "15%", // Adjust padding for tablets
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10%", // Adjust padding for mobile devices
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "5%", // Further adjust padding for small screens
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "2%", // Minimal padding for very small screens
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-[750px]">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-[99%] h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ScrollingImages;
