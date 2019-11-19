import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
        return playlist.user_id === this.props.currentUserId || playlist.isLiked
      });
      playlistItems = userPlaylists.map(playlist => {
        return (
          <li key={playlist.id}>
            <Link
              to={`/playlists/${playlist.id}`}
              className="sidebar-link sidebar-playlist-link"
            >
              {playlist.title}
            </Link>
          </li>
        )
      });
    }

    const active = "active";
    const home = (this.props.match.path === "/explore") ? active : '';
    const browse = (this.props.match.path === "/browse") ? active : '';
    const songs = (this.props.location.pathname === "/library/songs") ? active : '';
    const albums = (this.props.location.pathname === "/library/albums") ? active : '';
    const artists = (this.props.location.pathname === "/library/artists") ? active : ''; 
  
    return (
      <div className="sidebar">
        <div className="sidebar-nav">
          <div className={`sidebar-link ${home}`}>
            <img
              src="https://robotify-development.s3.amazonaws.com/home-nav-logo.png"
              width="17px"
              height="17px"
            />

            <Link
              to="/explore"
              className="sidebar-link-text"
            >
              Home
            </Link>
          </div>

          <div className={`sidebar-link ${browse}`}>
            <img
              src="https://robotify-development.s3.amazonaws.com/browse-nav-logo.png"
              width="17px"
              height="17px"
            />

            <Link
              to="/browse"
              className="sidebar-link-text"
            >
              Browse
            </Link>
          </div>
        </div>

        <div className="sidebar-scrollable">

          <div className="sidebar-library">

            <div className="sidebar-section-text">Your Library</div>

            <Link
                to="/library/songs"
                className={`sidebar-link ${songs}`}
              >
                Liked Songs
            </Link>
  
              <Link
                to="/library/albums"
              className={`sidebar-link ${albums}`}
              >
                Albums
            </Link>
  
              <Link
                to="/library/artists"
              className={`sidebar-link ${artists}`}
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

        <div className="new-playlist-button-container">
          <div 
            className="new-playlist-button" 
            onClick={() => this.props.openModal({ type: 'create', wildcard: null })}
          >
            <img
              src="https://robotify-development.s3.amazonaws.com/add-playlist.png"
              width="20px"
              height="20px"
            />

            <span className="new-playlist-button-text">New Playlist</span>
          </div>
        </div>
      </div>
    )
  }
}