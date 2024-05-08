/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black rounded-2xl p-2 cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(+1)}
            className="w-8 bg-black rounded-2xl p-2 cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[1rem] font-bold px-4 py-1 rounded-2xl hidden md:block">
            Subscribe
          </p>
          <p className="bg-transparent text-white text-[1rem] px-4 py-1 font-bold rounded-2xl hidden md:block">
            Install app
          </p>
          <p className="bg-white text-black w-6 h-6 rounded-full flex items-center justify-center">
            M
          </p>
        </div>
      </div>
      <div className="flex gap-2 text-black mt-4">
        <p className="bg-white text-black text-[1rem] font-semibold cursor-pointer px-4 py-1 rounded-2xl ">
          All
        </p>
        <p className="text-white bg-transparent text-[1rem] font-semibold cursor-pointer px-4 py-1 rounded-2xl ">
          Music
        </p>
        <p className="text-white bg-transparent text-[1rem] font-semibold cursor-pointer px-4 py-1 rounded-2xl ">
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
