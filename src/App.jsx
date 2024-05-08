import { useContext } from "react";
import "./App.css";
import DisplayBox from "./components/DisplayBox";
import Player from "./components/Player";
import { AudioContext } from "./context/AudioContext";

function App() {
  const { audioRef, track } = useContext(AudioContext);
  return (
    <>
      <DisplayBox />
      <Player />
      <audio preload="auto" src={track.file} ref={audioRef}></audio>
    </>
  );
}

export default App;
