import React from 'react';
import AlbumIndex from '../album/album_index_container';

const AlbumResults = ({ albums }) => {
  if (!albums.length) return null;
  return (
    <div className="result-block">
      <h3 className="search-category-header">Albums</h3>
      <AlbumIndex selectedAlbums={albums} />
    </div>
  )
}

export default AlbumResults;