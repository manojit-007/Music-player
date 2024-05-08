/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AudioContext } from "../context/AudioContext";

const SongsCard = ({ image, name, desc, id }) => {
  const { playMusic } = useContext(AudioContext);

  return (
    <div>
      <div
        onClick={() => {
          playMusic(id);
        }}
        className={`min-w-[5rem] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff5f]`}
      >
        <img src={image} className="rounded" alt="" />
        <p className="font-bold mt-2 mb-1">{name}</p>
        <p className="text-slate-200 text-sm">{desc.slice(0, 15)}</p>
      </div>
    </div>
  );
};

export default SongsCard;

// const [selectedSongIndex, setSelectedSongIndex] = useState(null);
// setSelectedSongIndex(null);
// setSelectedSongIndex(id);
//  ${
//   id === selectedSongIndex ? 'bg-black' : 'bg-transparent'
// }`
