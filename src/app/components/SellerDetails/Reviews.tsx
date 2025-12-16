"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "Jane Doe",
    date: "02.05.2017",
    rating: 5,
    title: "Positive experience!",
    review:
      "Nam pulvinar tortor nec lacinia efficitur. Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum, mollis mauris id, scelerisque quam.",
    avatar: "/profile.webp",
  },
  {
    id: 2,
    name: "John Doe",
    date: "02.05.2017",
    rating: 5,
    title: "Perfect seller. I am satisfied.",
    review:
      "Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum, mollis mauris id, scelerisque quam.",
    avatar: "/profile.webp",
  },
  {
    id: 3,
    name: "Susan Jefferson",
    date: "02.05.2017",
    rating: 4,
    title: "Quick dispatch and good communication",
    review:
      "Cras luctus aliquet fringilla. In eu cursus nunc. Quisque dolor leo, vehicula a sem ut, aliquam pretium tellus. Morbi ut mi eleifend, sollicitudin nisl in, elementum nisi. Praesent sed libero euismod, pellentesque risus sit amet, faucibus lorem. Pellentesque bibendum libero sed tempor tristique.",
    avatar: "/profile.webp",
  },
  {
    id: 4,
    name: "Susan Jefferson",
    date: "02.05.2017",
    rating: 4,
    title: "Quick dispatch and good communication",
    review:
      "Cras luctus aliquet fringilla. In eu cursus nunc. Quisque dolor leo, vehicula a sem ut, aliquam pretium tellus. Morbi ut mi eleifend, sollicitudin nisl in, elementum nisi. Praesent sed libero euismod, pellentesque risus sit amet, faucibus lorem. Pellentesque bibendum libero sed tempor tristique.",
    avatar: "/profile.webp",
  },
  {
    id: 5,
    name: "Susan Jefferson",
    date: "02.05.2017",
    rating: 4,
    title: "Quick dispatch and good communication",
    review:
      "Cras luctus aliquet fringilla. In eu cursus nunc. Quisque dolor leo, vehicula a sem ut, aliquam pretium tellus. Morbi ut mi eleifend, sollicitudin nisl in, elementum nisi. Praesent sed libero euismod, pellentesque risus sit amet, faucibus lorem. Pellentesque bibendum libero sed tempor tristique.",
    avatar: "/profile.webp",
  },
  // Add more reviews here
];

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(3);

  const loadMoreReviews = () => {
    setVisibleReviews(reviewsData.length);
  };

  return (
    <div className="w-full max-w-4xl my-8 lg:ml-72 mx-auto ml-3">
      <h2 className="text-2xl font-semibold mb-10 text-left">Reviews</h2>
      <div className="flex flex-col justify-center items-center">
        {reviewsData.slice(0, visibleReviews).map((review) => (
          <div key={review.id} className="mb-10 w-full">
            <div className="flex flex-col sm:flex-row items-start mb-4">
              {/* Image Section */}
              <Image
                src={review.avatar}
                alt={review.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mr-6 mb-4 sm:mb-0"
              />

              {/* Review Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{review.title}</h3>
                <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm text-gray-600 mt-2">
                  <span className="flex items-center text-red-500 mr-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </span>
                  <span className="mr-2">{review.date}</span>
                  <span className="font-bold">{review.name}</span>
                </div>
                <p className="text-gray-700 mt-4">{review.review}</p>
                <hr className="border-gray-300 mt-8" />
              </div>
            </div>
          </div>
        ))}
        {visibleReviews < reviewsData.length && (
          <button
            onClick={loadMoreReviews}
            className="hover:bg-[#FF0000] hover:text-white border border-[#FF0000] text-[#FF0000] px-6 py-2 rounded-full mt-8"
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default Reviews;
