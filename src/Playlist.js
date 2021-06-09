import React from 'react'
import "./Playlist.css"

// playlist addFaveSong

const myPlaylist = (props) => {
    const {playlist, addFaveSong} = props

    const loaded = () => (
        <div className="playlist-section">
            <h2 className="heading playlist">PLAYLIST</h2>
            {playlist.map((song) => (
            <div className="song-info">
                <h3 className="song left tunr-info">{song.song}</h3>
                <h3 className="artist right tunr-info">{song.artist}</h3>
                <h4 className="time left tunr-info">{song.time}</h4>
                <button
                    className="fave-btn right"
                    onClick={() => 
                    addFaveSong(song)}
                >
                    &#9825;
                </button>
            </div>
        ))}
        </div>
    );

    const loading = () => (
        <div>
            <h1>Loading...</h1>
        </div>
    )

    return playlist.length > 0 ? loaded() : loading()
}

export default myPlaylist
