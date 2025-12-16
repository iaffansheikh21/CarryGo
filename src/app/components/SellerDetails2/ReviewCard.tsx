import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({
  title,
  date,
  rating,
  review,
  name,
  width,
  height,
}: any) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between"
      style={{ width, height, margin: "5px" }}
    >
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-600 ">
          <div className="flex text-red-500 mr-2">
            {[...Array(rating)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="mr-2">{date}</span>
          <span>{name}</span>
        </div>
        <p className="text-gray-700 mb-4">{review}</p>
      </div>
      <div className="flex items-center mt-auto">
        <Image
          src="/profile.webp"
          alt={name}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full mr-4"
        />
        <span className="text-sm font-semibold">{name}</span>
      </div>
    </div>
  );
};

const ReviewList = () => {
  const reviewsData = [
    {
      id: 1,
      title: "Positive experience!",
      date: "02.05.2017",
      rating: 5,
      review:
        "Nam pulvinar tortor nec lacinia efficitur. Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus.",
      name: "Jane Doe",
      width: "300px",
      height: "400px",
    },
    {
      id: 2,
      title: "Perfect seller. I am satisfied.",
      date: "02.05.2017",
      rating: 5,
      review:
        "Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum.Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum.Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum.",
      name: "John Doe",
      width: "320px",
      height: "430px",
    },
    {
      id: 3,
      title: "Quick dispatch and good communication",
      date: "02.05.2017",
      rating: 4,
      review:
        "Aenean nec turpis condimentum, mollis mauris id, scelerisque quam.",
      name: "John Doe",
      width: "280px",
      height: "390px",
    },
    {
      id: 4,
      title: "Great product for sale and good prices",
      date: "02.05.2017",
      rating: 5,
      review:
        "Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum.",
      name: "Jane Doe",
      width: "290px",
      height: "380px",
    },
    {
      id: 5,
      title: "Great product for sale and good prices",
      date: "02.05.2017",
      rating: 5,
      review:
        "Integer erat tortor, ultricies ut est vel, euismod imperdiet lacus. Aenean nec turpis condimentum.",
      name: "Jane Doe",
      width: "290px",
      height: "420px",
    },
  ];

  return (
    <div className="w-full max-w-5xl lg:ml-72 ">
      <h2 className="text-2xl font- mb-6">Reviews</h2>
      <div className="flex flex-wrap justify-start">
        {reviewsData.map((review) => (
          <ReviewCard
            key={review.id}
            title={review.title}
            date={review.date}
            rating={review.rating}
            review={review.review}
            name={review.name}
            width={review.width}
            height={review.height}
          />
        ))}
      </div>
      <button className="bg-red-500 text-white px-6 py-2 rounded-full mt-8 mx-auto block">
        Load More
      </button>
    </div>
  );
};

export default ReviewList;
