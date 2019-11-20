import React from 'react';
import ArtistIndex from '../artist/artist_index';

const ArtistResults = ({ artists }) => {
  if (!artists.length) return null;

  return (
    <div className="result-block">
      <h3 className="search-category-header">Artists</h3>
      <ArtistIndex artists={artists} />
    </div>
  )
}

export default ArtistResults;