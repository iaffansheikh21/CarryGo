"use client";
import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SingleCardComponent from "./SingleCardComponent";
import LocationSection from "./locationSection";
import FeaturesSection from "./FeaturesSection";
import ContactForm from "./ContactForm";

const ImageSlider: React.FC = () => {
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
    <div className="lg:ml-32 w-[98%]">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:ml-28">
        <div className="w-full">
          <div className="relative h-[70%]">
            <ImageGallery
              items={images}
              showThumbnails={true}
              showPlayButton={false}
              thumbnailPosition="bottom"
              renderLeftNav={(onClick: any, disabled: any) => (
                <button
                  type="button"
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 p-6 bg-[#FF0000] text-white text-2xl rounded-full hover:bg-red-700"
                  disabled={disabled}
                  onClick={onClick}
                >
                  <IoIosArrowBack />
                </button>
              )}
              renderRightNav={(onClick: any, disabled: any) => (
                <button
                  type="button"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 p-6 bg-[#FF0000] text-white text-2xl rounded-full hover:bg-red-700"
                  disabled={disabled}
                  onClick={onClick}
                >
                  <IoIosArrowForward />
                </button>
              )}
            />
          </div>
          <div className="lg:mt-10 lg:text-left pb-2">
            <h2 className="text-2xl text-black font-bold lg:mr-52">
              Description
            </h2>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec
              tincidunt arcu, sit amet fermentum sem. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Vestibulum tincidunt, sapien sagittis sollicitudin
              dapibus, risus mi euismod elit, in dictum justo lacus sit amet
              dui. Sed faucibus vitae nisl at dignissim.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[60%] lg:mr-56 mt-16 lg:mt-0">
          <SingleCardComponent />
        </div>
      </div>
      <div className="mt-10">
        <LocationSection />
      </div>

      <div className="mt-4">
        <FeaturesSection />
      </div>
      <div className="lg:mr-52 mt-10">
        <ContactForm />
      </div>
    </div>
  );
};

export default ImageSlider;
