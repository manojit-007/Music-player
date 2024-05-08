/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets";
import MusicCard from "./MusicCard";
import SongsCard from "./SongsCard";

const Home = () => {
  return <>
  <Navbar />
  <div className="mb-4 mt-2 flex flex-col">
    <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
    <div className="flex overflow-auto">
    {albumsData.map((item,index)=>(<MusicCard key={index} name={item.name} id={item.id} desc={item.desc} image={item.image} />))}
    </div>
  </div>
  <div className="mb-4 mt-2 flex flex-col">
    <h1 className="my-5 font-bold text-2xl">Top played today</h1>
    <div className="flex overflow-auto">
    {songsData.map((item,index)=>(<SongsCard key={index} id={item.id} name={item.name} desc={item.desc} image={item.image} />))}
    </div>
  </div>
  </>;
};

export default Home;
