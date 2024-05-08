/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Album from "./Album";
import { albumsData } from "../assets";

const DisplayBox = () => {
  const display = useRef();
  const location = useLocation();
  // console.log(location);
  const insideAlbum = location.pathname.includes("album");
  //if true
  const albumId = insideAlbum ? location.pathname.slice(-1) : "";

  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(()=>{
    if(insideAlbum){
      display.current.style.background = `linear-gradient(135deg,${bgColor}, #172554)`
    } else {
      display.current.style.background = `#172554`
    }
  })

  return (
    <div
      ref={display}
      className="w-[100%] h-screen p-2 px-6 pt-4 bg-transparent text-white overflow-auto"
    >
      <h2 className="text-3xl bg-transparent text-white flex justify-center items-center font-bold">
        Music Player
      </h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:id" element={<Album />} />
      </Routes>
    </div>
  );
};

export default DisplayBox;
