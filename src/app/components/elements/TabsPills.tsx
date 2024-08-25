"use client";
import React, { useState } from "react";

const TabsPills = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedPill, setSelectedPill] = useState(0);

  const tabContent = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tempor tortor, ac imperdiet velit. Cras blandit neque eros, et consequat tortor maximus a. Nulla hendrerit tristique lectus, sed mattis lorem mattis eget. Morbi id diam est. Integer non condimentum est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque in augue porttitor dolor rhoncus porttitor sit amet nec lacus. Aenean ut odio et mauris semper molestie et viverra ante. Fusce sit amet ullamcorper orci. Proin tellus mi, malesuada ac neque vel, tincidunt cursus mauris. Praesent ut nunc neque. Curabitur scelerisque eros quis odio dictum porta. Etiam est tortor, commodo a nisi a, sagittis sodales nisl. Mauris sed mauris sagittis, eleifend ipsum ac, accumsan urna.",
    "Ut eleifend placerat pretium. Integer eros purus, malesuada sit amet justo vel, luctus elementum leo. Sed hendrerit suscipit enim, vitae laoreet justo mattis id. Etiam vel massa euismod, congue diam sit amet, rutrum sem. Fusce tempor, velit vitae aliquet varius, mi eros pulvinar lorem, et posuere diam dolor quis sem. Integer rutrum fringilla risus, eget hendrerit nunc finibus ac. Duis eu sapien quis lorem pharetra suscipit finibus commodo risus. Aenean eget felis vel mauris elementum laoreet ac nec neque. Aenean congue augue in leo vulputate pulvinar. Donec eget massa posuere, sagittis enim laoreet, commodo elit. Fusce vitae pretium justo. Donec fermentum tellus non tempus faucibus. Donec finibus, diam quis pretium tincidunt, elit sapien iaculis dolor, id laoreet nisl erat in ex. Aenean dictum eget sapien eu gravida. Nulla congue ex a quam dictum, at venenatis nisl elementum.",
    "Maecenas mollis maximus dapibus. Nulla ex magna, malesuada non imperdiet sed, ultrices quis purus. Duis condimentum accumsan bibendum. In consequat lorem et nulla efficitur vulputate ut non ante. Pellentesque vel pulvinar lectus. Suspendisse gravida leo non mi porttitor consectetur. Suspendisse dapibus, lacus vel accumsan ultrices, lorem nisi scelerisque magna, vitae laoreet enim diam sed nisl. Ut ut augue facilisis, tristique nisi eget, aliquam metus. Integer porttitor facilisis metus eu hendrerit. Nam et nunc id risus fringilla volutpat et non metus. Integer in velit et erat dictum congue. Nam iaculis augue non ex tristique volutpat.",
  ];

  const pillContent = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a tempor tortor, ac imperdiet velit. Cras blandit neque eros, et consequat tortor maximus a. Nulla hendrerit tristique lectus, sed mattis lorem mattis eget. Morbi id diam est. Integer non condimentum est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque in augue porttitor dolor rhoncus porttitor sit amet nec lacus. Aenean ut odio et mauris semper molestie et viverra ante. Fusce sit amet ullamcorper orci. Proin tellus mi, malesuada ac neque vel, tincidunt cursus mauris. Praesent ut nunc neque. Curabitur scelerisque eros quis odio dictum porta. Etiam est tortor, commodo a nisi a, sagittis sodales nisl. Mauris sed mauris sagittis, eleifend ipsum ac, accumsan urna.",
    "Ut eleifend placerat pretium. Integer eros purus, malesuada sit amet justo vel, luctus elementum leo. Sed hendrerit suscipit enim, vitae laoreet justo mattis id. Etiam vel massa euismod, congue diam sit amet, rutrum sem. Fusce tempor, velit vitae aliquet varius, mi eros pulvinar lorem, et posuere diam dolor quis sem. Integer rutrum fringilla risus, eget hendrerit nunc finibus ac. Duis eu sapien quis lorem pharetra suscipit finibus commodo risus. Aenean eget felis vel mauris elementum laoreet ac nec neque. Aenean congue augue in leo vulputate pulvinar. Donec eget massa posuere, sagittis enim laoreet, commodo elit. Fusce vitae pretium justo. Donec fermentum tellus non tempus faucibus. Donec finibus, diam quis pretium tincidunt, elit sapien iaculis dolor, id laoreet nisl erat in ex. Aenean dictum eget sapien eu gravida. Nulla congue ex a quam dictum, at venenatis nisl elementum.",
    "Maecenas mollis maximus dapibus. Nulla ex magna, malesuada non imperdiet sed, ultrices quis purus. Duis condimentum accumsan bibendum. In consequat lorem et nulla efficitur vulputate ut non ante. Pellentesque vel pulvinar lectus. Suspendisse gravida leo non mi porttitor consectetur. Suspendisse dapibus, lacus vel accumsan ultrices, lorem nisi scelerisque magna, vitae laoreet enim diam sed nisl. Ut ut augue facilisis, tristique nisi eget, aliquam metus. Integer porttitor facilisis metus eu hendrerit. Nam et nunc id risus fringilla volutpat et non metus. Integer in velit et erat dictum congue. Nam iaculis augue non ex tristique volutpat.",
  ];

  return (
    <div className="flex flex-wrap w-full sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto mt-10 md:mt-20">
      {/* Tabs Section */}
      <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
        <h2 className="text-xl mb-4">Tabs</h2>
        <div className="mb-4">
          <div className="flex space-x-2 sm:space-x-4">
            {["One", "Two", "Three"].map((tab, index) => (
              <button
                key={index}
                onClick={() => setSelectedTab(index)}
                className={`py-2 px-4 text-sm md:text-base ${
                  selectedTab === index
                    ? "bg-white border border-gray-300"
                    : "bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <hr className="mt-4 w-full" />
        </div>
        <div>
          <p className="text-sm md:text-base">{tabContent[selectedTab]}</p>
        </div>
      </div>

      {/* Pills Section */}
      <div className="w-full sm:w-1/2 pl-0 sm:pl-6">
        <h2 className="text-xl mb-4">Pills</h2>
        <div className="flex space-x-2 sm:space-x-4 mb-4 border-b border-gray-200 pb-2">
          {["One", "Two", "Three"].map((pill, index) => (
            <button
              key={index}
              onClick={() => setSelectedPill(index)}
              className={`py-2 px-4 rounded-md text-sm md:text-base ${
                selectedPill === index
                  ? "bg-[#FF0000] text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
        <div>
          <p className="text-sm md:text-base">{pillContent[selectedPill]}</p>
        </div>
      </div>
    </div>
  );
};

export default TabsPills;
