/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { assets } from "../assets/index";
import { AudioContext } from "../context/AudioContext";

const Player = () => {
  const {
    seekBar,
    seekBg,
    playState,
    play,
    pause,
    track,
    duration,
    prevMusic,
    nextMusic,
    seekSong,
    soundBar,
    setSoundBar,
  } = useContext(AudioContext);
  return (
    <div className="h-[10%] border-t-2 border-slate-400 bg-black flex justify-between items-center text-white px-4 absolute bottom-0 max-w-full w-full">
      <div className="hidden lg:flex items-center gap-4 h-full">
        <img src={track.image} alt="" className="h-full" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 15)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img src={assets.search_icon} alt="" className="w-4 cursor-pointer" />
          <img
            onClick={prevMusic}
            src={assets.prev_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
          {!playState ? (
            <img
              onClick={play}
              src={assets.play_icon}
              alt=""
              className="w-4 cursor-pointer"
            />
          ) : (
            <img
              onClick={pause}
              src={assets.pause_icon}
              alt=""
              className="w-4 cursor-pointer"
            />
          )}

          <img
            onClick={nextMusic}
            src={assets.next_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
          <img src={assets.loop_icon} alt="" className="w-4 cursor-pointer" />
          <div className="flex lg:hidden items-center bg-black p-1 rounded-full gap-2 opacity-75">
            <img
              onClick={() => setSoundBar(soundBar === 0 ? 0.1 : 0)}
              src={soundBar === 0 ? assets.mute_icon : assets.volume_icon}
              alt=""
              className="w-4 cursor-pointer"
            />

            <input
              className="h-1 w-full border-none bg-sky-300 rounded-full"
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={soundBar}
              onChange={(e) => setSoundBar(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <p>
            {duration.currentTime.minute}:{duration.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-stone-50 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-2 w-0 border-none bg-sky-300 rounded-full"
            />
          </div>
          <p>
            {duration.totalTime.minute}:{duration.totalTime.second}
          </p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2 opacity-75">
        {!playState ? (
          <img
            onClick={play}
            src={assets.play_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
        ) : (
          <img
            onClick={pause}
            src={assets.pause_icon}
            alt=""
            className="w-4 cursor-pointer"
          />
        )}

        <img src={assets.speaker_icon} alt="" className="w-4 cursor-pointer" />
        <img
          onClick={() => setSoundBar(soundBar === 0 ? 0.5 : 0)}
          src={soundBar === 0 ? assets.mute_icon : assets.volume_icon}
          alt=""
          className="w-4 cursor-pointer"
        />

        <div className="w-[20vw] max-w-[5rem] bg-slate-50 rounded h-2 flex items-center">
          <input
            className="h-1 w-full border-none bg-sky-300 rounded-full"
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={soundBar}
            onChange={(e) => setSoundBar(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
{
  /* <hr
              ref={soundBar}
              className="h-1 w-4 border-none bg-sky-300 rounded-full"
            /> */
  //     <div className=" w-[20vw] max-w-[5rem] bg-slate-50 rounded h-2 flex items-center">
  //   <input
  //     className="h-1 w-4 border-none bg-sky-300 rounded-full"
  //     type="range"
  //     min={0}
  //     max={1}
  //     name=""
  //     value={0.5}
  //     id=""
  //   />
  // </div>
}
