import React from 'react';
import { Link } from 'react-router-dom';

export default class PlaylistHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { playlist } = this.props;
    // const userLink = <Link
    //   className="ah-artist-link"
    //   to={`/user/${playlist.user_id}`}>
    //   {album.artist_name}
    // </Link>

    return (
      <div className="playlist-header">

        <img
          src={playlist.cover_url}
          width="200"
          height="200"
          className="ph-playlist-cover">
        </img>

        <span className="ph-playlist-tag">Playlist</span>
        <span className="ph-playlist-title">{playlist.title}</span>
        <p>{playlist.description}</p>

        <span className="ph-other-info">
          <span className="ph-user">Created by {playlist.user_email} - </span>
          <span className="ph-song-count">{playlist.song_ids.length} Songs</span>
        </span>
      </div>
    )
  }
}