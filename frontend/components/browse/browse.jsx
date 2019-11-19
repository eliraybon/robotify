import React from 'react';
import { Route, Redirect, NavLink } from 'react-router-dom';
import BrowseAlbums from './browse_albums';
import BrowseSongs from './browse_songs';
import BrowsePlaylists from './browse_playlists';
import BrowseGenres from './browse_genres';
import BrowseArtists from './browse_artists';

export default class Browse extends React.Component {
  render() {
    return (
    <div className="browse">

      <h1 className="browse-header">Browse</h1>

      <div className="browse-navbar">
        <ul className="browse-navbar-links">

          <li key={1}>
            <NavLink 
              activeClassName="active-navbar-link" 
              to={'/browse/albums'}
              >Albums
            </NavLink>
          </li>

          <li key={2}>
            <NavLink 
              activeClassName="active-navbar-link" 
              to={'/browse/playlists'}
              >Playlists
            </NavLink>
          </li>

          <li key={3}>
            <NavLink 
              activeClassName="active-navbar-link" 
              to={'/browse/artists'}
              >Artists
            </NavLink>
          </li>

          <li key={4}>
            <NavLink
              activeClassName="active-navbar-link" 
              to={'/browse/songs'}
            >Songs
            </NavLink>
          </li>

          <li key={5}>
            <NavLink
              activeClassName="active-navbar-link"
              to={'/browse/genres'}
            >Genres
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="browse-main">
        <Route exact path="/browse" render={ () => <Redirect to="/browse/albums" />} />
        <Route exact path="/browse/albums" component={BrowseAlbums} />
        <Route exact path="/browse/playlists" component={BrowsePlaylists} />
        <Route exact path="/browse/artists" component={BrowseArtists} />
        <Route exact path="/browse/songs" component={BrowseSongs} />
        <Route exact path="/browse/genres" component={BrowseGenres} />
      </div>

    </div>
    )
  }
}