import React from 'react'
import "./Favorite.css"

const Favorite = (props) => {

  const {playlist} = props

  const faveList = playlist.filter(song => song.favorite === true)

  console.log('faveList', faveList)

  const loaded = () => (
    <div className='favorite-section'>
      <h2 className='favorite-header'>Favorite Songs List</h2>
      <div className='fave-container'>
        {faveList.map((tunr) => (
          <article>
            <h5>{tunr.song}</h5>
            <h5>{tunr.artist}</h5>
            <h5>{tunr.time}</h5>
          </article>
        ))}
      </div>
    </div>
  )

  const loading = () => (
    <div className='favorite-section'>
    <h2 className='favorite-header'>Favorite Songs List</h2>
    <div className='fave-container'>
      <h5>Song Artist Time</h5>
    </div>
  </div>
  )

  return faveList.length > 0 ? loaded() : loading()
}

export default Favorite