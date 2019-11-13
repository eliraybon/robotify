import React from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchPlaylists('library');
  }

  render() {
    const { playlists } = this.props;
    let userPlaylists;
    let playlistItems; 

    if (!playlists.length) {
      userPlaylists = null;
    } else {
     userPlaylists = playlists.filter(playlist => {
        return playlist.user_id === this.props.currentUserId
      });
      playlistItems = userPlaylists.map(playlist => {
        return (
          <li key={playlist.id}>
            <Link
              to={`/playlists/${playlist.id}`}
              className="sidebar-playlist-item"
            >
              {playlist.title}
            </Link>
          </li>
        )
      });
    }

    return (
      <div className="sidebar">
        <div className="sidebar-nav">
          <Link
              to="/explore"
              className="sidebar-link"
            >
              Home
          </Link>
  
            <Link
              to="/browse"
              className="sidebar-link"
            >
              Browse
          </Link>
        </div>
        <div className="sidebar-scrollable">

          <div className="sidebar-library">

            <div className="sidebar-section-text">Your Library</div>

            <Link
                to="/library/songs"
                className="sidebar-link"
              >
                Liked Songs
            </Link>
  
              <Link
                to="/library/albums"
                className="sidebar-link"
              >
                Albums
            </Link>
  
              <Link
                to="/library/artists"
                className="sidebar-link"
              >
                Artists
            </Link>
          </div>

          <div className="sidebar-playlists-container">
            <div className="sidebar-section-text">Playlists</div>

            <ul className="sidebar-playlists">
              {playlistItems}
            </ul>
          </div>
        </div>

        {/* <div className="new-playlist-button">
          <Link
            to="/playlists/create"
          >
            New Playlist
          </Link>
        </div> */}

        <div className="new-playlist-button">
          <button
            onClick={() => this.props.openModal('create')}
          >
            New Playlist
        </button>
        </div>

      </div>
    )
  }
}