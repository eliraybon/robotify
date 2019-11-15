import React from 'react';

const ArtistResults = ({ artists }) => {
  if (!artists) return null;
  const artistResultItems = artists.map(artist => {
    return (
      <li key={artist.id}>
        {artist.name}
      </li>
    )
  })

  return (
    <ul>
      {artistResultItems}
    </ul>
  )
}

export default ArtistResults;