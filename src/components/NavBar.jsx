import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
import { CgCloseR, CgMenuGridR } from "react-icons/cg";
import { TbSkateboard } from "react-icons/tb";

import { Link } from "react-scroll";
import {
  GiSleevelessJacket,
  GiSkateboard,
  GiConverseShoe,
} from "react-icons/gi";

import { MdSkateboarding } from "react-icons/md";
import Cards from "./Cards";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const [mode, setMode] = useState("online");

  const handleClick = () => {
    setMode(mode === "online" ? "instore" : "online");
  };

  return (
    <div className="w-full mx-auto flex justify-between bg-black items-center p-4">
      {/* left side of navbar */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="pr-2 cursor-crosshair">
          <CgMenuGridR style={{ color: "white" }} size={30} />
        </div>

        <div>
          <h1
            className="text-white text-4xl sm:text-2xl lg:text-3xl pr-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <span style={{ marginRight: 5 }}>aXeL</span>
            <span className="border-b-2 white">STaLL</span>
            <GiSkateboard
              size={25}
              style={{ color: "white", marginLeft: 10 }}
            />
          </h1>
        </div>

        <div className="hidden lg:flex items-center bg-gray-white border border-white rounded-full py-1 px-6 mx-20 text-sm">
          <button
            className={`bg-${mode === "online" ? "white" : "black"} text-${
              mode === "online" ? "black" : "white"
            } rounded-full px-3  outline hover:outline-2 border border-black transition-transform`}
            onClick={handleClick}
            style={{
              transform:
                mode === "online" ? "translateX(-27%)" : "translateX(24%)",
            }}
          >
            {mode === "online" ? "oNLiNe" : "iNSToRe"}
          </button>
        </div>
      </div>

      {/* search bar */}

      <div className="bg-white rounded-full mx-4 sm:mx-2  items-center px-3 flex w-full md:w-[350px] lg:w-[700px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none text-sm"
          type="text"
          placeholder="SEARCH & DESTROY"
        />
      </div>

      {/*basket button*/}
      <button className=" bg-black text-white hidden md:flex rounded-full border border-white  py-2 items-center">
        <BsBasket size={20} className="mr-2" />
        BaSKeT
      </button>

      {/* Menu for mobile size */}
      {/* Overlay */}
      {nav ? (
        <div className=" bg-cyan-200/10 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        " "
      )}
      {/* Side menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[320px] h-screen bg-black z-10 duration-500"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-black z-10 duration-500"
        }
      >
        <CgCloseR
          onClick={() => setNav(!nav)}
          style={{ color: "white" }}
          size={30}
          className="absolute top-6 right-5 cursor-crosshair"
        />
        <h2
          className="text-white text-3xl py-6 p-5"
          style={{ display: "flex", alignItems: "center" }}
        >
          <span style={{ marginRight: 10 }}>aXeL </span>
          <span className="border-b-2 white">STaLL</span>
          <GiSkateboard size={25} style={{ color: "white", marginLeft: 10 }} />
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-white">
            <li className=" text-white text-xl py-4 pr-4 flex">
              <MdSkateboarding
                size={25}
                style={{ color: "white" }}
                className="mr-4"
              />

              <Link to="photos" smooth duration={200}>
                Skate
              </Link>
            </li>

            <li className=" text-white text-xl py-4 pr-4 flex">
              <TbSkateboard
                size={25}
                style={{ color: "white" }}
                className="mr-4"
              />
              <Link to="brands" smooth duration={200}>
                Look Book
              </Link>
            </li>

            <li className=" text-white text-xl py-4 pr-4 flex">
              <GiSleevelessJacket
                size={25}
                style={{ color: "white" }}
                className="mr-4"
              />
              <Link to="items" smooth duration={200}>
                Items
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
