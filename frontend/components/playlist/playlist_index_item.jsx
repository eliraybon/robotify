import React from 'react';
import { Link } from 'react-router-dom';

export default class PlaylistIndexItem extends React.Component {

  render() {
    const { playlist } = this.props;

    return (
      <li className="playlist-index-item">
        <img
          src={playlist.cover_url}
          className="pi-playlist-cover"
          width="200"
          height="200"
        />

        <Link
          to={`/playlists/${playlist.id}`}
          className="pi-playlist-title-link"
        >
          {playlist.title}
        </Link>

        <Link
          to={`/library/playlists`}
          className="pi-user-email-link"
        >
          {playlist.user_email}
        </Link>
      </li>
    )
  }
}