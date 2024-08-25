import React from "react";

const Buttons = () => {
  return (
    <>
      <section className="flex flex-col ml-5">
        <h2 className="text-left font- mb-10 w-[63%] text-xl">Default</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="text-xl font-semibold text-white bg-[#FF0000] px-6 py-3 rounded-sm hover:bg-red-700 hover:shadow-lg transition-all">
            btn-primary
          </button>
          <button className="text-xl font-semibold text-white bg-[#6C757D] px-6 py-3 rounded-sm hover:bg-gray-700 transition-all">
            btn-secondary
          </button>
          <button className="text-xl font-semibold text-white bg-[#28A745] px-6 py-3 rounded-sm hover:bg-green-700 transition-all">
            btn-success
          </button>
          <button className="text-xl font-semibold text-white bg-[#DC3545] px-6 py-3 rounded-sm hover:bg-red-700 transition-all">
            btn-danger
          </button>
          <button className="text-xl font-semibold text-white bg-[#FFC107] px-6 py-3 rounded-sm hover:bg-yellow-600 transition-all">
            btn-warning
          </button>
          <button className="text-xl font-semibold text-white bg-[#17A2B8] px-6 py-3 rounded-sm hover:bg-teal-600 transition-all">
            btn-info
          </button>
          <button className="text-xl font-semibold text-black bg-white px-6 py-3 rounded-sm hover:bg-gray-300 transition-all">
            btn-light
          </button>
        </div>
      </section>
      <section className="flex flex-col ml-5 mt-10">
        <h2 className="text-left mb-10 w-[63%] text-xl">
          With <span className="text-base text-[#FF0000]"> .btn-rounded </span>{" "}
          class
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="text-xl font-semibold text-white bg-[#FF0000] px-6 py-3 rounded-full hover:bg-red-700 transition-all">
            btn-primary
          </button>
          <button className="text-xl font-semibold text-white bg-[#6C757D] px-6 py-3 rounded-full hover:bg-gray-700 transition-all">
            btn-secondary
          </button>
          <button className="text-xl font-semibold text-white bg-[#28A745] px-6 py-3 rounded-full hover:bg-green-700 transition-all">
            btn-success
          </button>
          <button className="text-xl font-semibold text-white bg-[#DC3545] px-6 py-3 rounded-full hover:bg-red-700 transition-all">
            btn-danger
          </button>
          <button className="text-xl font-semibold text-white bg-[#FFC107] px-6 py-3 rounded-full hover:bg-yellow-600 transition-all">
            btn-warning
          </button>
          <button className="text-xl font-semibold text-white bg-[#17A2B8] px-6 py-3 rounded-full hover:bg-teal-600 transition-all">
            btn-info
          </button>
          <button className="text-xl font-semibold text-black bg-white px-6 py-3 rounded-full hover:bg-gray-300 transition-all">
            btn-light
          </button>
        </div>
      </section>
      <section className="flex flex-col ml-5 mt-10">
        <h2 className="text-left mb-10 w-[63%] text-xl">
          With <span className="text-base text-[#FF0000]"> .btn-framed</span>
          class
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="text-xl font-semibold text-[#FF0000] border-2 border-[#FF0000] px-6 py-3 rounded-sm hover:bg-[#FF0000] hover:text-white transition-all m-1">
            btn-primary
          </button>
          <button className="text-xl font-semibold text-[#6C757D] border-2 border-[#6C757D] px-6 py-3 rounded-sm hover:bg-[#6C757D] hover:text-white transition-all">
            btn-secondary
          </button>
          <button className="text-xl font-semibold text-[#28A745] border-2 border-[#28A745] px-6 py-3 rounded-sm hover:bg-[#28A745] hover:text-white transition-all">
            btn-success
          </button>
          <button className="text-xl font-semibold text-[#DC3545] border-2 border-[#DC3545] px-6 py-3 rounded-sm hover:bg-[#DC3545] hover:text-white transition-all">
            btn-danger
          </button>
          <button className="text-xl font-semibold text-[#FFC107] border-2 border-[#FFC107] px-6 py-3 rounded-sm hover:bg-[#FFC107] hover:text-white transition-all">
            btn-warning
          </button>
          <button className="text-xl font-semibold text-[#17A2B8] border-2 border-[#17A2B8] px-6 py-3 rounded-sm hover:bg-[#17A2B8] hover:text-white transition-all">
            btn-info
          </button>
          <button className="text-xl font-semibold text-black border-2 border-black px-6 py-3 rounded-sm hover:bg-black hover:text-white transition-all">
            btn-light
          </button>
        </div>
      </section>

      <section className="flex flex-col ml-5 mt-10">
        <h2 className="text-left mb-10 w-[63%] text-xl">
          With <span className="text-base text-[#FF0000]"> .text-caps</span>
          class
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="text-sm font-semibold text-white bg-[#FF0000] px-4 py-2 rounded-sm hover:bg-red-700 hover:shadow-lg transition-all">
            BTN-PRIMARY
          </button>
          <button className="text-sm font-semibold text-white bg-[#6C757D] px-6 py-3 rounded-sm hover:bg-gray-700 transition-all">
            BTN-SECONDARY
          </button>
          <button className="text-sm font-semibold text-white bg-[#28A745] px-6 py-3 rounded-sm hover:bg-green-700 transition-all">
            BTN-SUCCESS{" "}
          </button>
          <button className="text-sm font-semibold text-white bg-[#DC3545] px-6 py-3 rounded-sm hover:bg-red-700 transition-all">
            BTN-DANGER
          </button>
          <button className="text-sm font-semibold text-white bg-[#FFC107] px-6 py-3 rounded-sm hover:bg-yellow-600 transition-all">
            BTN-WARNING
          </button>
          <button className="text-sm font-semibold text-white bg-[#17A2B8] px-6 py-3 rounded-sm hover:bg-teal-600 transition-all">
            BTN-INFO
          </button>
          <button className="text-sm font-semibold text-black bg-white px-6 py-3 rounded-sm hover:bg-gray-300 transition-all">
            BTN-LIGHT
          </button>
        </div>
      </section>

      <section className="flex flex-col ml-5 mt-10">
        <h2 className="text-left mb-10 w-[63%] text-xl">
          With <span className="text-base text-[#FF0000]"> .text-small</span>
          class
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="text-xs font-semibold text-white bg-[#FF0000] px-4 py-2 rounded-sm hover:bg-red-700 hover:shadow-lg transition-all">
            btn-primary
          </button>
          <button className="text-xs font-semibold text-white bg-[#6C757D] px-6 py-3 rounded-sm hover:bg-gray-700 transition-all">
            btn-secondary
          </button>
          <button className="text-xs font-semibold text-white bg-[#28A745] px-6 py-3 rounded-sm hover:bg-green-700 transition-all">
            btn-success
          </button>
          <button className="text-xs font-semibold text-white bg-[#DC3545] px-6 py-3 rounded-sm hover:bg-red-700 transition-all">
            btn-danger
          </button>
          <button className="text-xs font-semibold text-white bg-[#FFC107] px-6 py-3 rounded-sm hover:bg-yellow-600 transition-all">
            btn-warning
          </button>
          <button className="text-xs font-semibold text-white bg-[#17A2B8] px-6 py-3 rounded-sm hover:bg-teal-600 transition-all">
            btn-info
          </button>
          <button className="text-xs font-semibold text-black bg-white px-6 py-3 rounded-sm hover:bg-gray-300 transition-all">
            btn-light
          </button>
        </div>
      </section>

      {/* large class */}
      <section className="flex flex-col ml-5 mt-10">
        <h2 className="text-left mb-10 w-[63%] text-xl">
          With <span className="text-base text-[#FF0000]"> .btn-large </span>{" "}
          class
        </h2>{" "}
        <div className="flex flex-wrap gap-2 mb-4">
          <button className="text-2xl font-semibold text-white bg-[#FF0000] px-6 py-3 rounded-sm hover:bg-red-700 hover:shadow-lg transition-all">
            btn-primary
          </button>
          <button className="text-2xl font-semibold text-white bg-[#6C757D] px-6 py-3 rounded-sm hover:bg-gray-700 transition-all">
            btn-secondary
          </button>
          <button className="text-2xl font-semibold text-white bg-[#28A745] px-6 py-3 rounded-sm hover:bg-green-700 transition-all">
            btn-success
          </button>
          <button className="text-2xl font-semibold text-white bg-[#DC3545] px-6 py-3 rounded-sm hover:bg-red-700 transition-all">
            btn-danger
          </button>
          <button className="text-2xl font-semibold text-white bg-[#FFC107] px-6 py-3 rounded-sm hover:bg-yellow-600 transition-all">
            btn-warning
          </button>
          <button className="text-2xl font-semibold text-white bg-[#17A2B8] px-6 py-3 rounded-sm hover:bg-teal-600 transition-all">
            btn-info
          </button>
          <button className="text-2xl font-semibold text-black bg-white px-6 py-3 rounded-sm hover:bg-gray-300 transition-all">
            btn-light
          </button>
        </div>
      </section>
    </>
  );
};

export default Buttons;
