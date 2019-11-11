import React from 'react';
import SongIndex from '../song/song_index';

export default class PlaylistShow extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylist(this.props.playlistId);
  }

  render() {
    const { playlist, songs } = this.props;
    if (!playlist) return null; 

    return (
      <section>
        <h1>{playlist.title}</h1>
        <h3>{playlist.user_email}</h3>
        <SongIndex songs={ songs } />
      </section>
    )
  }
}