import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const peopleDetail = [
  {
    name: "Jane Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "24 hour",
    profile1: "/profile.webp",
    profile2: "/profile2.webp",
  },
  {
    name: "Jane Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "48 hour",
    profile1: "/profile.webp",
    profile2: "/profile.webp",
  },
  {
    name: "Jane Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "24 hour",
    profile1: "/profile2.webp",
    profile2: "/profile3.jpeg",
  },
  {
    name: "Jane Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "12-12-2024",
    profile1: "/profile3.jpeg",
    profile2: "/profile.webp",
  },
  {
    name: "Jane Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "24 hour",
    profile1: "/profile2.webp",
    profile2: "/profile4.jpeg",
  },
  {
    name: "Jane Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "22 hour",
    profile1: "/profile.webp",
    profile2: "/profile.webp",
  },
  {
    name: "Jane Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "12 hour",
    profile1: "/profile2.webp",
    profile2: "/profile4.jpeg",
  },
  {
    name: "Jane Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "3 hour",
    profile1: "/profile3.jpeg",
    profile2: "/profile.webp",
  },
  {
    name: "Jane Brown",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "2 hour",
    profile1: "/profile3.jpeg",
    profile2: "/profile.webp",
  },
  // Add more people objects here
];

const messages = [
  {
    type: "received",
    sender: "Rosina Warner",
    profile: "/profile.webp",
    text: "Curabitur vel venenatis sem. Fusce suscipit pharetra nisl, sit amet blandit sem sollicitudin ac.",
    time: "24 hours ago",
  },
  {
    type: "received",
    sender: "Rosina Warner",
    profile: "/profile.webp",
    text: "Vivamus laoreet nisl a odio commodo varius. Donec arcu mauris, molestie a euismod at, mattis eu arcu.",
    time: "24 hours ago",
  },
  {
    type: "sent",
    sender: "You",
    profile: "/profile.webp",
    text: "Cras volutpat, velit sit amet cursus molestie, ex ipsum sagittis urna, vitae auctor augue erat eget justo.",
    time: "24 hours ago",
  },
  {
    type: "sent",
    sender: "You",
    profile: "/profile.webp",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptatibus, dolorum quo fugiat accusamus pariatur laudantium voluptates ipsa eius cumque quasi nesciunt eligendi totam ex fuga recusandae aliquid sint nemo dolore cupiditate.",
    time: "24 hours ago",
  },
  // Add more message objects here
];

const MessagePage = () => {
  return (
    <>
      <div className="flex justify-start items-start mx-auto w-[90%] lg:w-[70%]">
        <h3 className="text-lg font-medium">People</h3>
        <h3 className="text-lg font-medium hidden lg:block lg:ml-96">
          Your Message
        </h3>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start p-8 w-[95%] lg:w-[89%] mx-auto space-y-10 lg:space-y-0 lg:space-x-4">
        {/* People List Section */}
        <div className="w-full lg:w-[25%] h-[40%] bg-white rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <div className="px-4 py-1">
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pb-2">
                <li>
                  <Link
                    href="#"
                    className="px-2 lg:px-4 py-2 bg-[#FF0000] text-white rounded-md block text-center"
                  >
                    All
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="px-2 lg:px-4 py-2 hover:text-red-500 cursor-pointer text-gray-600 block text-center"
                  >
                    Buyers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="px-2 lg:px-4 py-2 hover:text-red-500 cursor-pointer text-gray-600 block text-center"
                  >
                    Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="px-2 lg:px-4 py-2 hover:text-red-500 cursor-pointer text-gray-600 block text-center"
                  >
                    Blocked
                  </Link>
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 mt-4"></div>
          </div>

          <div className="overflow-y-auto h-[calc(85vh-60px)] p-1">
            {/* People List Items */}
            {peopleDetail.map((person, index) => (
              <div className="flex items-center px-4 border-b py-2" key={index}>
                <Image
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg object-cover"
                  src={person.profile1}
                  alt={person.name}
                  width={64}
                  height={64}
                />
                <div className="ml-4 flex-1">
                  <h5 className="text-sm lg:text-lg font-medium mt-2">
                    {person.name}
                  </h5>
                  <p className="text-gray-400 text-xs lg:text-sm">
                    {person.description}
                  </p>
                  <small className="text-gray-400">{person.time} ago</small>
                </div>
                <Image
                  className="w-10 h-10 lg:w-14 lg:h-14 rounded-full mb-4 object-cover"
                  src={person.profile2}
                  alt={person.name}
                  width={56}
                  height={56}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Message Window Section */}
        <div className="w-full lg:w-[55%] bg-white rounded-lg shadow-lg h- flex flex-col justify-between">
          <div>
            <div className="p-4 lg:p-6 border-b border-gray-200 flex justify-between items-center">
              <div className="flex items-center">
                <Image
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
                  src="/profile.webp"
                  alt="Rosina Warner"
                  width={40}
                  height={40}
                />
                <h5 className="ml-2 text-sm lg:text-lg font-medium">
                  Rosina Warner
                </h5>
              </div>
              <div className="flex items-center">
                <h5 className="mr-2 text-sm lg:text-lg font-medium">You</h5>
                <Image
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full"
                  src="/profile.webp"
                  alt="You"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            {/* Scrollable Messages Section */}
            <div className="p-4 lg:p-6 flex flex-col space-y-4 overflow-y-auto bg-[#F2F2F2] h-[50vh] lg:h-[80%] max-h-[calc(100vh-300px)]">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start ${
                    message.type === "sent" ? "justify-end" : ""
                  }`}
                >
                  {message.type === "received" && (
                    <Image
                      className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
                      src={message.profile}
                      alt={message.sender}
                      width={40}
                      height={40}
                    />
                  )}
                  <div
                    className={`${
                      message.type === "sent" ? "mr-2 lg:mr-4" : "ml-2 lg:ml-4"
                    } p-4 lg:p-6 rounded-lg ${
                      message.type === "sent"
                        ? "bg-white text-black"
                        : "bg-[#E8E8E8] text-gray-700"
                    } w-[70%] lg:w-[40%]`}
                  >
                    {message.type === "sent" && (
                      <h5 className="text-sm font-medium">{message.sender}</h5>
                    )}
                    <p>{message.text}</p>
                    <small className="text-gray-500 block mt-2">
                      {message.time}
                    </small>
                  </div>
                  {message.type === "sent" && (
                    <Image
                      className="w-8 h-8 lg:w-10 lg:h-10 object-cover rounded-full"
                      src={message.profile}
                      alt={message.sender}
                      width={40}
                      height={40}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="p-4 bg-white">
            <form className="flex flex-col sm:flex-row">
              <input
                type="text"
                className="flex-1 p-2 sm:p-4 border rounded-lg mb-2 sm:mb-0 sm:mr-2"
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="bg-[#FF0000] text-white px-4 sm:px-6 py-2 sm:py-4 rounded-lg flex items-center justify-center"
              >
                Send <FaPaperPlane size={25} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessagePage;
