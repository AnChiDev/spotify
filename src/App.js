import './App.css';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import Playing from './components/Playing';
import SongInfo from './components/SongInfo';
import { Songs } from './Context';
import DataSongs from "./data/songs.json";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if(!song) 
           setSong(DataSongs[0])
    else
           setSong(song)
  }
  return (
    <div className="App">
  <Songs.Provider value = {{DataSongs, song, handleSetSong}}>
  <Navbar/>
    <div className ="grid grid-cols-3 bg-[#FFD6EC] h-screen-player overflow-hidden">
      <SongInfo/>
      <ListSong/>
    </div>
    <Playing/>
  </Songs.Provider>
    </div>
  );
}

export default App;
