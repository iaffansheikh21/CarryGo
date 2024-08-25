import React from "react";
import VerticleCardsElemets from "./VerticleCardsElemets";
import HorizontalCardElement from "./HorizontalCardElement";
import Buttons from "./Buttons";
import MyForm from "./MyForm";
import TabsPills from "./TabsPills";
import MapElement from "./MapElement";

const Elements = () => {
  return (
    <>
      <section className="flex flex-col items-center w-full">
        <h2 className="text-left font- mb-10  w-[63%] text-3xl ">Grid</h2>
        <div className="flex justify-center space-x-10 mb-4">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="w-16 h-6 bg-[#D9D9D9] border border-[#C3C3C3] rounded-sm flex items-center justify-center"
            >
              <span className="text-md">col {index + 1}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3 w-[64%] ml-2">
          <div className="w-[80%] h-6 bg-[#D9D9D9] border border-[#C3C3C3] rounded-sm flex items-center justify-center">
            col-md-8
          </div>
          <div className="w-[40%] h-6  bg-[#D9D9D9] border border-[#C3C3C3]  flex items-center justify-center">
            col-md-4
          </div>
        </div>
      </section>
      {/* Verticle card  */}
      <section className="flex flex-col items-center w-full">
        <h2 className="text-left font-   lg:w-[63%] w-full ml-2 mt-20 mb-10 text-3xl ">
          Items
        </h2>

        <div className="lg:ml-10">
          <VerticleCardsElemets />
        </div>
      </section>

      {/* Horizontal Card */}
      <section className="flex flex-col items-center">
        <h2 className="text-left font-   w-[63%] mt-20 mb-10 text-3xl ">
          Items List
        </h2>

        <div className=" lg:w-[65%] w-full">
          <HorizontalCardElement />
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h2 className="text-left font-   w-[63%] mt-20 mb-10 text-3xl ">
          Buttons{" "}
        </h2>

        <div className=" lg:w-[65%] w-full">
          <Buttons />
        </div>
      </section>

      {/* form */}
      <section className="flex flex-col items-center">
        <h2 className="text-left font-   lg:w-[63%] w-full ml-2 mt-20 mb-10 text-3xl ">
          Form
        </h2>

        <div className=" lg:w-[64%] w-full">
          <MyForm />
        </div>
      </section>

      {/* tabs and pills */}

      <section className="flex flex-col items-center">
        <div className=" w-full">
          <TabsPills />
        </div>
      </section>

      <section className="flex flex-col items-center mt-10">
        <div className=" lg:w-[65%] w-full">
          <MapElement />
        </div>
      </section>
    </>
  );
};

export default Elements;
