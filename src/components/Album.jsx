/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets'
import { AudioContext } from "../context/AudioContext";

const Album = () => {
  const { playMusic } = useContext(AudioContext);
  const { id } = useParams()
  const albumData = albumsData[id]
  const [selectedSongIndex, setSelectedSongIndex] = useState(null); // State to store the selected song index

  return (
    <>
      <div>
        <Navbar />
        <div className="flex gap-8 flex-col mt-10 md:flex-row md:item-end">
          <img className='w-48 rounded' src={albumData.image} alt="" />
          <div className="flex flex-col">
              <p>Playlist</p>
              <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
              <h4>{albumData.name}</h4>
              <p className='mt-1'>
                  <img className='inline-block w-5 mr-[5px]' src={assets.spotify_logo} alt="" />
                  <b>Music Player</b> - 
                  • 15,36,578 likes - 
                  • <b>50 songs</b> - 
                  about 2 hr 30 min
              </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
          <p><b className=' mr-4'>#</b>Title</p>
          <p>Album</p>
          <div className="hidden sm:block"> Date added</div>
          <img src={assets.clock_icon} className='m-auto w-4' alt="" />
      </div>
      <hr />
      {
          songsData.map((item, index) => (
            <div
              onClick={() => { playMusic(index); setSelectedSongIndex(index); }}
              key={index}
              className={`grid grid-cols-3 mt-2 sm:grid-cols-4 gap-2 items-center text-[#d4d4d4] hover:bg-[#9191912b] cursor-pointer ${
                index === selectedSongIndex ? 'bg-black' : ''
              }`}
            >
              <p className="text-white">
                <b className="mr-1 text-[#d4d4d4] ">{index + 1}</b>
                <img className="inline w-8 mr-5" src={item.image} alt="" />
                {item.name}
              </p>
              <p className="text-[1rem]">{albumData.name.slice(0, 6)}</p>
              <p className="text-[1rem] hidden sm:block">5days ago</p>
              <p className="text-[1rem] text-center">{item.duration}</p>
            </div>
          ))
      }
    </>
  )
}

export default Album

