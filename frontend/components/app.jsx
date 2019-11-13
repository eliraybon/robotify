import React from "react";
import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import AlbumShow from './album/album_show_container';
import PlaylistShow from './playlist/playlist_show_container';
import CreatePlaylistForm from './playlist/create_playlist_form_container';
import EditPlaylistForm from './playlist/edit_playlist_form_container';
import ArtistShow from './artist/artist_show_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 
import Main from './main/Main';
import AlbumIndex from './album/album_index_container';
import LibraryAlbums from './library/library_albums';
import PlaylistIndex from './playlist/playlist_index_container';
import LibrarySongs from './library/library_songs_container';




const App = () => (
  <div>
    <Route exact path="/" component={ SplashContainer } />
    <AuthRoute exact path="/signup" component={ SignupFormContainer } />
    <AuthRoute exact path="/login" component={ LoginFormContainer } />
    {/* <ProtectedRoute path="/albums" component={ Main } /> */}
    <ProtectedRoute exact path="/library/albums" component={ LibraryAlbums } />
    <ProtectedRoute exact path="/library/playlists" component={PlaylistIndex} />
    <ProtectedRoute exact path="/library/songs" component={LibrarySongs} />
    <ProtectedRoute path="/albums/:albumId" component={AlbumShow} />
    <ProtectedRoute exact path="/playlists/create" component={ CreatePlaylistForm } />
    <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShow} />
    <ProtectedRoute exact path="/playlists/:playlistId/edit" component={ EditPlaylistForm } />
    <ProtectedRoute path="/artists/:artistId" component={ArtistShow} />
  </div>
);

export default App;