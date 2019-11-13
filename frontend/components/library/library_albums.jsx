import React from 'react';
import AlbumIndex from '../album/album_index_container';

const LibraryAlbums = (props) => {
  return (
    <div className="library-albums">
      <h1 className ="albums-header">Albums</h1>
      <AlbumIndex match={props.match}/>
    </div>
  )
}

export default LibraryAlbums;

