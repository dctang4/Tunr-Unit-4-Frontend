import "./App.css";
import { useState, useEffect } from "react";
import Favorite from './Favorite'
import Form from './Form'
import Playlist from './Playlist'

function App() {

  const url = "https://6rwmxhv336.execute-api.us-east-2.amazonaws.com/dev/"

  const [playlist, setPlaylist] = useState([]);

  const emptySong = {
    song: '',
    artist: '',
    time: ''
  }

  const [faveSong, setFaveSong] = useState([])

  const getSongs = () => {
    fetch(url + "tunr/")
    .then((resp) => resp.json())
    .then((data) => {
      setPlaylist(data.body)
      console.log(playlist)
    })
  }

  useEffect(() => getSongs(), [])
  console.log(playlist)

  const addFaveSong = (song) => {
    setFaveSong([...faveSong, song])
  }

  const handleSubmit = (newSong) => {
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newSong)
    })
    .then(() => getSongs())
  }

  // const handleFave = (newSong) => {
  //   fetch(url, {
  //     method: 'put',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newSong)
  //   })
  //   .then(() => getSongs())
  // }


  return (
    <div className="App">
      <h1>TUNR.</h1>
      <h3 className="headline">FOR ALL YOUR PLAYLIST NEEDS</h3>
      <hr className="red-line"></hr>
      <Playlist playlist={playlist}  addFaveSong={addFaveSong}/>
      <Favorite faveSong={faveSong}/>
      <Form song={emptySong} handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
