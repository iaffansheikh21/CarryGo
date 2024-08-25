import React from "react";

const WriteReview = () => {
  return (
    <div className="p-10 w-full mx-auto">
      <h1 className=" text-black lg:ml-56  mt-8 text-2xl font-semibold mb-10 text-left">
        Write a Review
      </h1>

      <div className="flex flex-col items-center w-full md:w-3/4 mx-auto">
        <div className="w-full mb-4 flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <label
              className="block font-bold text-black text-sm mb-2"
              htmlFor="Subject"
            >
              Subject
            </label>
            <input
              type="text"
              id="what"
              placeholder="Did you like a deal"
              className="w-full border border-gray-300 p-4 rounded text-md"
            />
          </div>

          <div className="w-full md:w-1/2 lg:pl-3">
            <label
              className="block font-bold text-black text-sm mb-2"
              htmlFor="Rating"
            >
              Rating
            </label>
            <select
              id="rating"
              className="lg:w-80 w-full border border-gray-300 text-md p-4 rounded"
            >
              <option value="horrible">Horrible</option>
              <option value="average">Average</option>
              <option value="good">Good</option>
              <option value="very-good">Very Good</option>
              <option value="Excellent">Excellent</option>
            </select>
          </div>
        </div>

        <div className="w-full mt-4">
          <label
            className="block font-bold text-black text-sm mb-2"
            htmlFor="review"
          >
            Your Review
          </label>
          <textarea
            id="review"
            placeholder="Good Seller, I'm satisfied"
            className="w-full md:w-[78%] border border-gray-300 text-md p-4 rounded"
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};

export default WriteReview;
