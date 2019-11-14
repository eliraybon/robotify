import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util'; 

import Splash from './splash/splash_container';
import SignupForm from './session/signup_form_container';
import LoginForm from './session/login_form_container';
import Main from './main/Main';

import AlbumShow from './album/album_show_container';
import PlaylistShow from './playlist/playlist_show_container';
import CreatePlaylistForm from './playlist/create_playlist_form_container';
import EditPlaylistForm from './playlist/edit_playlist_form_container';
import ArtistShow from './artist/artist_show_container';
import AlbumIndex from './album/album_index_container';
import LibraryAlbums from './library/library_albums';
import PlaylistIndex from './playlist/playlist_index_container';
import LibrarySongs from './library/library_songs_container';
import LibraryArtists from './library/library_artists_container';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Splash} />
      <AuthRoute exact path="/signup" component={SignupForm} />
      <AuthRoute exact path="/login" component={LoginForm} />
      <ProtectedRoute path="/library" component={Main} />
      <ProtectedRoute path="/albums" component={Main} />
      <ProtectedRoute path="/playlists" component={Main} />
      <ProtectedRoute path="/artists" component={Main} />
      <ProtectedRoute path="/search" component={Main} />
    </Switch>
  </div>
);

export default App;



//This is the old version, which I'm not ready to ditch quite yet in case these
//new routes go horribly wrong

// const App = () => (
//   <div>
//     <Route exact path="/" component={Splash} />
//     <AuthRoute exact path="/signup" component={SignupForm} />
//     <AuthRoute exact path="/login" component={LoginForm} />
//     <ProtectedRoute path="/albums/:albumId" component={Main} />
//     <ProtectedRoute exact path="/library/albums" component={LibraryAlbums} />
//     <ProtectedRoute exact path="/library/playlists" component={PlaylistIndex} />
//     <ProtectedRoute exact path="/library/songs" component={LibrarySongs} />
//     <ProtectedRoute exact path="/library/artists" component={LibraryArtists} />
//     {/* <ProtectedRoute path="/albums/:albumId" component={AlbumShow} /> */}
//     <ProtectedRoute exact path="/playlists/create" component={CreatePlaylistForm} />
//     <ProtectedRoute exact path="/playlists/:playlistId" component={PlaylistShow} />
//     <ProtectedRoute exact path="/playlists/:playlistId/edit" component={EditPlaylistForm} />
//     <ProtectedRoute path="/artists/:artistId" component={ArtistShow} />
//   </div>
// );