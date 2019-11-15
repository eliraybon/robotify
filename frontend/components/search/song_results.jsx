import React from 'react';

const SongResults = ({ songs }) => {
  if (!songs) return null;
  const songResultItems = songs.map(song => {
    return (
      <li key={ song.id }>
        {song.title}
      </li>
    )
  })

  return (
    <ul>
      {songResultItems}
    </ul>
  )
}

export default SongResults;