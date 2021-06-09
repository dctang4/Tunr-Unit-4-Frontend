import "./App.css";
import { useState, useEffect } from "react";
import Favorite from './Favorite'
import Form from './Form'
import Playlist from './Playlist'

function App() {

  const url = "https://6rwmxhv336.execute-api.us-east-2.amazonaws.com/dev/tunr/"

  const [playlist, setPlaylist] = useState([]);

  const emptySong = {
    song: '',
    artist: '',
    time: ''
  }

  const [faveSong, setFaveSong] = useState([])

  const getSongs = () => {
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      setPlaylist(data.body)
    })
  }

  useEffect(() => getSongs(), [])
  // console.log(playlist)

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

  const handleFave = (song) => {
    fetch(url + song.tunrId, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(song)
    })
    .then(() => getSongs())
  }

  const handleDelete = (song) => {
    fetch(url + song.tunrId, {
      method: 'delete'
    })
    .then(() => getSongs())
  }


  return (
    <div className="App">
      <h1>TUNR.</h1>
      <h3 className="headline">FOR ALL YOUR PLAYLIST NEEDS</h3>
      <hr className="red-line"></hr>
      <Playlist 
        playlist={playlist}  
        addFaveSong={addFaveSong}
        handleFave={handleFave}
        handleDelete={handleDelete}
      />
      <Favorite 
        faveSong={faveSong}
        playlist={playlist}
      />
      <Form 
        song={emptySong} 
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
