import React from "react";
import "./Playlist.css";

// playlist addFaveSong

const myPlaylist = (props) => {
  const { playlist, handleFave, handleDelete } = props;

  const fave = (song, event) => {
    song.favorite = !song.favorite;
    handleFave(song);
  };

  const faveBtn = (song) => {
    if (song.favorite === true) {
      return (
        <button className="fave-btn right" style={{color: 'red'}} onClick={() => fave(song)}>
            &#9829;
        </button>
      )
    } else {
      return (
        <button className="fave-btn right" style={{color: 'black'}} onClick={() => fave(song)}>
            &#9829;
        </button>
      )
    }
  }

  const loaded = () => (
    <div className="playlist-section">
      <h2 className="heading playlist">PLAYLIST</h2>
      {playlist.map((song) => (
        <div className="song-info">
          <h3 className="song left tunr-info">{song.song}</h3>
          <h3 className="artist right tunr-info">{song.artist}</h3>
          <h4
            className="delete right"
            onClick={() => {
              handleDelete(song);
            }}
          >
            X
          </h4>
          <h4 className="time left tunr-info">{song.time}</h4>
          <p></p>
          {faveBtn(song)}
        </div>
      ))}
    </div>
  );

  const loading = () => (
    <div>
      <h1>Loading...</h1>
    </div>
  );

  return playlist.length > 0 ? loaded() : loading();
};

export default myPlaylist;
