import React from 'react';
import SongIndex from '../song/song_index';
import PlaylistHeader from './playlist_header';

export default class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.playlistId !== prevProps.playlistId) {
      this.props.fetchPlaylist(this.props.playlistId);
    }
  }

  render() {
    const { 
      playlist, 
      songs, 
      likePlaylist, 
      unlikePlaylist, 
      deletePlaylist,
      currentUserId,
      history 
    } = this.props;

    if (!playlist) return null; 

    return (
      <section>
        <PlaylistHeader 
          playlist={ playlist }
          deletePlaylist={ deletePlaylist }
          likePlaylist={ likePlaylist }
          unlikePlaylist={ unlikePlaylist }
          currentUserId={ currentUserId }
          history={ history }
        />
        <SongIndex songs={ songs } />
      </section>
    )
  }
}