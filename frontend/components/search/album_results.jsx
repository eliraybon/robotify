import React from 'react';

const AlbumResults = ({ albums }) => {
  if (!albums) return null;
  const albumResultItems = albums.map(album => {
    return (
      <li key={album.id}>
        {album.title}
      </li>
    )
  })

  return (
    <ul>
      {albumResultItems}
    </ul>
  )
}

export default AlbumResults;