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
    const { playlist, songs, likePlaylist, unlikePlaylist } = this.props;
    if (!playlist) return null; 

    return (
      <section>
        <PlaylistHeader 
          playlist={ playlist }
          likePlaylist={ likePlaylist }
          unlikePlaylist={ unlikePlaylist }
        />
        <SongIndex songs={ songs } />
      </section>
    )
  }
}