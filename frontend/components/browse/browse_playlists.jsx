import React from 'react';
import PlaylistIndex from '../playlist/playlist_index_container';

const BrowsePlaylists= props => {
  return <PlaylistIndex match={props.match} />
}

export default BrowsePlaylists;