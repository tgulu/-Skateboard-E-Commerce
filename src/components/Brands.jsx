import React, { useState } from "react";
import { data } from "../data/ClothesData";

const Brands = () => {
  // Filter by category
  const [brands, setBrands] = useState(data);
  const filterType = (category) => {
    setBrands(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by price
  const filterPrice = (price) => {
    setBrands(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div id="items" className="bg-black w-full m-auto px-4 py-12">
      <h1 className="text-white font-bold text-4xl text-center">WHaT's NeW</h1>

      <div className="flex flex-col lg:flex-row justify-center py-10">
        {/* Filter Items */}
        <div className="text-center">
          <h2 className="font-bold text-2xl text-white justify-center">
            iTeMS
          </h2>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setBrands(data)}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              All
            </button>

            <button
              onClick={() => filterType("SkateBoards")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              SkateBoards
            </button>

            <button
              onClick={() => filterType("T-Shirts")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              T-Shirts
            </button>

            <button
              onClick={() => filterType("Shoes")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              Shoes
            </button>

            <button
              onClick={() => filterType("Trucks")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              Trucks
            </button>

            <button
              onClick={() => filterType("Trousers")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              Trousers
            </button>

            <button
              onClick={() => filterType("Jackets")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              Jackets
            </button>
          </div>
        </div>
      </div>

      {/* Filter Price */}
      <div className="flex flex-col lg:flex-row justify-center py-10">
        <div className="text-center">
          <h2 className="font-bold text-2xl text-white">PRiCe</h2>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => filterPrice("£0-£40")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              £0-£40
            </button>
            <button
              onClick={() => filterPrice("£40-£80")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              £40-£80
            </button>

            <button
              onClick={() => filterPrice("£80-£120")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              £80-£120
            </button>

            <button
              onClick={() => filterPrice("£120-£160")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              £120-£160
            </button>
            <button
              onClick={() => filterPrice("£160-£200")}
              className="m-1 border border-white bg-white hover:bg-black hover:text-white"
            >
              £160-£200
            </button>
          </div>
        </div>
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {brands.map((item, index, link) => (
          <div
            key={index}
            className="border shadow-lg rounded-md hover:scale-105 duration-300"
          >
            <a href={item.link} target="_blank" rel="noreferrer">
              <img src={item.image} alt={item.name} />{" "}
            </a>
            <div className="py-3 px-2">
              <p style={{ color: "white" }}>{item.name}</p>
              <p>
                <span style={{ color: "white" }}>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
