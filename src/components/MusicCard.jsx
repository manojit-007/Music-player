/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";

const MusicCard = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[150px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img src={image} className=" rounded " alt="" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-100 text-sm">{desc}</p>
    </div>
  );
};

export default MusicCard;
