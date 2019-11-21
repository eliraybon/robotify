import React from 'react';
import AlbumIndex from '../album/album_index_container';

const BrowseAlbums = props => {
  return <AlbumIndex match={props.match} />
}

export default BrowseAlbums; 