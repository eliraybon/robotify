import React from 'react';
import SongIndex from '../song/song_index';

const SongResults = ({ songs }) => {
  if (!songs.length) return null;

  return (
    <div className="result-block">
      <h3 className="search-category-header">Songs</h3>
      <SongIndex songs={ songs } />
    </div>
  )
}

export default SongResults;