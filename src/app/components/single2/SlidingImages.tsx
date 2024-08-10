"use client";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SlidingImages = () => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = [
        {
          original:
            "https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          thumbnail:
            "https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
        },
        {
          original:
            "https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          thumbnail:
            "https://images.pexels.com/photos/414781/pexels-photo-414781.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
        },
        {
          original:
            "https://images.pexels.com/photos/369264/pexels-photo-369264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          thumbnail:
            "https://images.pexels.com/photos/369264/pexels-photo-369264.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
        },
        {
          original:
            "https://images.pexels.com/photos/369264/pexels-photo-369264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          thumbnail:
            "https://images.pexels.com/photos/369264/pexels-photo-369264.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
        },
        {
          original:
            "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          thumbnail:
            "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
        },
      ];
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="ml-2">
        <div className="flex justify-center items-center">
          <div className="lg:w-[60%] w-full">
            <div className="relative w-[96%]">
              <ImageGallery
                items={images}
                showThumbnails={true}
                showPlayButton={false}
                thumbnailPosition="bottom"
                renderLeftNav={(onClick: any, disabled: any) => (
                  <button
                    type="button"
                    className="absolute top-1/2 left-3 lg:left-3 transform -translate-y-1/2 z-10 lg:p-5 p-2 bg-[#FF0000] text-white text-lg lg:text-3xl rounded-full hover:bg-red-700"
                    disabled={disabled}
                    onClick={onClick}
                  >
                    <IoIosArrowBack />
                  </button>
                )}
                renderRightNav={(onClick: any, disabled: any) => (
                  <button
                    type="button"
                    className="absolute top-1/2 right-3 lg:right-3 transform -translate-y-1/2 z-10 lg:p-5 p-2 bg-[#FF0000] text-white text-lg lg:text-3xl rounded-full hover:bg-red-700"
                    disabled={disabled}
                    onClick={onClick}
                  >
                    <IoIosArrowForward />
                  </button>
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlidingImages;
