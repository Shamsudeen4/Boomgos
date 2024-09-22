import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import hp from "../Images/hp.png";
import profilePic from "../Images/pics.png";
import backgroundImg1 from "../Images/background2.png";
import backgroundImg2 from "../Images/background.png";
import { RiArrowDropRightLine } from "react-icons/ri";

const StoreList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [category, setCategory] = useState("All Categories");
  const [featured, setFeatured] = useState(false);
  const [openNow, setOpenNow] = useState(false);
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState("Most Reviewed");
  const [showSortOptions, setShowSortOptions] = useState(false);

  const stores = [
    {
      name: "Chuantho",
      country: "Estonia",
      img: "pics",
      bg: "background",
    },
    {
      name: "BANTOGO",
      country: "Austria",
      img: "../Images/bantogo.png",
    },
    {
      name: "Daraz",
      country: "Bangladesh",
      phone: "+8801682101010",
      img: "../Images/daraz.png",
    },
    {
      name: "BOOMGOS",
      country: "Estonia",
      img: "../Images/boomgos.png",
    },
    {
      name: "BOOMGOS",
      country: "Estonia",
      img: "../Images/boomgos2.png",
    },
  ];
  const sortedStores =
    sortBy === "Most Reviewed"
      ? [...stores].sort((a, b) => b.followers - a.followers)
      : stores;

  const handleRatingClick = (rate) => setRating(rate);

  const handleSortClick = (option) => {
    setSortBy(option);
    setShowSortOptions(false);
  };
  const cardData = [
    {
      title: "Daraz",
      phone: "+8801682101010",
      profilePic: profilePic,
      backgroundImg: backgroundImg1,
    },
    {
      title: "BOOMGOS",
      phone: "Estonia",
      profilePic: profilePic,
      backgroundImg: backgroundImg2,
    },
    {
      title: "Chuantho",
      phone: "Estonia",
      profilePic: profilePic,
      backgroundImg: backgroundImg1,
    },
    {
      title: "Chuantho",
      phone: "Estonia",
      profilePic: profilePic,
      backgroundImg: backgroundImg2,
    },
    {
      title: "Daraz",
      phone: "Estonia",
      profilePic: profilePic,
      backgroundImg: backgroundImg1,
    },
    {
      title: "BOOMGOS",
      phone: "Estonia",
      profilePic: profilePic,
      backgroundImg: backgroundImg2,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex py-8">
        <div className="w-3/4 p-4">
          <div className="flex justify-between items-center mb-6">
            <span>Total stores showing: {stores.length}</span>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowFilter(!showFilter)}
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                <i className="fas fa-filter mr-2"></i> Filter
              </button>

              <div className="relative">
                <button
                  className="bg-white border px-4 py-2 rounded"
                  onClick={() => setShowSortOptions(!showSortOptions)}
                >
                  Sort by: {sortBy}
                </button>
                {showSortOptions && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10">
                    <ul>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSortClick("Most Recent")}
                      >
                        Most Recent
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSortClick("Most Popular")}
                      >
                        Most Popular
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSortClick("Random")}
                      >
                        Random
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSortClick("Top Rated")}
                      >
                        Top Rated
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          {showFilter && (
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder="Search Vendor"
                  className="border p-2 rounded w-full"
                />

                <select
                  className="border p-2 rounded w-1/4"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>All Categories</option>
                  <option>Cameras</option>
                  <option>Desktop</option>
                  <option>Gaming</option>
                  <option>Laptops</option>
                </select>

                <button
                  className={`px-4 py-2 rounded ${
                    featured
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setFeatured(!featured)}
                >
                  Featured
                </button>

                <button
                  className={`px-4 py-2 rounded ${
                    openNow
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => setOpenNow(!openNow)}
                >
                  Open Now
                </button>

                <div className="flex items-center">
                  <label className="mr-2">Rating:</label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRatingClick(star)}
                      >
                        {rating >= star ? (
                          <FaStar className="text-yellow-400" />
                        ) : (
                          <FaRegStar className="text-yellow-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                  Apply
                </button>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="max-w-xs rounded overflow-hidden shadow-lg relative"
              >
                <div className="px-10 py-4">
                  <h1 className="text-2xl font-semibold my-1">{card.title}</h1>

                  <div className="">
                    <p className="text-gray-400 text-base">{card.phone}</p>
                  </div>
                  <img
                    src={card.profilePic}
                    className="absolute top-72 right-0 w-16 h-16 rounded-full border-4 border-white -mt-8 mr-5"
                    alt="Profile"
                  />
                </div>

                <img
                  src={card.backgroundImg}
                  alt=""
                  className="w-full h-auto"
                />
                <div className="px-5 pt-4 pb-4 bg-[#F7FBFC] flex items-center">
                  <RiArrowDropRightLine className="text-white text-4xl bg-orange-500" />
                  <button className="ml-2 bg-orange-500 rounded-sm px-5 py-2 text-sm font-semibold text-white">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-1/4 p-4 bg-gray-100">
          <h4 className="text-lg font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            {[
              "Blog",
              "Cameras",
              "Desktop",
              "Gaming",
              "Hi-Fi",
              "Keyboards",
              "Laptops",
              "Sound",
            ].map((category, index) => (
              <li key={index} className="text-gray-600">
                {category}
              </li>
            ))}
          </ul>

          <h4 className="text-lg font-semibold mt-8 mb-4">Recent Posts</h4>
          <ul className="space-y-4">
            {[
              {
                title: "Connecting Diverse Sellers and Buyers",
                date: "7 October 2023",
                comments: "2 Comments",
              },
              {
                title: "Discover the Ultimate Online Marketplace",
                date: "7 October 2023",
                comments: "No Comments",
              },
            ].map((post, index) => (
              <li key={index}>
                <p className="text-gray-600 font-medium">{post.title}</p>
                <p className="text-sm text-gray-400">
                  {post.date} | {post.comments}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img
                src={hp}
                alt="HP Envy Ad"
                className="w-full h-70 object-cover rounded-lg"
              />
            </div>
          </div>
          <h4 className="text-lg font-semibold mt-8 mb-4">Recent Posts</h4>
          <ul className="space-y-4">
            {[
              {
                title: "Lisabeth Brennen on",
                comments:
                  " New In Automatic Robot Window Cleaner Vacuum Smart Home Appliance Clean Glass Windows Washer Window Washing Electric Floor Mops",
              },

              {
                title: "Micael Montes on",
                comments:
                  "New In Automatic Robot Window Cleaner Vacuum Smart Home Appliance Clean Glass Windows Washer Window Washing Electric Floor Mops",
              },
              {
                title: "Franchesca Schwebach on",
                comments:
                  " New In Automatic Robot Window Cleaner Vacuum Smart Home Appliance Clean Glass Windows Washer Window Washing Electric Floor Mops",
              },
            ].map((post, index) => (
              <li key={index}>
                <p className="text-gray-600 font-medium">{post.title}</p>
                <p className="text-sm text-gray-400">{post.comments}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StoreList;
