/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets";

export const AudioContext = createContext();

const AudioContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [soundBar, setSoundBar] = useState(0.5);
  const [playState, setPlayState] = useState(false);
  const [duration, setDuration] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });


  const play = () => {
    audioRef.current.play();
    setPlayState(true);
  };
  const pause = () => {
    audioRef.current.pause();
    setPlayState(false);
  };

  const playMusic = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayState(true);
  };

  const prevMusic = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayState(true);
    }
  };
  const nextMusic = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayState(true);
    }
  };

  /* */
  
  /* */

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
    await audioRef.current.play();
    setPlayState(true);
  };

  useEffect(() => {
    audioRef.current.volume = soundBar;
    const updateAudioTime = () => {
      const currentSeconds = Math.floor(audioRef.current.currentTime % 60);
      const formattedCurrentSeconds =
        currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;

      const currentMinutes = Math.floor(audioRef.current.currentTime / 60);
      const formattedCurrentMinutes =
        currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;

      const totalSeconds = Math.floor(audioRef.current.duration % 60);
      const formattedTotalSeconds =
        totalSeconds < 10 ? `0${totalSeconds}` : totalSeconds;

      const totalMinutes = Math.floor(audioRef.current.duration / 60);
      const formattedTotalMinutes =
        totalMinutes < 10 ? `0${totalMinutes}` : totalMinutes;

      seekBar.current.style.width = `${Math.floor(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      )}%`;

      

      setDuration((prevDuration) => ({
        ...prevDuration,
        currentTime: {
          second: formattedCurrentSeconds,
          minute: formattedCurrentMinutes,
        },
        totalTime: {
          second: formattedTotalSeconds,
          minute: formattedTotalMinutes,
        },
      }));
    };

    audioRef.current.addEventListener("timeupdate", updateAudioTime);
  }, [audioRef, setDuration, soundBar]);

 
  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playState,
    setPlayState,
    duration,
    setDuration,
    play,
    pause,
    playMusic,
    prevMusic,
    nextMusic,
    seekSong,
    soundBar,setSoundBar
  };

  return (
    <AudioContext.Provider value={contextValue}>
      {props.children}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;
